import { GraphType } from "../../ds/types/constantType";
import { VertexCanvas } from "../vertexCanvas";

export interface GraphCanvasInterface {
    vertices: VertexCanvas[],
    display: boolean,
    graphElement: HTMLDivElement,
    pushVertex: (vertexId: string, x: number, y: number, value: any) => void,
    pushEdge: (vertexFromId: string, vertexToId: string, type: GraphType, weight ?: number) => void,
    getGraphElement: () => HTMLDivElement,
}