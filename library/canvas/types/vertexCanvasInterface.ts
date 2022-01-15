import { Clickable } from "./clickable";

export interface VertexCanvasInterface extends Clickable {
  vertexId: string,
  x: number, 
  y: number,
  vertexElement: HTMLButtonElement,
  getVertexElement: () => HTMLButtonElement
}