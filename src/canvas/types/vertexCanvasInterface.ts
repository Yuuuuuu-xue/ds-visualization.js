export interface VertexCanvasInterface {
  vertexId: string,
  x: number, 
  y: number,
  defaultStyle: string,
  isActive: boolean,
  vertexElement: HTMLDivElement,
  handleClick: () => void
}