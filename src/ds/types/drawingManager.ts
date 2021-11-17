import { Graph } from "../graph/graph";

export interface DrawingManagerInterface {
  drawGraph: (graph: Graph, element: HTMLDivElement) => void,
}
