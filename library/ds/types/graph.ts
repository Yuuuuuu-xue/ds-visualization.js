import { GraphType } from "./constantType";
import { Edge } from "./edge";
import { Vertex } from "./vertex";


export interface GraphInfo {
  name: string,
  type: GraphType
  numVertex: number,
  vertices: string[],
  numEdge: number,
  edges: Edge[]
}

export interface GraphInterface {
  vertices: Vertex[],
  edges: Edge[],
  type: string,
  name: string,
  pushVertex: (_id: string, value: any) => void;
  pushEdge: (vertexTo: string, vertexFrom: string, weight?: number) => void;
  getInfo: () => GraphInfo;
}
