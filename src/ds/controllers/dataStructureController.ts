import { DialogManager } from "../managers/dialogManager";
import { DrawingManager } from "../managers/drawingManager";
import { GraphManager } from "../managers/graphManager";
import { DataStructureControllerInterface } from "../types/dataStructureController";
import { EdgeDetailInterface } from "../types/edgeDetailInterface";
import EdgeInput from "../types/edgeInput";
import { GraphInfo } from "../types/graph";
import { GraphConfig } from "../types/graphConfig";
import { VertexConfig } from "../types/vertexConfig";
import VertexInput from "../types/vertexInput";

export class DataStructureController implements DataStructureControllerInterface {
  private graphManager: GraphManager;
  private drawingManager: DrawingManager;
  // private targetElement: HTMLDivElement;
  private dialogManager: DialogManager;

  constructor(width: number, height: number) { // , targetElement: HTMLDivElement) {   
    
    // this.targetElement = targetElement;

    this.graphManager = new GraphManager();        
    this.dialogManager = new DialogManager(width, height);
    this.dialogManager.setGraphDetail(this.graphManager.getCurrentGraphInfo());

    const updateDialogBind = this.updateDialog.bind(this);
    const clearVertexDialogBind = this.clearVertexDialog.bind(this);
    const setEdgeDialogBind = this.setEdgeDialog.bind(this);
    const clearEdgeDialogBind = this.clearEdgeDialog.bind(this);

    this.drawingManager = new DrawingManager(width, height, updateDialogBind, clearVertexDialogBind, setEdgeDialogBind, clearEdgeDialogBind);
    this.drawingManager.setCanvasTitle(this.graphManager.getCurrentGraphName());

    // this.targetElement.insertAdjacentElement('beforeend', this.drawingManager.getCanvasElement());
    this.drawingManager.getNextButtonElement().disableButtonElement();
    this.drawingManager.getPrevButtonElement().disableButtonElement();
    this.drawingManager.getNextButtonElement().getButtonElement().addEventListener('click', () => this.handleNextButtonClick());
    this.drawingManager.getPrevButtonElement().getButtonElement().addEventListener('click', () => this.handlePrevButtonClick());
    this.drawingManager.getClearPathButton().getButtonElement().addEventListener('click', () => this.handleClearPathButtonClick());
    this.drawingManager.getRemoveLastEdgeButton().getButtonElement().addEventListener('click', () => this.handleRemoveLastVertexButtonClick());

    // this.targetElement.insertAdjacentElement('beforeend', this.dialogManager.getDialogElement());

  }

  updateDialog(vertexId: string): void {
    this.dialogManager.setVertexDetail(this.graphManager.getVertexDetail(vertexId));
  }

  clearVertexDialog(): void {
    this.dialogManager.clearVertexDetail();
  }

  setEdgeDialog(edgeDetail: EdgeDetailInterface[], enableWeight?: boolean): void {
    this.dialogManager.setEdgeDetail(edgeDetail, enableWeight);
  }

  clearEdgeDialog(): void {
    this.dialogManager.clearEdgeDetail();
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

  createGraph(type: string, name: string, vertices: VertexInput[] = [], edges: EdgeInput[] = [], config: GraphConfig={mode: 'clickable'}): void {
    if (this.graphManager.getCurrentIdx() === 0) {
      this.drawingManager.getNextButtonElement().enableButtonElement();
    }
    this.graphManager.createGraph(type, name);
    this.drawingManager.createGraphCanvas(config);
    const graphSize = this.graphManager.getGraphSize() - 1;
    this.pushVerticesToGraph(graphSize, vertices);
    this.pushEdgesToGraph(graphSize, edges);
  }

  getCurrentGraphInfo(): GraphInfo {
    return this.graphManager.getCurrentGraphInfo();
  }

  getNumberOfGraphs(): number {
    return this.graphManager.getGraphSize();
  }

  // setTargetElement(targetElement: HTMLDivElement): void {
  //   this.targetElement = targetElement;
  // }

  getCanvasElement(): HTMLDivElement {
    return this.drawingManager.getCanvasElement();
  }

  getDialogElement(): HTMLDivElement {
    return this.dialogManager.getDialogElement();
  }

  // setCurrentGraphTitle(title: string): void {
  //   this.graphManager.setCurrentGraphName(title);
  //   this.drawingManager.setCanvasTitle(title);
  // }

  private handleClearPathButtonClick(): void {
    this.drawingManager.setCurrentGraphClearPath();
  }

  private handleRemoveLastVertexButtonClick(): void {
    this.drawingManager.removeLastTraversedVertexFromCurrentGraph();
  }

  private handleNextButtonClick(): void {
    if (this.graphManager.getCurrentIdx() < this.graphManager.getGraphSize() - 1) {
      // Then we can click to the next one
      this.moveNextGraph();
    }
  }

  private handlePrevButtonClick(): void {
    if (this.graphManager.getCurrentIdx() > 0) {
      this.movePrevGraph();
    }
  }

  updateCurrentGraph(): void {
    this.drawingManager.displayGraph(this.graphManager.getCurrentIdx());
    this.drawingManager.setCanvasTitle(this.graphManager.getCurrentGraphName());
    // Now if we react to the last one, we should disable to the next button
    if(this.graphManager.getCurrentIdx() === this.graphManager.getGraphSize() - 1) {
      this.drawingManager.getNextButtonElement().disableButtonElement();
    }
    this.drawingManager.getPrevButtonElement().enableButtonElement();

    // Update dialog
    this.dialogManager.setGraphDetail(this.graphManager.getCurrentGraphInfo());

    // Now if we react to the last one, we should disable to the next button
    if(this.graphManager.getCurrentIdx() === this.graphManager.getGraphSize() - 1) {
      this.drawingManager.getNextButtonElement().disableButtonElement();
    }    
    // If we reach to the first one, we should disable the prev button
    if (this.graphManager.getCurrentIdx() === 0) {
      this.drawingManager.getPrevButtonElement().disableButtonElement();
    }
  }

  moveNextGraph(): void {
    const prevGraphElement = this.drawingManager.getCurrentGraph().getGraphElement();
    prevGraphElement.classList.add('graphAnimationForward')
    
    this.drawingManager.getCanvasElement().scrollLeft = 0;

    this.drawingManager.getPrevButtonElement().disableButtonElement();
    this.drawingManager.getNextButtonElement().disableButtonElement();
    setTimeout(() => {
      this.graphManager.moveNextGraph();
      // Inactive
      this.drawingManager.setCurrentGraphInactive();
  
      this.drawingManager.displayGraph(this.graphManager.getCurrentIdx());
      // Set the title
      this.drawingManager.setCanvasTitle(this.graphManager.getCurrentGraphName());
  
      // Now if we react to the last one, we should disable to the next button
      if(this.graphManager.getCurrentIdx() === this.graphManager.getGraphSize() - 1) {
        this.drawingManager.getNextButtonElement().disableButtonElement();
      } else {
        this.drawingManager.getNextButtonElement().enableButtonElement();
      }
      this.drawingManager.getPrevButtonElement().enableButtonElement();
  
      // Update dialog
      this.dialogManager.setGraphDetail(this.graphManager.getCurrentGraphInfo());    
      prevGraphElement.classList.remove('graphAnimationForward');
    }, 2000);
  };

  movePrevGraph(): void {    
    const prevGraphElement = this.drawingManager.getCurrentGraph().getGraphElement();
    prevGraphElement.classList.add('graphAnimationBackward');

    this.drawingManager.getCanvasElement().scrollLeft = 0;
    
    this.drawingManager.getPrevButtonElement().disableButtonElement();
    this.drawingManager.getNextButtonElement().disableButtonElement();
    setTimeout(() => {
      this.graphManager.movePrevGraph();

      // Inactive
      this.drawingManager.setCurrentGraphInactive();
  
      this.drawingManager.displayGraph(this.graphManager.getCurrentIdx());
      this.drawingManager.setCanvasTitle(this.graphManager.getCurrentGraphName());
  
      // If we reach to the first one, we should disable the prev button
      if (this.graphManager.getCurrentIdx() === 0) {
        this.drawingManager.getPrevButtonElement().disableButtonElement();
      } else {
        this.drawingManager.getPrevButtonElement().enableButtonElement();
      }
      this.drawingManager.getNextButtonElement().enableButtonElement();
      
      // Update dialog
      this.dialogManager.setGraphDetail(this.graphManager.getCurrentGraphInfo());
      prevGraphElement.classList.remove('graphAnimationBackward');
    }, 2000)
  };

  pushVertexToCurrentGraph(_id: string, value: any, x: number, y: number, config: VertexConfig = {}): void {
    this.graphManager.pushVertexToCurrentGraph(_id, value);
    this.drawingManager.pushVertexToCurrrentGraph(_id, x, y, value, config);
  }

  pushEdgeToCurrentGraph(vertexTo: string, vertexFrom: string, weight ?: number): void {
    this.graphManager.pushEdgeToCurrentGraph(vertexTo, vertexFrom, weight);
    this.drawingManager.pushEdgeToCurrentGraph(vertexTo, vertexFrom, this.graphManager.getCurrentGraphType(), weight);
  }

  pushVertexToGraph(i: number, _id: string, value: any, x: number, y: number, config: VertexConfig = {}): void {
    this.graphManager.pushVertexToGraph(i, _id, value);
    this.drawingManager.pushVertexToGraph(i, _id, x, y, value, config);
  }

  pushEdgeToGraph(i: number, vertexTo: string, vertexFrom: string, weight ?: number): void {
    this.graphManager.pushEdgeToGraph(i, vertexTo, vertexFrom, weight);
    this.drawingManager.pushEdgeToGraph(i, vertexTo, vertexFrom, this.graphManager.getGraphType(i), weight);
  }

  pushVerticesToCurrentGraph(vertices: VertexInput[]): void {
    vertices.forEach(v => this.pushVertexToCurrentGraph(v._id, v.value, v.x, v.y, v.config || {}));
  }

  pushVerticesToGraph(i: number, vertices: VertexInput[]): void {
    vertices.forEach(v => this.pushVertexToGraph(i, v._id, v.value, v.x, v.y, v.config || {}));
  }

  pushEdgesToCurrentGraph(edges: EdgeInput[]): void {
    edges.forEach(e => this.pushEdgeToCurrentGraph(e.vertexTo, e.vertexFrom, e.weight));
  }

  pushEdgesToGraph(i: number, edges: EdgeInput[]): void {
    edges.forEach(e => this.pushEdgeToGraph(i, e.vertexTo, e.vertexFrom, e.weight));
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
    this.updateCurrentGraph();
  }

  removeGraph(i: number): void {
    this.graphManager.removeGraph(i);
    this.drawingManager.removeGraph(i);
    this.updateCurrentGraph();
  }

  updateCurrentGraphVertexValue(_id: string, value: any): void {
    this.graphManager.updateCurrentGraphVertexValue(_id, value);
    this.drawingManager.updateCurrentGraphVertexValue(_id, value);
  }

  updateGraphVertexValue(i: number, _id: string, value: any): void {
    this.graphManager.updateGraphVertexValue(i, _id, value);
    this.drawingManager.updateGraphVertexValue(i, _id, value);
  }

  updateCurrentGraphVertexPosition(_id: string, x: number, y: number): void {
    this.graphManager.validateValidVertexId(this.graphManager.getCurrentIdx(), _id);
    this.drawingManager.updateCurrentGraphVertexPosition(_id, x, y);
  }

  updateGraphVertexPosition(i: number, _id: string, x: number, y: number): void {
    this.graphManager.validateValidVertexId(i, _id);
    this.drawingManager.updateGraphVertexPosition(i, _id, x, y);
  }

  updateCurrentGraphName(name: string): void {
    this.graphManager.updateCurrentGraphName(name);
    this.drawingManager.setCanvasTitle(name);
    this.dialogManager.updateName(name);
  }

  updateGraphName(i: number, name: string): void {
    this.graphManager.updateGraphName(i, name);
    this.drawingManager.setCanvasTitle(name);

    if (i === this.graphManager.getCurrentIdx()) {
      this.dialogManager.updateName(name);
    }
  }

  updateCurrentGraphType(type: string): void {
    if (type !== 'directed' && type !== 'undirected') {
      throw new Error("Graph type must be either 'directed' or 'undirected'");
    }
    this.graphManager.updateCurrentGraphType(type);
    this.drawingManager.updateCurrentGraphType(type);
    this.dialogManager.updateType(type);
  }

  updateGraphType(i: number, type: string): void {
    if (type !== 'directed' && type !== 'undirected') {
      throw new Error("Graph type must be either 'directed' or 'undirected'");
    }
    this.graphManager.updateGraphType(i, type);
    this.drawingManager.updateGraphType(i, type);
    if (i === this.graphManager.getCurrentIdx()) {
      this.dialogManager.updateType(type);
    }
  }

  updateCurrentGraphVertexConfig(_id: string, config: VertexConfig) {
    this.drawingManager.updateCurrentGraphVertexConfig(_id, config);
  }

  updateGraphVertexConfig(i: number, _id: string, config: VertexConfig) {
    this.drawingManager.updateGraphVertexConfig(i, _id, config);
  }

  updateCurrentGraphConfig(config: GraphConfig): void {
    this.drawingManager.updateCurrentGraphConfig(config);
  }

  updateGraphConfig(i: number, config: GraphConfig): void {
    this.drawingManager.updateGraphConfig(i, config);
  }
}
