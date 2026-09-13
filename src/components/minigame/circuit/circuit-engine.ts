import { CircuitNode, Wire, SimulationResult, COMPONENT_DEFS } from "./types";

export function evaluateCircuit(nodes: CircuitNode[], wires: Wire[]): SimulationResult {
  const result: SimulationResult = {
    isValid: false,
    isClosed: false,
    errors: [],
    warnings: [],
    poweredComponents: [],
  };

  const batteries = nodes.filter((n) => n.type === "battery");
  if (batteries.length === 0) {
    result.errors.push("Falta a bateria no circuito.");
    return result;
  }
  if (batteries.length > 1) {
    result.errors.push("Muitas baterias conectadas. Use apenas uma para este desafio.");
    return result;
  }

  const battery = batteries[0]!;
  const batteryConnections = wires.filter(
    (w) => w.fromNodeId === battery.id || w.toNodeId === battery.id
  );

  if (batteryConnections.length === 0) {
    result.warnings.push("A bateria não está conectada a nada.");
    return result;
  }

  const adj = new Map<string, string[]>();
  const addEdge = (u: string, v: string) => {
    if (!adj.has(u)) adj.set(u, []);
    if (!adj.has(v)) adj.set(v, []);
    adj.get(u)!.push(v);
    adj.get(v)!.push(u);
  };

  // Arestas externas (fios)
  for (const w of wires) {
    addEdge(`${w.fromNodeId}:${w.fromTerminalId}`, `${w.toNodeId}:${w.toTerminalId}`);
  }

  // Arestas internas dos componentes
  for (const n of nodes) {
    if (n.type === "battery") continue;
    if (n.type === "switch" && !n.state.isOn) continue;

    const def = COMPONENT_DEFS[n.type];
    if (def.terminals.length === 2) {
      addEdge(`${n.id}:${def.terminals[0]!.id}`, `${n.id}:${def.terminals[1]!.id}`);
    }
  }

  const defBat = COMPONENT_DEFS["battery"];
  const posTerminal = defBat.terminals.find((t) => t.type === "positive")!.id;
  const negTerminal = defBat.terminals.find((t) => t.type === "negative")!.id;

  const startNode = `${battery.id}:${posTerminal}`;
  const targetNode = `${battery.id}:${negTerminal}`;

  if (!adj.has(startNode) || !adj.has(targetNode)) {
    result.warnings.push("O circuito está aberto.");
    return result;
  }

  // BFS para encontrar o caminho elétrico
  const queue: string[][] = [[startNode]];
  const visited = new Set<string>();
  visited.add(startNode);

  let validPath: string[] | null = null;
  let hasInvertedLED = false;

  while (queue.length > 0) {
    const path = queue.shift()!;
    const curr = path[path.length - 1]!;

    if (curr === targetNode) {
      const pathNodes = new Set(path.map((p) => p.split(":")[0]));
      let invertedFoundInPath = false;

      // Validação de polaridade de componentes
      for (const n of nodes) {
        if (n.type === "led" && pathNodes.has(n.id)) {
          const ledDef = COMPONENT_DEFS["led"];
          const p = `${n.id}:${ledDef.terminals.find((t) => t.type === "positive")!.id}`;
          const n_neg = `${n.id}:${ledDef.terminals.find((t) => t.type === "negative")!.id}`;

          const pIndex = path.indexOf(p);
          const nIndex = path.indexOf(n_neg);

          // Se a corrente passou do terminal negativo para o positivo, o LED está invertido
          if (pIndex !== -1 && nIndex !== -1) {
            if (nIndex < pIndex) {
              invertedFoundInPath = true;
            }
          }
        }
      }

      if (invertedFoundInPath) {
        hasInvertedLED = true;
        // Ignora esse caminho pois a corrente está bloqueada pela polaridade e continua a busca.
        continue;
      } else {
        validPath = path;
        break;
      }
    }

    const neighbors = adj.get(curr) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...path, neighbor]);
      }
    }
  }

  const switches = nodes.filter((n) => n.type === "switch");
  if (switches.length > 0 && !validPath) {
    if (switches.some((s) => !s.state.isOn)) {
      result.warnings.push("A chave está desligada. O circuito precisa estar fechado para conduzir.");
    }
  }

  if (hasInvertedLED && !validPath) {
    result.warnings.push("O LED está conectado com a polaridade invertida e bloqueia a corrente.");
    return result;
  }

  if (!validPath) {
    if (result.warnings.length === 0) {
      result.warnings.push("A corrente não possui um caminho fechado.");
    }
    return result;
  }

  result.isClosed = true;
  result.isValid = true;
  result.poweredComponents = Array.from(new Set(validPath.map((p) => p.split(":")[0]!)));

  return result;
}
