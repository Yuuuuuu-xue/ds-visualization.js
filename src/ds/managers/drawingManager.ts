import { canvasStyle } from "../styles/canvas.style";
import { GraphCanvas } from "../../canvas/graphCanvas";
import { ButtonInterface } from "../../canvas/types/buttonInterface";
import { Button } from "../../canvas/buttons/button";
import { GraphType } from "../types/constantType";
import { VertexConfig } from "../types/vertexConfig";
import { GraphConfig } from "../types/graphConfig";
import { EdgeDetailInterface } from "../types/edgeDetailInterface";
import { VertexCanvas } from "../../canvas/vertexCanvas";
import { EdgeCanvas } from "../../canvas/edgeCanvas";


export class DrawingManager {
  private width: number;
  private height: number;
  private graphCanvas: GraphCanvas[];
  private currIdx: number;
  private canvasElement: HTMLDivElement;
  private canvasTitleElement: HTMLParagraphElement;
  private canvasCurrPageElement: HTMLParagraphElement;
  private canvasNextButtonElement: ButtonInterface;
  private canvasPrevButtonElement: ButtonInterface;
  private clearPathButtonElement: ButtonInterface;
  private removeLastVertexButtonElement: ButtonInterface;
  private updateDialog: (vertexId: string) => void;
  private clearVertexDialog: () => void;
  private setEdgeDialog: (edgeDetail: EdgeDetailInterface[], enableWeight?: boolean) => void;
  private clearEdgeDialog: () => void;

  constructor(width: number, height: number, updateDialog: (vertexId: string) => void, clearVertexDialog: () => void, setEdgeDialog: (edgeDetail: EdgeDetailInterface[], enableWeight?: boolean) => void, clearEdgeDialog: () => void) {
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

    // Clear the path for (traversable) graph
    this.clearPathButtonElement = new Button('clear-path', 'Clear Path');
    // Since initial graph is not traversable, thus we will hide the button
    this.clearPathButtonElement.hideButtonElement();
    // Always enable
    this.clearPathButtonElement.enableButtonElement();

    // Remove edge
    this.removeLastVertexButtonElement = new Button('remove-last-vertex', 'Remove Last Edge');
    this.removeLastVertexButtonElement.hideButtonElement();
    this.removeLastVertexButtonElement.disableButtonElement();

    // Add to the canvas element
    this.canvasElement.insertAdjacentElement('beforeend', canvasBackgroundTitle);
    this.canvasElement.insertAdjacentElement('beforeend', this.canvasTitleElement);
    this.canvasElement.insertAdjacentElement('beforeend', this.canvasCurrPageElement);
    this.canvasElement.insertAdjacentElement('beforeend', this.canvasNextButtonElement.getButtonElement());
    this.canvasElement.insertAdjacentElement('beforeend', this.canvasPrevButtonElement.getButtonElement());
    this.canvasElement.insertAdjacentElement('beforeend', this.clearPathButtonElement.getButtonElement());
    this.canvasElement.insertAdjacentElement('beforeend', this.removeLastVertexButtonElement.getButtonElement());

    this.graphCanvas = [];
    this.createDefaultGraph();
    this.updateDialog = updateDialog;
    this.clearVertexDialog = clearVertexDialog;
    this.setEdgeDialog = setEdgeDialog;
    this.clearEdgeDialog = clearEdgeDialog;
  };

  getCurrentGraph(): GraphCanvas {
    return this.graphCanvas[this.currIdx];
  }

  createDefaultGraph(): void {
    this.createGraphCanvas({mode: 'clickable'});
    this.graphCanvas[0].displayGraph();
  }

  setCanvasTitle(title: string): void {
    this.canvasTitleElement.innerText = title;
  }
  
  getCanvasElement(): HTMLDivElement {
    return this.canvasElement;
  }

  private raiseError(message: string): void {
    throw new Error(message);
  };

  createGraphCanvas(config: GraphConfig): void {
    const newGraphCanvas = new GraphCanvas((vertexId: string) => this.updateDialog(vertexId), () => this.clearVertexDialog(), config, (edgeDetail: EdgeDetailInterface[], enableWeight?: boolean) => this.setEdgeDialog(edgeDetail, enableWeight), () => this.clearEdgeDialog(), () => this.removeLastVertexButtonElement.enableButtonElement());
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

  getClearPathButton(): ButtonInterface {
    return this.clearPathButtonElement;
  }

  getRemoveLastEdgeButton(): ButtonInterface {
    return this.removeLastVertexButtonElement;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }
  
  private updateTraversableButtons(): void {
    if (this.graphCanvas[this.currIdx].getMode() === 'traversable') {
      this.clearPathButtonElement.displayButtonElement();
      this.removeLastVertexButtonElement.displayButtonElement();
    } else {
      this.clearPathButtonElement.hideButtonElement();
      this.removeLastVertexButtonElement.hideButtonElement();
    }
  }

  removeLastTraversedVertexFromCurrentGraph(): void {
    this.graphCanvas[this.currIdx].removeLastVertex();

    if (this.graphCanvas[this.currIdx].getNumTraversedVertices() === 0) {
      // Diable
      this.removeLastVertexButtonElement.disableButtonElement();
    }
  }

  setCurrentGraphClearPath(): void {
    this.graphCanvas[this.currIdx].clearPath();
    // disable the button
    this.removeLastVertexButtonElement.disableButtonElement();
  }

  displayGraph(newIdx: number): void {
    this.setCurrentGraphClearPath();
    this.graphCanvas[this.currIdx].hideGraph(); 
    this.currIdx = newIdx;
    this.canvasCurrPageElement.innerText = `${this.currIdx + 1}`;
    // console.log(this.graphCanvas[this.currIdx], this.currIdx)
    this.graphCanvas[this.currIdx].displayGraph();
    this.updateTraversableButtons();
  }

  pushVertexToCurrrentGraph(vertexId: string, x: number, y: number, value: any, config: VertexConfig): void {
    this.graphCanvas[this.currIdx].pushVertex(vertexId, x, y, value, config);
  }

  pushEdgeToCurrentGraph(vertexToId: string, vertexFromId: string, type: GraphType, weight ?: number): void {
    this.graphCanvas[this.currIdx].pushEdge(vertexToId, vertexFromId, type, weight);
  }

  private checkValidLength(i: number) {
    if (this.graphCanvas.length <= i) {
      throw new Error("Index of out boundary");
    }
  }

  pushVertexToGraph(i: number, vertexId: string, x: number, y: number, value: any, config: VertexConfig): void {
    this.checkValidLength(i);
    this.graphCanvas[i].pushVertex(vertexId, x, y, value, config);
  }

  pushEdgeToGraph(i: number, vertexToId: string, vertexFromId: string, type: GraphType, weight ?: number): void {
    this.checkValidLength(i);
    this.graphCanvas[i].pushEdge(vertexToId, vertexFromId, type, weight);
  }

  setCurrentGraphInactive(): void {
    this.graphCanvas[this.currIdx].setInactiveAll();
  }

  removeVertexFromCurrentGraph(_id: string): void {
    this.graphCanvas[this.currIdx].removeVertex(_id);
  }

  removeVertexFromGraph(i: number, _id: string): void {
    this.checkValidLength(i);
    this.graphCanvas[i].removeVertex(_id);
  }

  removeEdgeFromCurrentGraph(vertexTo: string, vertexFrom: string) {
    this.graphCanvas[this.currIdx].removeEdge(vertexTo, vertexFrom);
  }

  removeEdgeFromGraph(i: number, vertexTo: string, vertexFrom: string) {
    this.checkValidLength(i);
    this.graphCanvas[i].removeEdge(vertexTo, vertexFrom);
  }

  removeCurrentGraph(): void {
    this.removeGraph(this.currIdx);
  }

  removeGraph(i: number): void {
    this.checkValidLength(i);
    this.graphCanvas[i].removeGraph();
    this.graphCanvas.splice(i, 1);
    if (this.graphCanvas.length === 0) {
      this.createDefaultGraph();
    }
    if (this.currIdx >= this.graphCanvas.length) {
      this.currIdx -= 1
    }
  }

  updateCurrentGraphVertexValue(vertexId: string, value: any): void {
    this.graphCanvas[this.currIdx].updateVertexValue(vertexId, value);
  }

  updateGraphVertexValue(i: number, vertexId: string, value: any): void {
    this.checkValidLength(i);
    this.graphCanvas[i].updateVertexValue(vertexId, value);
  }

  updateCurrentGraphVertexPosition(vertexId: string, x: number, y: number): void {
    this.graphCanvas[this.currIdx].updateVertexPosition(vertexId, x, y);
  }

  updateGraphVertexPosition(i: number, vertexId: string, x: number, y: number): void {
    this.checkValidLength(i);
    this.graphCanvas[i].updateVertexPosition(vertexId, x, y);
  }

  updateCurrentGraphType(type: GraphType) {
    this.graphCanvas[this.currIdx].updateGraphType(type);
  }

  updateGraphType(i: number, type: GraphType) {
    this.checkValidLength(i);
    this.graphCanvas[i].updateGraphType(type);
  }

  updateCurrentGraphVertexConfig(vertexId: string, config: VertexConfig): void {
    this.graphCanvas[this.currIdx].updateVertexConfig(vertexId, config);
  }

  updateGraphVertexConfig(i: number, vertexId: string, config: VertexConfig): void {
    this.checkValidLength(i);
    this.graphCanvas[i].updateVertexConfig(vertexId, config);
  }

  updateCurrentGraphConfig(config: GraphConfig): void {
    this.graphCanvas[this.currIdx].updateConfig(config);
    this.updateTraversableButtons();
  }

  updateGraphConfig(i: number, config: GraphConfig): void {
    this.checkValidLength(i);
    this.graphCanvas[i].updateConfig(config);
    if (i === this.currIdx) {
      this.updateTraversableButtons();
    }
  }

  getCurrentGraphVertices(): VertexCanvas[] {
    return this.graphCanvas[this.currIdx].getVertices();
  }

  getGraphVertices(i: number): VertexCanvas[] {
    this.checkValidLength(i);
    return this.graphCanvas[i].getVertices();
  }
  
  getCurrentGraphEdges(): EdgeCanvas[] {
    return this.graphCanvas[this.currIdx].getEdges();
  }

  getGraphEdges(i: number): EdgeCanvas[] {
    this.checkValidLength(i);
    return this.graphCanvas[i].getEdges();
  }
}