import { GraphType } from "../../ds/types/constantType";
import { VertexConfig } from "../../ds/types/vertexConfig";
import { VertexCanvas } from "../vertexCanvas";

export interface GraphCanvasInterface {
    vertices: VertexCanvas[],
    display: boolean,
    graphElement: HTMLDivElement,
    pushVertex: (vertexId: string, x: number, y: number, value: any, config: VertexConfig) => void,
    pushEdge: (vertexFromId: string, vertexToId: string, type: GraphType, weight ?: number) => void,
    getGraphElement: () => HTMLDivElement,
}