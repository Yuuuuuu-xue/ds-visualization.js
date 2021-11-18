import { GraphInfo } from "./graph";
import { Vertex } from "./vertex";

export interface DataStructureControllerInterface {
  createGraph: (type: string, name: string) => void,
  getCurrentGraphInfo: () => GraphInfo,
  moveNextGraph: () => boolean,
  movePrevGraph: () => boolean,
  pushVertex: (_id: string, value: any, x: number, y: number) => void;
  pushEdge: (vertexTo: string, vertexFrom: string, weight ?: number) => void;
}
