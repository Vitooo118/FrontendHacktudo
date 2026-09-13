import { CircuitNode, Wire, COMPONENT_DEFS } from "./types";

export function WireLayer({
  nodes,
  wires,
  isPowered,
  activeTerminal,
  cursorPos,
  boardRect,
  wireMode,
}: {
  nodes: CircuitNode[];
  wires: Wire[];
  isPowered: boolean;
  activeTerminal: { nodeId: string; terminalId: string } | null;
  cursorPos: { x: number; y: number } | null;
  boardRect: DOMRect | null;
  wireMode: boolean;
}) {
  const getTerminalPos = (nodeId: string) => {
    const node = nodes.find((n) => n.id === nodeId);
    if (!node) return null;
    // Usando as coordenadas diretas do nó, que com o translate do CSS formam o centro exato do bloco 65x65
    return {
      x: node.position.x,
      y: node.position.y,
    };
  };

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
      {wires.map((w) => {
        const p1 = getTerminalPos(w.fromNodeId);
        const p2 = getTerminalPos(w.toNodeId);
        if (!p1 || !p2) return null;

        return (
          <line
            key={w.id}
            x1={p1.x}
            y1={p1.y}
            x2={p2.x}
            y2={p2.y}
            stroke="#00ffcc"
            strokeWidth="4"
            strokeLinecap="round"
            className="transition-all duration-300"
          />
        );
      })}

      {activeTerminal && cursorPos && boardRect && wireMode && (() => {
        const start = getTerminalPos(activeTerminal.nodeId);
        if (!start) return null;
        const relativeX = cursorPos.x - boardRect.left;
        const relativeY = cursorPos.y - boardRect.top;
        return (
          <line
            x1={start.x}
            y1={start.y}
            x2={relativeX}
            y2={relativeY}
            stroke="#ffcc00"
            strokeWidth="4"
            strokeDasharray="6,6"
            strokeLinecap="round"
          />
        );
      })()}
    </svg>
  );
}
