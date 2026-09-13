export type ComponentType = "battery" | "switch" | "led" | "resistor" | "motor" | "buzzer";

export interface Position {
  x: number;
  y: number;
}

export interface Terminal {
  id: string;
  type: "positive" | "negative" | "neutral";
  offsetX: number;
  offsetY: number;
}

export interface BaseComponentDef {
  type: ComponentType;
  name: string;
  emoji: string;
  terminals: Terminal[];
}

export const COMPONENT_DEFS: Record<ComponentType, BaseComponentDef> = {
  battery: {
    type: "battery",
    name: "Bateria",
    emoji: "🔋",
    terminals: [
      { id: "t1", type: "positive", offsetX: 0, offsetY: -35 },
      { id: "t2", type: "negative", offsetX: 0, offsetY: 35 },
    ],
  },
  switch: {
    type: "switch",
    name: "Chave",
    emoji: "🔘",
    terminals: [
      { id: "t1", type: "neutral", offsetX: -30, offsetY: 0 },
      { id: "t2", type: "neutral", offsetX: 30, offsetY: 0 },
    ],
  },
  led: {
    type: "led",
    name: "LED",
    emoji: "💡",
    terminals: [
      { id: "t1", type: "positive", offsetX: -15, offsetY: 30 },
      { id: "t2", type: "negative", offsetX: 15, offsetY: 30 },
    ],
  },
  resistor: {
    type: "resistor",
    name: "Resistor",
    emoji: "🔌",
    terminals: [
      { id: "t1", type: "neutral", offsetX: -35, offsetY: 0 },
      { id: "t2", type: "neutral", offsetX: 35, offsetY: 0 },
    ],
  },
  motor: {
    type: "motor",
    name: "Motor",
    emoji: "⚡",
    terminals: [
      { id: "t1", type: "neutral", offsetX: -25, offsetY: 0 },
      { id: "t2", type: "neutral", offsetX: 25, offsetY: 0 },
    ],
  },
  buzzer: {
    type: "buzzer",
    name: "Buzzer",
    emoji: "🔔",
    terminals: [
      { id: "t1", type: "positive", offsetX: -25, offsetY: 0 },
      { id: "t2", type: "negative", offsetX: 25, offsetY: 0 },
    ],
  },
};

export interface CircuitNode {
  id: string;
  type: ComponentType;
  position: Position;
  state: {
    isOn: boolean;
  };
}

export interface Wire {
  id: string;
  fromNodeId: string;
  fromTerminalId: string;
  toNodeId: string;
  toTerminalId: string;
}

export interface SimulationResult {
  isValid: boolean;
  isClosed: boolean;
  errors: string[];
  warnings: string[];
  poweredComponents: string[];
}
