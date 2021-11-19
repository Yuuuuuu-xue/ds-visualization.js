import { DrawingManager } from "../managers/drawingManager";
import { GraphManager } from "../managers/graphManager";
import { DataStructureControllerInterface } from "../types/dataStructureController";
import { GraphInfo } from "../types/graph";

export class DataStructureController implements DataStructureControllerInterface {
  private graphManager: GraphManager;
  private drawingManager: DrawingManager;
  private targetElement: HTMLDivElement;

  constructor(width: number, height: number, targetElement: HTMLDivElement) {
    this.drawingManager = new DrawingManager(width, height);
    this.graphManager = new GraphManager();
    this.drawingManager.setCanvasTitle(this.graphManager.getCurrentGraphName());
    this.targetElement = targetElement;
    this.targetElement.insertAdjacentElement('beforeend', this.drawingManager.getCanvasElement());
  }

  setWidth(width: number) {
    this.drawingManager.setWidth(width);
  }

  setHeight(height: number) {
    this.drawingManager.setHeight(height);
  }

  createGraph(type: string, name: string): void {
    this.graphManager.createGraph(type, name);
  }

  getCurrentGraphInfo(): GraphInfo {
    return this.graphManager.getCurrentGraphInfo();
  }

  setTargetElement(targetElement: HTMLDivElement): void {
    this.targetElement = targetElement;
  }

  setCurrentGraphTitle(title: string): void {
    this.graphManager.setCurrentGraphName(title);
    this.drawingManager.setCanvasTitle(title);
  }


  moveNextGraph(): boolean {
    const result = this.graphManager.moveNextGraph();
    if (result) {
      this.drawingManager.displayGraph(this.graphManager.getCurrentIdx());
      // Set the title
      this.drawingManager.setCanvasTitle(this.graphManager.getCurrentGraphName());
    }
    return result;
  };

  movePrevGraph(): boolean {
    const result = this.graphManager.movePrevGraph();
    if (result) {
      this.drawingManager.displayGraph(this.graphManager.getCurrentIdx());
      this.drawingManager.setCanvasTitle(this.graphManager.getCurrentGraphName());
    }
    return result;
  };

  pushVertex(_id: string, value: any, x: number, y: number): void {
    this.graphManager.pushVertex(_id, value);
    this.drawingManager.pushVertex(_id, x, y, value);
  }

  pushEdge(vertexTo: string, vertexFrom: string, weight ?: number): void {
    this.graphManager.pushEdge(vertexTo, vertexFrom, weight);
    this.drawingManager.pushEdge(vertexTo, vertexFrom, weight);
  }
}
