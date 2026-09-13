import { useRef, useState, useEffect } from "react";
import { CircuitNode, COMPONENT_DEFS, Wire, ComponentType } from "./types";
import { WireLayer } from "./WireLayer";
import { cn } from "@/lib/utils";

export function CircuitBoard({
  nodes,
  wires,
  isPowered,
  wireMode,
  poweredComponentIds,
  onUpdateNodePosition,
  onToggleSwitch,
  onConnectTerminal,
  activeTerminal,
  onAddDroppedComponent,
}: {
  nodes: CircuitNode[];
  wires: Wire[];
  isPowered: boolean;
  wireMode: boolean;
  poweredComponentIds: string[];
  onUpdateNodePosition: (id: string, pos: { x: number; y: number }) => void;
  onToggleSwitch: (id: string) => void;
  onConnectTerminal: (nodeId: string, terminalId: string) => void;
  activeTerminal: { nodeId: string; terminalId: string } | null;
  onAddDroppedComponent: (type: ComponentType, pos: { x: number; y: number }) => void;
}) {
  const boardRef = useRef<HTMLDivElement>(null);
  const [boardRect, setBoardRect] = useState<DOMRect | null>(null);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(null);
  const [draggingNode, setDraggingNode] = useState<string | null>(null);

  useEffect(() => {
    const updateRect = () => {
      if (boardRef.current) {
        setBoardRect(boardRef.current.getBoundingClientRect());
      }
    };
    updateRect();
    window.addEventListener("resize", updateRect);
    return () => window.removeEventListener("resize", updateRect);
  }, []);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (activeTerminal && wireMode) {
      setCursorPos({ x: e.clientX, y: e.clientY });
    }
    if (draggingNode && boardRef.current) {
      const rect = boardRef.current.getBoundingClientRect();
      const newX = Math.max(30, Math.min(rect.width - 30, e.clientX - rect.left));
      const newY = Math.max(30, Math.min(rect.height - 30, e.clientY - rect.top));
      onUpdateNodePosition(draggingNode, { x: newX, y: newY });
    }
  };

  const handlePointerUp = () => {
    setDraggingNode(null);
  };

  const handleNodeClick = (nodeId: string) => {
    if (!wireMode) {
      const node = nodes.find(n => n.id === nodeId);
      if (node?.type === "switch") {
        onToggleSwitch(nodeId);
      }
      return;
    }
    
    const node = nodes.find(n => n.id === nodeId);
    if (!node) return;
    const def = COMPONENT_DEFS[node.type];
    
    if (!activeTerminal) {
      onConnectTerminal(nodeId, def.terminals[0]?.id || "t1");
    } else {
      if (activeTerminal.nodeId === nodeId) {
        onConnectTerminal(activeTerminal.nodeId, activeTerminal.terminalId);
        return;
      }
      const used = wires.flatMap(w => [w.fromNodeId === nodeId ? w.fromTerminalId : null, w.toNodeId === nodeId ? w.toTerminalId : null]).filter(Boolean);
      const available = def.terminals.find(t => !used.includes(t.id)) || def.terminals[0];
      onConnectTerminal(nodeId, available?.id || "t1");
    }
  };

  return (
    <div
      ref={boardRef}
      className="relative w-full h-[320px] md:h-[400px] bg-[#e8e8e8] rounded-lg border-[4px] border-[#444] shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] overflow-hidden box-border touch-none"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onDragOver={(e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
      }}
      onDrop={(e) => {
        e.preventDefault();
        const type = e.dataTransfer.getData("componentType") as ComponentType;
        if (type && boardRef.current) {
          const rect = boardRef.current.getBoundingClientRect();
          onAddDroppedComponent(type, { x: e.clientX - rect.left, y: e.clientY - rect.top });
        }
      }}
    >
      <div className="absolute bottom-1 right-2 text-[#888] text-[10px] z-[1] select-none pointer-events-none">
        Protoboard
      </div>

      <WireLayer
        nodes={nodes}
        wires={wires}
        isPowered={isPowered}
        activeTerminal={activeTerminal}
        cursorPos={cursorPos}
        boardRect={boardRect}
        wireMode={wireMode}
      />

      {nodes.map((node) => {
        const def = COMPONENT_DEFS[node.type];
        if (!def) return null;

        const isPoweredComponent = isPowered && poweredComponentIds.includes(node.id);
        const isActive = activeTerminal?.nodeId === node.id;

        return (
          <div
            key={node.id}
            className={cn(
              "absolute -translate-x-1/2 -translate-y-1/2 w-[65px] h-[65px] bg-white border-2 rounded-lg flex flex-col items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.2)] select-none z-20 transition-colors",
              isActive ? "border-[#ffcc00] ring-2 ring-[#ffcc00]" : "border-[#333] hover:border-[#666]",
              node.type === "switch" && node.state.isOn ? "bg-[#81c784] border-[#2e7d32]" : "",
              wireMode ? "cursor-crosshair" : "cursor-pointer"
            )}
            style={{ left: node.position.x, top: node.position.y }}
            onPointerDown={(e) => {
              if (wireMode) return;
              e.stopPropagation();
              setDraggingNode(node.id);
              (e.target as HTMLElement).setPointerCapture(e.pointerId);
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleNodeClick(node.id);
            }}
          >
            <div className={cn("text-xl select-none flex items-center justify-center", isPoweredComponent && node.type === "led" ? "bg-[#ff3333] shadow-[0_0_12px_#ff3333] rounded-full w-8 h-8 text-white" : "")}>
              {isPoweredComponent && node.type === "led" ? "🌟" : def.emoji}
            </div>
            <div className="text-[11px] font-bold text-center text-[#333] select-none leading-tight mt-1 px-1 break-words">
              {node.type === "switch" ? (node.state.isOn ? "Ligada" : "Deslig.") : def.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}
