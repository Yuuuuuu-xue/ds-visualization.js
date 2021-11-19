import { canvasStyle } from "../styles/canvas.style";
import { GraphCanvas } from "../../canvas/graphCanvas";
import { ButtonInterface } from "../../canvas/types/buttonInterface";
import { Button } from "../../canvas/buttons/button";


export class DrawingManager {
  private width: number;
  private height: number;
  private graphCanvas: GraphCanvas[];
  private currIdx: number;
  private canvasElement: HTMLDivElement;
  private canvasTitleElement: HTMLParagraphElement;
  private canvasCurrPageElement: HTMLParagraphElement;
  private canvasNextButtonElement: ButtonInterface
  private canvasPrevButtonElement: ButtonInterface;
  private updateDialog: (vertexId: string) => void;

  constructor(width: number, height: number, updateDialog: (vertexId: string) => void) {
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

    const canvasBackgroundTitle = document.createElement('p');
    canvasBackgroundTitle.innerText = 'DS.js Canvas';
    canvasBackgroundTitle.classList.add('ds-canvas-background-title');

    // canvas title
    this.canvasTitleElement = document.createElement('p');
    this.canvasTitleElement.classList.add('ds-canvas-title');
    this.canvasTitleElement.innerText = '';

    // canvas page
    this.canvasCurrPageElement = document.createElement('p');
    this.canvasCurrPageElement.classList.add('ds-canvas-curr-page');
    this.canvasCurrPageElement.innerText = '1';

    // Next page button
    this.canvasNextButtonElement = new Button('next', '>');
    
    // Prev page button
    this.canvasPrevButtonElement = new Button('prev', '<');

    // Add to the canvas element
    this.canvasElement.insertAdjacentElement('beforeend', canvasBackgroundTitle);
    this.canvasElement.insertAdjacentElement('beforeend', this.canvasTitleElement);
    this.canvasElement.insertAdjacentElement('beforeend', this.canvasCurrPageElement);
    this.canvasElement.insertAdjacentElement('beforeend', this.canvasNextButtonElement.getButtonElement());
    this.canvasElement.insertAdjacentElement('beforeend', this.canvasPrevButtonElement.getButtonElement());

    this.graphCanvas = [];
    this.createGraphCanvas();
    this.graphCanvas[0].displayGraph();
  
    this.updateDialog = updateDialog;
    


  };

  setCanvasTitle(title: string): void {
    this.canvasTitleElement.innerText = title;
  }
  
  getCanvasElement(): HTMLDivElement {
    return this.canvasElement;
  }

  private raiseError(message: string): void {
    throw new Error(message);
  };

  createGraphCanvas(): void {
    const newGraphCanvas = new GraphCanvas((vertexId: string) => this.updateDialog(vertexId));
    this.graphCanvas.push(newGraphCanvas);
    this.canvasElement.insertAdjacentElement('beforeend', newGraphCanvas.graphElement);
  }

  setWidth(width: number): void {
    if (width <= 0) {
      this.raiseError("Width must be positive number");
    }
    this.width = width;
    this.canvasElement.setAttribute('style', canvasStyle(this.width, this.height));
  };

  setHeight(height: number): void {
    if (height <= 0) {
      this.raiseError("Height must be positive number");
    }
    this.height = height;
    this.canvasElement.setAttribute('style', canvasStyle(this.width, this.height));
  };
  
  getNextButtonElement(): ButtonInterface {
    return this.canvasNextButtonElement;
  }

  getPrevButtonElement(): ButtonInterface {
    return this.canvasPrevButtonElement;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }
  
  displayGraph(newIdx: number): void {
    this.graphCanvas[this.currIdx].hideGraph(); 
    this.currIdx = newIdx;
    this.canvasCurrPageElement.innerText = `${this.currIdx + 1}`;
    console.log(this.graphCanvas[this.currIdx], this.currIdx)
    this.graphCanvas[this.currIdx].displayGraph();
  }

  pushVertex(vertexId: string, x: number, y: number, value: any): void {
    this.graphCanvas[this.currIdx].pushVertex(vertexId, x, y, value);
  }

  pushEdge(vertexToId: string, vertexFromId: string, weight ?: number): void {
    this.graphCanvas[this.currIdx].pushEdge(vertexToId, vertexFromId, weight);
  }
}