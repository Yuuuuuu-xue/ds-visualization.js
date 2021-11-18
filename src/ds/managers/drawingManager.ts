import { canvasStyle } from "../styles/canvas.style";
import { GraphCanvas } from "../../canvas/graphCanvas";


export class DrawingManager {
  private width: number;
  private height: number;
  private graphCanvas: GraphCanvas[];
  private currIdx: number;
  private canvasElement: HTMLDivElement;

  constructor(width: number, height: number) {
    if (width <= 0) {
      this.raiseError("Width must be positive number");
    }
    if (height <= 0) {
      this.raiseError("Height must be positive number");
    }

    this.currIdx = 0;
    this.width = width;
    this.height = height;
    
    this.canvasElement = document.createElement('div');
    this.canvasElement.classList.add('ds-canvas');
    this.canvasElement.setAttribute('style', canvasStyle(this.width, this.height));
    this.canvasElement.innerHTML += `<p>My Canvas</p>`;

    this.graphCanvas = [];
    this.createGraphCanvas();
    this.graphCanvas[0].displayGraph();
  };
  
  getCanvasElement(): HTMLDivElement {
    return this.canvasElement;
  }

  private raiseError(message: string): void {
    throw new Error(message);
  };

  createGraphCanvas(): void {
    const newGraphCanvas = new GraphCanvas();
    this.graphCanvas.push(newGraphCanvas);
    this.canvasElement.insertAdjacentElement('beforeend', newGraphCanvas.graphElement);
  }

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
  
  displayGraph(newIdx: number): void {
    this.graphCanvas[this.currIdx].hideGraph(); 
    this.currIdx = newIdx;
    this.graphCanvas[this.currIdx].displayGraph();
  }

  pushVertex(vertexId: string, x: number, y: number, value: any) {
    this.graphCanvas[this.currIdx].pushVertex(vertexId, x, y, value);
  }
}