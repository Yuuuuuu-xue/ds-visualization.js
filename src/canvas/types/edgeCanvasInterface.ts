import { Clickable } from "./clickable";

export interface EdgeCanvasInterface extends Clickable {
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    vertexFromId: string, 
    vertexToId: string,
    edgeElement: HTMLDivElement,
    getEdgeElement: () => HTMLDivElement
}