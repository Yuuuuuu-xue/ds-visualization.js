import { GraphInfo } from "./graph";

export interface DataStructureControllerInterface {
  createGraph: (type: string, name: string) => void,
  getCurrentGraphInfo: () => GraphInfo,
  moveNextGraph: () => void,
  movePrevGraph: () => void,
  pushVertexToCurrentGraph: (_id: string, value: any, x: number, y: number) => void;
  pushEdgeToCurrentGraph: (vertexTo: string, vertexFrom: string, weight ?: number) => void;
  pushVertexToGraph: (i: number, _id: string, value: any, x: number, y: number) => void;
  pushEdgeToGraph: (i: number, vertexTo: string, vertexFrom: string, weight ?: number) => void;
}
