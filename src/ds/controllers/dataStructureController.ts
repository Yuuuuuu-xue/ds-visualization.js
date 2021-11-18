import { DrawingManager } from "../managers/drawingManager";
import { SlideManager } from "../managers/slideManager";
import { DataStructureControllerInterface } from "../types/dataStructureController";
import { GraphInfo } from "../types/graph";


export class DataStructureController implements DataStructureControllerInterface {
  private slideManager: SlideManager;
  private drawingManager: DrawingManager;
  private targetElement: HTMLDivElement;

  constructor(width: number, height: number, targetElement: HTMLDivElement) {
    this.drawingManager = new DrawingManager(width, height);
    this.slideManager = new SlideManager();
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
    this.slideManager.createGraph(type, name);
  }

  getCurrentGraphInfo(): GraphInfo {
    return this.slideManager.getCurrentGraphInfo();
  }

  setTargetElement(targetElement: HTMLDivElement): void {
    this.targetElement = targetElement;
  }


  moveNextGraph(): boolean {
    const result = this.slideManager.moveNextGraph();
    if (result) {
      this.drawingManager.displayGraph(this.slideManager.getCurrentIdx());
    }
    return result;
  };

  movePrevGraph(): boolean {
    const result = this.slideManager.movePrevGraph();
    if (result) {
      this.drawingManager.displayGraph(this.slideManager.getCurrentIdx());
    }
    return result;
  };

  pushVertex(_id: string, value: any, x: number, y: number): void {
    this.slideManager.pushVertex(_id, value);
    this.drawingManager.pushVertex(_id, x, y, value);
  }

  pushEdge(vertexTo: string, vertexFrom: string, weight ?: number): void {
    this.slideManager.pushEdge(vertexTo, vertexFrom, weight);
    this.drawingManager.pushEdge(vertexTo, vertexFrom, weight);
  }
}
