import { useState, useCallback } from "react";
import { ComponentType, CircuitNode, Wire, SimulationResult } from "./types";
import { ComponentToolbox } from "./ComponentToolbox";
import { CircuitBoard } from "./CircuitBoard";
import { evaluateCircuit } from "./circuit-engine";
import { Button } from "@/components/ui/button";
import { Trophy, Star } from "lucide-react";
import { toast } from "sonner";

const generateId = () => Math.random().toString(36).substring(2, 9);

const LEVELS = [
  { id: 1, name: "Circuito Básico", targetComponents: ["battery", "switch", "led"], description: "Faça o LED acender! Conecte a bateria, a chave e o LED formando um caminho fechado." },
  { id: 2, name: "Adicionando Resistor", targetComponents: ["battery", "switch", "resistor", "led"], description: "Proteja o LED! Inclua um resistor no circuito." },
  { id: 3, name: "Motor", targetComponents: ["battery", "switch", "motor"], description: "Faça o motor girar conectando-o à bateria e à chave." },
  { id: 4, name: "Desafio Livre", targetComponents: [], description: "Monte o circuito que quiser. Experimente misturar componentes!" }
];

export function CircuitSimulator() {
  const [nodes, setNodes] = useState<CircuitNode[]>([]);
  const [wires, setWires] = useState<Wire[]>([]);
  const [wireMode, setWireMode] = useState(false);
  const [activeTerminal, setActiveTerminal] = useState<{ nodeId: string; terminalId: string } | null>(null);
  
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  
  const [simulationResult, setSimulationResult] = useState<SimulationResult | null>(null);
  const [feedbackMsg, setFeedbackMsg] = useState<{text: string, type: 'success' | 'error' | 'warning'} | null>(null);

  const currentLevelInfo = LEVELS.find(l => l.id === level) || { id: 1, name: "Circuito", targetComponents: [], description: "" };

  const handleAddComponent = useCallback((type: ComponentType, pos?: { x: number; y: number }) => {
    if (level < 4) {
      if (nodes.some(n => n.type === type)) {
        toast.warning(`Você já tem um(a) ${type} na placa. Use o existente para este desafio!`);
        return;
      }
      if (!currentLevelInfo.targetComponents.includes(type) && type !== "buzzer") {
        toast.warning(`Você não precisa de ${type} neste nível.`);
        return;
      }
    }
    
    const newNode: CircuitNode = {
      id: `node_${generateId()}`,
      type,
      position: pos || { x: 100 + Math.random() * 100, y: 100 + Math.random() * 100 },
      state: { isOn: false }
    };
    setNodes(prev => [...prev, newNode]);
    setSimulationResult(null);
    setFeedbackMsg({ text: "Componente adicionado!", type: "success" });
  }, [level, nodes, currentLevelInfo]);

  const handleUpdateNodePosition = useCallback((id: string, pos: { x: number; y: number }) => {
    setNodes(prev => prev.map(n => n.id === id ? { ...n, position: pos } : n));
  }, []);

  const handleToggleSwitch = useCallback((id: string) => {
    setNodes(prev => prev.map(n => n.id === id ? { ...n, state: { isOn: !n.state.isOn } } : n));
    setSimulationResult(null);
    setFeedbackMsg(null);
  }, []);

  const handleConnectTerminal = useCallback((nodeId: string, terminalId: string) => {
    setWireMode(true);
    
    if (!activeTerminal) {
      setActiveTerminal({ nodeId, terminalId });
      setFeedbackMsg({ text: "Origem ok! Toque no destino.", type: "warning" });
    } else {
      if (activeTerminal.nodeId === nodeId && activeTerminal.terminalId === terminalId) {
        setActiveTerminal(null);
        setFeedbackMsg({ text: "Seleção cancelada.", type: "warning" });
        return;
      }

      if (activeTerminal.nodeId !== nodeId) {
        const exists = wires.some(w => 
          (w.fromNodeId === activeTerminal.nodeId && w.fromTerminalId === activeTerminal.terminalId && w.toNodeId === nodeId && w.toTerminalId === terminalId) ||
          (w.toNodeId === activeTerminal.nodeId && w.toTerminalId === activeTerminal.terminalId && w.fromNodeId === nodeId && w.fromTerminalId === terminalId)
        );
        
        if (!exists) {
          const newWire: Wire = {
            id: `wire_${generateId()}`,
            fromNodeId: activeTerminal.nodeId,
            fromTerminalId: activeTerminal.terminalId,
            toNodeId: nodeId,
            toTerminalId: terminalId
          };
          setWires(prev => [...prev, newWire]);
          setSimulationResult(null);
          setFeedbackMsg({ text: "Fio conectado!", type: "success" });
        } else {
          setFeedbackMsg({ text: "Já conectado!", type: "warning" });
        }
      }
      setActiveTerminal(null);
    }
  }, [activeTerminal, wires]);

  const handleTestCircuit = () => {
    const result = evaluateCircuit(nodes, wires);
    setSimulationResult(result);
    
    if (result.isValid && result.isClosed) {
      let isLevelComplete = false;
      const activeTypes = nodes.filter(n => result.poweredComponents.includes(n.id)).map(n => n.type);
      
      if (level === 1 && activeTypes.includes("battery") && activeTypes.includes("switch") && activeTypes.includes("led")) {
        isLevelComplete = true;
      } else if (level === 2 && activeTypes.includes("battery") && activeTypes.includes("switch") && activeTypes.includes("resistor") && activeTypes.includes("led")) {
        isLevelComplete = true;
      } else if (level === 3 && activeTypes.includes("battery") && activeTypes.includes("switch") && activeTypes.includes("motor")) {
        isLevelComplete = true;
      } else if (level === 4) {
        isLevelComplete = true;
      }

      if (isLevelComplete) {
        setFeedbackMsg({
          text: "✨ Sucesso! Circuito fechado!",
          type: 'success'
        });
        
        let earned = 0;
        if (level === 1) earned += 100;
        else if (level === 2 || level === 3) earned += 200;
        else earned += 300;

        if (activeTypes.includes("led")) earned += 50;
        
        toast.success(`+${earned} pontos!`);
        setScore(s => s + earned);
        
        if (level < 4) {
          setTimeout(() => {
            if (window.confirm("Avançar para o próximo nível?")) {
              setLevel(l => l + 1);
              handleReset();
            }
          }, 2000);
        }
      } else {
        setFeedbackMsg({
          text: "⚠️ Circuito ligado, mas faltam componentes chave.",
          type: 'warning'
        });
      }
    } else {
      if (result.errors.length > 0 && result.errors[0]) {
        setFeedbackMsg({ text: "❌ " + result.errors[0], type: 'error' });
      } else if (result.warnings.length > 0 && result.warnings[0]) {
        setFeedbackMsg({ text: "⚠️ " + result.warnings[0], type: 'warning' });
      } else {
        setFeedbackMsg({ text: "⚠️ Circuito não formou caminho fechado.", type: 'error' });
      }
    }
  };

  const handleReset = () => {
    setNodes([]);
    setWires([]);
    setActiveTerminal(null);
    setSimulationResult(null);
    setFeedbackMsg({ text: "Placa limpa.", type: "warning" });
    setWireMode(false);
  };

  return (
    <div className="flex flex-col w-full max-w-lg mx-auto bg-[#12121f] p-3 md:p-5 rounded-2xl border border-zinc-800 shadow-2xl items-center">
      <div className="w-full flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800">
          <Trophy className="w-4 h-4 text-yellow-500" />
          <span className="text-zinc-100 font-bold text-xs uppercase">Nível {level}</span>
        </div>
        <div className="flex items-center gap-2 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-zinc-100 font-bold text-xs">{score} pts</span>
        </div>
      </div>

      <div className="w-full flex flex-col gap-[15px] items-center">
        <ComponentToolbox 
          onAddClick={handleAddComponent}
          wireMode={wireMode}
          onToggleWireMode={() => {
            setWireMode(!wireMode);
            setActiveTerminal(null);
          }}
        />
        
        <div className="w-full flex flex-col items-center relative">
          <CircuitBoard
            nodes={nodes}
            wires={wires}
            isPowered={simulationResult?.isClosed || false}
            wireMode={wireMode}
            poweredComponentIds={simulationResult?.poweredComponents || []}
            onUpdateNodePosition={handleUpdateNodePosition}
            onToggleSwitch={handleToggleSwitch}
            onConnectTerminal={handleConnectTerminal}
            activeTerminal={activeTerminal}
            onAddDroppedComponent={handleAddComponent}
          />
          
          <div className="w-full flex flex-col gap-2 mt-3 items-center">
            <div id="statusMsg" className="font-bold text-[13px] text-[#ffcc00] text-center min-h-[20px] mb-1">
              {feedbackMsg ? feedbackMsg.text : (wireMode ? "Modo Fio: ON. Toque em 2 itens." : "Adicione os itens e ligue-os.")}
            </div>
            <div className="flex justify-between w-full gap-2.5">
              <Button 
                onClick={() => {
                  setWireMode(!wireMode);
                  setActiveTerminal(null);
                }} 
                className={`flex-1 h-[40px] text-[13px] font-bold rounded-[5px] cursor-pointer text-center hover:opacity-90 transition-colors ${wireMode ? 'bg-[#ff3333] text-white hover:bg-[#cc0000]' : 'bg-[#3333ff] text-white hover:bg-[#0000cc]'}`}
              >
                Modo Fio: {wireMode ? "ON" : "OFF"}
              </Button>
              <Button 
                onClick={handleTestCircuit} 
                className="flex-1 h-[40px] bg-[#00ffcc] text-[#12121f] text-[13px] font-bold rounded-[5px] cursor-pointer text-center hover:bg-[#00e6b8]"
              >
                Testar ⚡
              </Button>
              <Button 
                onClick={handleReset} 
                className="flex-1 h-[40px] bg-[#d32f2f] text-white text-[13px] font-bold rounded-[5px] cursor-pointer text-center hover:bg-[#b71c1c]"
              >
                Limpar 🗑️
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
