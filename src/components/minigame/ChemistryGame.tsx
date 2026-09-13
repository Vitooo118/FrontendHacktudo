import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

type Method = "filtracao" | "decantacao" | "magnetica" | "destilacao" | "centrifugacao";

const mixtures = [
  {
    title: "Água + Areia",
    desc: "Amostra turva coletada de rio. Os grãos sólidos não se dissolvem na água e tendem a se assentar no fundo com o tempo.",
    type: "Mistura Heterogênea (Sólido + Líquido)",
    correctMethod: "filtracao",
    colors: { bottom: "#c2b280", top: "#4ba3e3" },
    particleType: "sand",
    explanation: "Correto! A FILTRAÇÃO retém os grãos de areia insolúveis no filtro de papel enquanto a água límpida passa como filtrado."
  },
  {
    title: "Água + Óleo Vegetal",
    desc: "Dois líquidos imiscíveis (não se misturam) que formam duas fases distintas e visíveis.",
    type: "Mistura Heterogênea (Líquido + Líquido)",
    correctMethod: "decantacao",
    colors: { bottom: "#3a88c8", top: "#e8c83e" },
    particleType: "none",
    explanation: "Perfeito! A DECANTAÇÃO (com funil de bromo/decantação) permite escoar a água mais densa pela torneira inferior, restando o óleo."
  },
  {
    title: "Areia + Limalha de Ferro",
    desc: "Pó escuro com grãos minerais e partículas de ferro finamente trituradas misturadas solidamente.",
    type: "Mistura Heterogênea (Sólido + Sólido)",
    correctMethod: "magnetica",
    colors: { bottom: "#d2b48c", top: "transparent" },
    particleType: "iron",
    explanation: "Excelente! A SEPARAÇÃO MAGNÉTICA atrai a limalha de ferro ferromagnética através do ímã, deixando a areia intocada."
  },
  {
    title: "Água + Sal de Cozinha (Solução)",
    desc: "Líquido totalmente transparente e homogêneo. O cloreto de sódio está completamente dissolvido.",
    type: "Mistura Homogênea (Sólido dissolvido)",
    correctMethod: "destilacao",
    colors: { bottom: "#5fa8d3", top: "transparent" },
    particleType: "none",
    explanation: "Muito bem! A DESTILAÇÃO SIMPLES aquece o líquido: a água evapora (menor ponto de ebulição), condensa em outro tubo, deixando o sal para trás."
  },
  {
    title: "Amostra de Sangue Fresco",
    desc: "Suspensão coloidal contendo plasma líquido e células sanguíneas densas em suspensão quase indistinguíveis a olho nu.",
    type: "Mistura Heterogênea (Coloide)",
    correctMethod: "centrifugacao",
    colors: { bottom: "#8a0303", top: "#a80f0f" },
    particleType: "blood",
    explanation: "Correto! A CENTRIFUGAÇÃO acelera o processo de sedimentação por força centrífuga, separando o plasma amarelado do sedimento celular vermelho."
  }
];

const methodsData = [
  { id: "filtracao", icon: "🧪", label: "Filtração" },
  { id: "decantacao", icon: "⏳", label: "Decantação" },
  { id: "magnetica", icon: "🧲", label: "Separação Magnética" },
  { id: "destilacao", icon: "🔥", label: "Destilação Simples" },
  { id: "centrifugacao", icon: "🌀", label: "Centrifugação" },
];

const cssStyles = `
  .chemistry-stage {
      height: 280px;
      background: radial-gradient(circle at center, #1b222c 0%, #0d1117 100%);
      border-radius: 8px;
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px dashed #30363d;
  }
  .chem-beaker {
      width: 140px;
      height: 180px;
      border: 3px solid rgba(255, 255, 255, 0.4);
      border-top: none;
      border-radius: 0 0 16px 16px;
      position: relative;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(2px);
      overflow: hidden;
      display: flex;
      flex-direction: column-reverse;
  }
  .chem-liquid-layer {
      width: 100%;
      position: relative;
  }
  .chem-particles {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
  }
  .chem-particle {
      position: absolute;
      border-radius: 50%;
  }
  .chem-magnet {
      width: 40px;
      height: 50px;
      border: 8px solid #ff4d4d;
      border-bottom: 8px solid silver;
      border-radius: 20px 20px 0 0;
      position: absolute;
      z-index: 10;
      transition: all 0.5s ease;
  }
  .chem-funnel {
      width: 0;
      height: 0;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-top: 60px solid rgba(255,255,255,0.3);
      position: absolute;
      top: 20px;
  }
  .chem-bunsen-burner {
      position: absolute;
      bottom: 10px;
      width: 60px;
      height: 20px;
      background: #555;
      border-radius: 5px;
  }
  .chem-flame {
      position: absolute;
      top: -25px;
      left: 20px;
      width: 20px;
      height: 25px;
      background: radial-gradient(circle, #ffeb3b, #ff5722);
      border-radius: 50% 50% 20% 20%;
      animation: chem-flicker 0.2s infinite alternate;
  }
  @keyframes chem-flicker {
      0% { transform: scale(1); opacity: 0.9; }
      100% { transform: scale(1.1) translateY(-2px); opacity: 1; }
  }
`;

type Particle = {
  id: number;
  size: string;
  left: string;
  top: string;
  bg: string;
  transition?: string;
  transform?: string;
};

export function ChemistryGame() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedMethod, setSelectedMethod] = useState<Method | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [feedback, setFeedback] = useState<{ success: boolean; text: string } | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);

  // Visual States
  const [particles, setParticles] = useState<Particle[]>([]);
  const [layerBottomStyle, setLayerBottomStyle] = useState({ height: "50%", backgroundColor: "", transition: "all 1s ease" });
  const [layerTopStyle, setLayerTopStyle] = useState({ height: "0%", backgroundColor: "", transition: "all 1s ease" });
  const [magnetStyle, setMagnetStyle] = useState({ top: "-70px" });
  const [funnelDisplay, setFunnelDisplay] = useState("none");
  const [burnerDisplay, setBurnerDisplay] = useState("none");
  const [beakerStyle, setBeakerStyle] = useState({ transform: "none", transition: "all 1s ease" });

  const loadSample = (index: number) => {
    const current = mixtures[index];
    if (!current) return;
    
    setCurrentIdx(index);
    setSelectedMethod(null);
    setIsProcessing(false);
    setFeedback(null);
    
    setMagnetStyle({ top: "-70px" });
    setFunnelDisplay("none");
    setBurnerDisplay("none");
    setBeakerStyle({ transform: "none", transition: "all 1s ease" });
    
    setLayerBottomStyle({ height: "50%", backgroundColor: current.colors.bottom, transition: "all 1s ease" });
    if (current.colors.top !== "transparent") {
      setLayerTopStyle({ height: "40%", backgroundColor: current.colors.top, transition: "all 1s ease" });
    } else {
      setLayerTopStyle({ height: "0%", backgroundColor: "transparent", transition: "all 1s ease" });
    }
    
    const newParticles: Particle[] = [];
    if (current.particleType === "iron" || current.particleType === "sand") {
      for (let i = 0; i < 35; i++) {
        newParticles.push({
          id: i,
          size: (Math.random() * 4 + 3) + "px",
          left: (Math.random() * 120 + 10) + "px",
          top: (Math.random() * 60 + 110) + "px",
          bg: current.particleType === "iron" ? "#2f3542" : "#8c7b4e"
        });
      }
    }
    setParticles(newParticles);
  };

  // Inicializa a primeira amostra
  useEffect(() => {
    loadSample(0);
  }, []);

  const runAnimation = (method: string, isSuccess: boolean, cb: () => void) => {
    if (method === "magnetica") {
      setMagnetStyle({ top: "40px" });
      setTimeout(() => {
        if (isSuccess) {
          setParticles(prev => prev.map(p => ({ ...p, top: "60px", transition: "all 0.8s ease" })));
        }
        setTimeout(cb, 1200);
      }, 600);
    } else if (method === "filtracao") {
      setFunnelDisplay("block");
      setTimeout(() => {
        if (isSuccess) {
          setLayerTopStyle(prev => ({ ...prev, height: "0%" }));
          setLayerBottomStyle(prev => ({ ...prev, height: "30%" }));
        }
        setTimeout(cb, 1200);
      }, 600);
    } else if (method === "decantacao") {
      setTimeout(() => {
        if (isSuccess) {
          setLayerBottomStyle(prev => ({ ...prev, height: "10%" }));
        }
        setTimeout(cb, 1200);
      }, 600);
    } else if (method === "destilacao") {
      setBurnerDisplay("block");
      setTimeout(() => {
        if (isSuccess) {
          setLayerBottomStyle(prev => ({ ...prev, height: "15%" }));
          setLayerTopStyle(prev => ({ ...prev, height: "0%" }));
        }
        setTimeout(() => {
          setBurnerDisplay("none");
          cb();
        }, 1200);
      }, 600);
    } else if (method === "centrifugacao") {
      setBeakerStyle({ transform: "rotate(2500deg)", transition: "all 2.5s ease-in-out" });
      setTimeout(() => {
        if (isSuccess) {
          setLayerTopStyle(prev => ({ ...prev, height: "35%", backgroundColor: "#f1e05a" }));
          setLayerBottomStyle(prev => ({ ...prev, height: "15%", backgroundColor: "#da3633" }));
        }
        setBeakerStyle({ transform: "none", transition: "all 0.5s ease" });
        cb();
      }, 2500);
    } else {
      setTimeout(cb, 1000);
    }
  };

  const handleAction = () => {
    if (feedback !== null) {
      if (currentIdx + 1 < mixtures.length) {
        loadSample(currentIdx + 1);
      } else {
        setIsGameOver(true);
      }
      return;
    }

    if (!selectedMethod || isProcessing) return;
    setIsProcessing(true);

    const sample = mixtures[currentIdx];
    if (!sample) return;

    const isSuccess = selectedMethod === sample.correctMethod;

    runAnimation(selectedMethod, isSuccess, () => {
      if (isSuccess) {
        setScore(s => s + 20);
        setFeedback({ success: true, text: sample.explanation });
      } else {
        setFeedback({ 
          success: false, 
          text: "Método Ineficaz! Essa técnica não explora as propriedades físicas corretas dos componentes dessa mistura." 
        });
      }
      setIsProcessing(false);
    });
  };

  if (isGameOver) {
    return (
      <div className="w-full bg-card rounded-xl border border-border p-8 text-center shadow-sm">
        <h2 className="text-3xl font-bold mb-4">Laboratório Concluído!</h2>
        <div className="text-5xl font-black text-blue-500 mb-6">
          {score} <span className="text-2xl text-muted-foreground font-normal">/ {mixtures.length * 20}</span>
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          {score === mixtures.length * 20 
            ? "Perfeito! Você dominou a separação de misturas." 
            : "Bom trabalho! Continue estudando os processos de separação."}
        </p>
        <Button 
          onClick={() => { 
            setIsGameOver(false); 
            setScore(0); 
            loadSample(0); 
          }} 
          size="lg"
        >
          Refazer Laboratório
        </Button>
      </div>
    );
  }

  const current = mixtures[currentIdx];
  if (!current) return null;

  return (
    <div className="w-full bg-card rounded-xl border border-border p-5 md:p-8 shadow-sm">
      <style>{cssStyles}</style>
      
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm font-semibold bg-secondary px-4 py-2 rounded-full">
          Amostra: <span className="text-blue-500">{currentIdx + 1}</span> / {mixtures.length}
        </div>
        <div className="text-sm font-semibold bg-secondary px-4 py-2 rounded-full">
          Pontos: <span className="text-yellow-500">{score}</span>
        </div>
      </div>

      <div className="bg-secondary/50 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
        <h2 className="text-lg font-bold mb-1">{current.title}</h2>
        <p className="text-sm text-muted-foreground mb-2">{current.desc}</p>
        <span className="inline-block px-2.5 py-1 text-xs rounded bg-blue-500/10 text-blue-500 font-medium">
          {current.type}
        </span>
      </div>

      <div className="chemistry-stage mb-6">
        <div className="chem-magnet" style={magnetStyle}></div>
        <div className="chem-funnel" style={{ display: funnelDisplay }}></div>
        <div className="chem-bunsen-burner" style={{ display: burnerDisplay }}>
          <div className="chem-flame"></div>
        </div>

        <div className="chem-beaker" style={beakerStyle}>
          <div className="chem-liquid-layer" style={layerBottomStyle}></div>
          <div className="chem-liquid-layer" style={layerTopStyle}></div>
          <div className="chem-particles">
            {particles.map(p => (
              <div 
                key={p.id} 
                className="chem-particle" 
                style={{ 
                  width: p.size, 
                  height: p.size, 
                  left: p.left, 
                  top: p.top, 
                  backgroundColor: p.bg,
                  transition: p.transition || "none",
                  transform: p.transform || "none"
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-base font-semibold mb-3">Escolha a Técnica Adequada:</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {methodsData.map(m => (
            <button
              type="button"
              key={m.id}
              onClick={() => setSelectedMethod(m.id as Method)}
              disabled={isProcessing || feedback !== null}
              className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${ 
                selectedMethod === m.id 
                  ? "ring-2 ring-blue-500 bg-blue-500/10 border-blue-500" 
                  : "border-border bg-card hover:border-blue-500/50 hover:bg-secondary" 
              } ${isProcessing || feedback !== null ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            >
              <span className="text-2xl mb-2">{m.icon}</span>
              <span className="text-xs font-medium text-center">{m.label}</span>
            </button>
          ))}
        </div>
      </div>

      {feedback && (
        <div className={`p-4 rounded-lg mb-6 flex items-start gap-3 border ${feedback.success ? "bg-green-500/10 border-green-500/50 text-green-700 dark:text-green-400" : "bg-red-500/10 border-red-500/50 text-red-700 dark:text-red-400"}`}>
          {feedback.success ? <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" /> : <XCircle className="w-5 h-5 mt-0.5 shrink-0" />}
          <div>
            <strong className="block mb-1">{feedback.success ? "Sucesso!" : "Método Ineficaz!"}</strong>
            <span className="text-sm">{feedback.text}</span>
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <Button
          size="lg"
          onClick={handleAction}
          disabled={(!selectedMethod && feedback === null) || isProcessing}
          className={feedback !== null ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-green-600 hover:bg-green-700 text-white"}
        >
          {isProcessing 
            ? "Processando..." 
            : feedback !== null 
              ? (currentIdx < mixtures.length - 1 ? "Próxima Amostra ➜" : "Finalizar Laboratório") 
              : "Executar Separação"}
        </Button>
      </div>
    </div>
  );
}
