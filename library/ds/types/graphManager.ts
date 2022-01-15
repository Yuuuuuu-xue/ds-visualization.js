import { Graph } from "../entity/graph/graph";
import { GraphInfo } from "./graph";


export interface GraphManagerInterface {
  createGraph: (type: string, name: string) => void,
  getCurrentGraph: () => Graph,
  getCurrentGraphInfo: () => GraphInfo,
  moveNextGraph: () => void,
  movePrevGraph: () => void,
  pushVertexToCurrentGraph: (_id: string, value: any) => void,
  pushEdgeToCurrentGraph: (vertexTo: string, vertexFrom: string, weight ?: number) => void, 
  pushVertexToGraph: (i: number, _id: string, value: any) => void,
  pushEdgeToGraph: (i: number, vertexTo: string, vertexFrom: string, weight ?: number) => void
}
