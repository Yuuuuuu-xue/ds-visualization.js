import { DialogManager } from "../managers/dialogManager";
import { DrawingManager } from "../managers/drawingManager";
import { GraphManager } from "../managers/graphManager";
import { DataStructureControllerInterface } from "../types/dataStructureController";
import { GraphInfo } from "../types/graph";

export class DataStructureController implements DataStructureControllerInterface {
  private graphManager: GraphManager;
  private drawingManager: DrawingManager;
  private targetElement: HTMLDivElement;
  private dialogManager: DialogManager;

  constructor(width: number, height: number, targetElement: HTMLDivElement) {   
    
    this.targetElement = targetElement;

    this.graphManager = new GraphManager();        
    this.dialogManager = new DialogManager(width, height);
    this.dialogManager.setGraphDetail(this.graphManager.getCurrentGraphInfo());

    const updateDialogBind = this.updateDialog.bind(this);
    const clearVertexDialogBind = this.clearVertexDialog.bind(this);

    this.drawingManager = new DrawingManager(width, height, updateDialogBind, clearVertexDialogBind);
    this.drawingManager.setCanvasTitle(this.graphManager.getCurrentGraphName());

    this.targetElement.insertAdjacentElement('beforeend', this.drawingManager.getCanvasElement());
    this.drawingManager.getNextButtonElement().disableButtonElement();
    this.drawingManager.getPrevButtonElement().disableButtonElement();
    this.drawingManager.getNextButtonElement().getButtonElement().addEventListener('click', () => this.handleNextButtonClick());
    this.drawingManager.getPrevButtonElement().getButtonElement().addEventListener('click', () => this.handlePrevButtonClick());

    this.targetElement.insertAdjacentElement('beforeend', this.dialogManager.getDialogElement());

  }

  updateDialog(vertexId: string): void {
    this.dialogManager.setVertexDetail(this.graphManager.getVertexDetail(vertexId));
  }

  clearVertexDialog(): void {
    this.dialogManager.clearVertexDetail();
  }

  setCanvasWidth(width: number) {
    this.drawingManager.setWidth(width);
  }

  setCanvasHeight(height: number) {
    this.drawingManager.setHeight(height);
  }

  setDialogWidth(width: number) {
    this.dialogManager.setWidth(width);
  }

  setDialogHeight(height: number) {
    this.dialogManager.setHeight(height);
  }

  createGraph(type: string, name: string): void {
    if (this.graphManager.getCurrentIdx() === 0) {
      this.drawingManager.getNextButtonElement().enableButtonElement();
    }
    this.graphManager.createGraph(type, name);
    this.drawingManager.createGraphCanvas();
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

  handleNextButtonClick(): void {
    if (this.graphManager.getCurrentIdx() < this.graphManager.getGraphSize() - 1) {
      // Then we can click to the next one
      this.moveNextGraph();
    }
  }

  handlePrevButtonClick(): void {
    if (this.graphManager.getCurrentIdx() > 0) {
      this.movePrevGraph();
    }
  }

  moveNextGraph(): void {
    this.graphManager.moveNextGraph();

    // Inactive
    this.drawingManager.setCurrentGraphInactive();

    this.drawingManager.displayGraph(this.graphManager.getCurrentIdx());
    // Set the title
    this.drawingManager.setCanvasTitle(this.graphManager.getCurrentGraphName());

    // Now if we react to the last one, we should disable to the next button
    if(this.graphManager.getCurrentIdx() === this.graphManager.getGraphSize() - 1) {
      this.drawingManager.getNextButtonElement().disableButtonElement();
    }
    this.drawingManager.getPrevButtonElement().enableButtonElement();

    // Update dialog
    this.dialogManager.setGraphDetail(this.graphManager.getCurrentGraphInfo());
  };

  movePrevGraph(): void {
    this.graphManager.movePrevGraph();

    // Inactive
    this.drawingManager.setCurrentGraphInactive();

    this.drawingManager.displayGraph(this.graphManager.getCurrentIdx());
    this.drawingManager.setCanvasTitle(this.graphManager.getCurrentGraphName());

    // If we reach to the first one, we should disable the prev button
    if (this.graphManager.getCurrentIdx() === 0) {
      this.drawingManager.getPrevButtonElement().disableButtonElement();
    }
    this.drawingManager.getNextButtonElement().enableButtonElement();
    
    // Update dialog
    this.dialogManager.setGraphDetail(this.graphManager.getCurrentGraphInfo());
  };

  pushVertexToCurrentGraph(_id: string, value: any, x: number, y: number): void {
    this.graphManager.pushVertexToCurrentGraph(_id, value);
    this.drawingManager.pushVertexToCurrrentGraph(_id, x, y, value);
  }

  pushEdgeToCurrentGraph(vertexTo: string, vertexFrom: string, weight ?: number): void {
    this.graphManager.pushEdgeToCurrentGraph(vertexTo, vertexFrom, weight);
    this.drawingManager.pushEdgeToCurrentGraph(vertexTo, vertexFrom, this.graphManager.getCurrentGraphType(), weight);
  }

  pushVertexToGraph(i: number, _id: string, value: any, x: number, y: number): void {
    this.graphManager.pushVertexToGraph(i, _id, value);
    this.drawingManager.pushVertexToGraph(i, _id, x, y, value);
  }

  pushEdgeToGraph(i: number, vertexTo: string, vertexFrom: string, weight ?: number): void {
    this.graphManager.pushEdgeToGraph(i, vertexTo, vertexFrom, weight);
    this.drawingManager.pushEdgeToGraph(i, vertexTo, vertexFrom, this.graphManager.getGraphType(i), weight);
  }

  showDialog(): void {
    this.dialogManager.enableDialog();
    this.dialogManager.setGraphDetail(this.graphManager.getCurrentGraphInfo());
  }

  hideDialog(): void {
    this.dialogManager.disableDialog();
  }

  removeVertexFromCurrentGraph(_id: string): void {
    this.graphManager.removeVertexFromCurrentGraph(_id);
    this.drawingManager.removeVertexFromCurrentGraph(_id);
  }

  removeVertexFromGraph(i: number, _id: string): void {
    this.graphManager.removeVertexFromGraph(i, _id);
    this.drawingManager.removeVertexFromGraph(i, _id);
  }

  removeEdgeFromCurrentGraph(vertexTo: string, vertexFrom: string): void {
    this.graphManager.removeEdgeFromCurrentGraph(vertexTo, vertexFrom);
    this.drawingManager.removeEdgeFromCurrentGraph(vertexTo, vertexFrom);
  }

  removeEdgeFromGraph(i: number, vertexTo: string, vertexFrom: string): void {
    this.graphManager.removeEdgeFromGraph(i, vertexTo, vertexFrom);
    this.drawingManager.removeEdgeFromGraph(i, vertexTo, vertexFrom);
  }

  removeCurrentGraph(): void {
    this.graphManager.removeCurrentGraph();
    this.drawingManager.removeCurrentGraph();
  }

  removeGraph(i: number): void {
    this.graphManager.removeGraph(i);
    this.drawingManager.removeGraph(i);
  }

}
