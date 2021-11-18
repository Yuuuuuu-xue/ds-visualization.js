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
    this.graphs[this.currIdx].pushVertex(_id, value);
  }

  getCurrentIdx(): number {
    return this.currIdx
  }
}
