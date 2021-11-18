import { SlideManagerInterface } from "../types/slideManager";
import { Graph } from "../graph/graph";
import { GraphInfo } from "../types/graph";

export class SlideManager implements SlideManagerInterface {
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

  moveNextGraph(): boolean {
    if (this.currIdx >= this.graphs.length) {
      return false;
    } else {
      this.currIdx ++;
      return true;
    }
  }

  movePrevGraph(): boolean {
    if (this.currIdx === 0) {
      return false;
    } else {
      this.currIdx --;
      return true;
    }
  }

  pushVertex(_id: string, value: any): void {
    const result = this.graphs[this.currIdx].pushVertex(_id, value);
    if (!result) {
      throw new Error(`The id ${_id} must be unique`);
    }
  }

  pushEdge(vertexTo: string, vertexFrom: string, weight ?: number) {
    const result = this.graphs[this.currIdx].pushEdge(vertexTo, vertexFrom, weight);
    if (!result) {
      throw new Error(`The vertex id ${vertexTo} or ${vertexFrom} does not exist`);
    }
  }

  getCurrentIdx(): number {
    return this.currIdx
  }
}
