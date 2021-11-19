import { GraphInfo } from "./graph";

export interface DataStructureControllerInterface {
  createGraph: (type: string, name: string) => void,
  getCurrentGraphInfo: () => GraphInfo,
  moveNextGraph: () => void,
  movePrevGraph: () => void,
  pushVertex: (_id: string, value: any, x: number, y: number) => void;
  pushEdge: (vertexTo: string, vertexFrom: string, weight ?: number) => void;
}
