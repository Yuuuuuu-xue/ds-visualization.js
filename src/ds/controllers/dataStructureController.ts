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

  private drawGraph(): void {
    this.drawingManager.drawGraph(
      this.slideManager.getCurrentGraph(),
      this.targetElement
    );
  }

  moveNextGraph(): boolean {
    const result = this.slideManager.moveNextGraph();
    if (result) {
      this.drawGraph();
    }
    return result;
  };

  movePrevGraph(): boolean {
    const result = this.slideManager.movePrevGraph();
    if (result) {
      this.drawGraph();
    }
    return result;
  };

  displayCurrentGraph(): void {
    this.drawGraph();
  }
}
