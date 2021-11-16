namespace ds {
  export class DrawingManager implements DrawingManagerInterface {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
      if (width <= 0) {
        this.raiseError("Width must be positive number");
      }
      if (height <= 0) {
        this.raiseError("Height must be positive number");
      }
      this.width = width;
      this.height = height;
    };
    
    private raiseError(message: string): void {
      throw new Error(message);
    };

    setWidth(width: number): void {
      if (width <= 0) {
        this.raiseError("Width must be positive number");
      }
      this.width = width;
    };

    setHeight(height: number): void {
      if (height <= 0) {
        this.raiseError("Height must be positive number");
      }
      this.height = height;
    };

    getWidth(): number {
      return this.width;
    }

    getHeight(): number {
      return this.height;
    }
    
    drawGraph(graph: Graph, target: HTMLDivElement): void {
      const graphDiv = document.createElement('div');
      graphDiv.setAttribute('style', canvasStyle(this.width, this.height));
      graphDiv.classList.add("ds-canvas");
      graphDiv.innerHTML = `<p style="${defaultStyle()}">Hello World</p>`;
      target.appendChild(graphDiv);
    }
  }
}