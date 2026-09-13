import { COMPONENT_DEFS, ComponentType } from "./types";

export function ComponentToolbox({
  onAddClick,
  wireMode,
  onToggleWireMode
}: {
  onAddClick: (type: ComponentType) => void;
  wireMode: boolean;
  onToggleWireMode: () => void;
}) {
  return (
    <div className="w-full bg-[#1e1e2f] p-2 md:p-3 rounded-xl border border-[#333] shadow-[0_4px_10px_rgba(0,0,0,0.5)] flex justify-around items-center box-border z-10 shrink-0 gap-2 overflow-x-auto">
      <h3 className="hidden">Componentes</h3>
      {Object.values(COMPONENT_DEFS).map((def) => (
        <button
          key={def.type}
          type="button"
          draggable
          onDragStart={(e) => {
            e.dataTransfer.setData("componentType", def.type);
          }}
          onClick={() => onAddClick(def.type)}
          className="bg-[#2b2b40] text-white px-3 py-2 rounded-md cursor-pointer text-center font-bold text-xs md:text-sm border-2 border-transparent select-none active:border-[#00ffcc] hover:border-[#444] transition-colors flex flex-col md:flex-row items-center gap-1 md:gap-2 min-w-[70px] whitespace-nowrap"
        >
          <span className="text-lg md:text-xl">{def.emoji}</span>
          <span>{def.name}</span>
        </button>
      ))}
    </div>
  );
}
