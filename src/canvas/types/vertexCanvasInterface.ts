namespace canvas {
  export interface VertexCanvasInterface {
    vertexId: string,
    x: number, 
    y: number,
    defaultStyle: string,
    isActive: boolean,
    // click on a vertex, return its string
    handleClick: () => string,
    draw: (canvasElement: HTMLDivElement) => void
  }
}
