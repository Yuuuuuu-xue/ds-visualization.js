export interface VertexCanvasInterface {
  vertexId: string,
  x: number, 
  y: number,
  isActive: boolean,
  vertexElement: HTMLButtonElement,
  handleClick: () => void,
  getVertexElement: () => HTMLButtonElement
}