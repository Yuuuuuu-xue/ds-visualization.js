import { Graph } from "../entity/graph/graph";
import { GraphInfo } from "./graph";


export interface GraphManagerInterface {
  createGraph: (type: string, name: string) => void,
  getCurrentGraph: () => Graph,
  getCurrentGraphInfo: () => GraphInfo,
  moveNextGraph: () => void,
  movePrevGraph: () => void,
  pushVertex: (_id: string, value: any) => void,
  pushEdge: (vertexTo: string, vertexFrom: string, weight ?: number) => void;
}
