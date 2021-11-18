import { VertexCanvas } from "../vertexCanvas";

export interface GraphCanvasInterface {
    vertices: VertexCanvas[],
    display: boolean,
    graphElement: HTMLDivElement,
    pushVertex: (vertexId: string, x: number, y: number, value: any) => void;
    getGraphElement: () => HTMLDivElement,
}