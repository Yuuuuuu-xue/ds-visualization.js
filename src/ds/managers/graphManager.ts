import { GraphManagerInterface } from "../types/graphManager";
import { Graph } from "../graph/graph";
import { GraphInfo } from "../types/graph";

export class GraphManager implements GraphManagerInterface {
  private graphs: Graph[];
  private currIdx: number;

  constructor() {
    this.graphs = [];
    this.currIdx = 0;
    // default initial graph
    this.createGraph("default", "Initial Graph");
  }

  createGraph(type: string, name: string): void {
    const newGraph = new Graph(type, name);
    this.graphs.push(newGraph);
  };

  getCurrentGraph(): Graph {
    if (this.graphs.length < 0) {
      throw new Error("No graphs");
    } else {
      return this.graphs[this.currIdx];
    }  
  }

  getCurrentGraphInfo(): GraphInfo {
    return this.getCurrentGraph().getInfo();
  };

  getCurrentGraphName(): string {
    return this.getCurrentGraph().name;
  };

  setCurrentGraphName(name: string): void {
    this.getCurrentGraph().name = name;
  }

  moveNextGraph(): void {
    if (this.currIdx >= this.graphs.length) {
      throw new Error("Index of out boundary");
    } else {
      this.currIdx ++;
    }
  }

  movePrevGraph(): void {
    if (this.currIdx === 0) {
      throw new Error("Index of out boundary");
    } else {
      this.currIdx --;
    }
  }

  pushVertex(_id: string, value: any): void {
    this.graphs[this.currIdx].pushVertex(_id, value);
  }

  pushEdge(vertexTo: string, vertexFrom: string, weight ?: number) {
    this.graphs[this.currIdx].pushEdge(vertexTo, vertexFrom, weight);
  }

  getCurrentIdx(): number {
    return this.currIdx
  }
}
