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
    this.targetElement = targetElement;
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

  private drawGraph(): void {
    this.drawingManager.drawGraph(
      this.graphManager.getCurrentGraph(),
      this.targetElement
    );
  }

  moveNextGraph(): boolean {
    const result = this.graphManager.moveNextGraph();
    if (result) {
      this.drawGraph();
    }
    return result;
  };

  movePrevGraph(): boolean {
    const result = this.graphManager.movePrevGraph();
    if (result) {
      this.drawGraph();
    }
    return result;
  };

  displayCurrentGraph(): void {
    this.drawGraph();
  }
}
