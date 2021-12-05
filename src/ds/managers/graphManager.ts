import { GraphManagerInterface } from "../types/graphManager";
import { Graph } from "../entity/graph/graph";
import { GraphInfo } from "../types/graph";
import { VertexDetailInterface } from "../types/vertexDetailInterface";
import { GraphType } from "../types/constantType";

export class GraphManager implements GraphManagerInterface {
  private graphs: Graph[];
  private currIdx: number;

  constructor() {
    this.graphs = [];
    this.currIdx = 0;
    // default initial graph
    this.createGraph("directed", "Initial Graph");
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

  pushVertexToCurrentGraph(_id: string, value: any): void {
    this.graphs[this.currIdx].pushVertex(_id, value);
  }

  pushEdgeToCurrentGraph(vertexTo: string, vertexFrom: string, weight ?: number) {
    this.graphs[this.currIdx].pushEdge(vertexTo, vertexFrom, weight);
  }

  pushVertexToGraph(i: number, _id: string, value: any): void { 
    if (this.graphs.length <= i) {
      throw new Error("Index of out boundary");
    }
    this.graphs[i].pushVertex(_id, value);
  }

  pushEdgeToGraph(i: number, vertexTo: string, vertexFrom: string, weight ?: number) {
    if (this.graphs.length <= i) {
      throw new Error("Index of out boundary");
    }
    this.graphs[i].pushEdge(vertexTo, vertexFrom, weight);
  }

  getCurrentIdx(): number {
    return this.currIdx
  }

  getGraphSize(): number {
    return this.graphs.length;
  }

  getVertexDetail(vertexId: string): VertexDetailInterface {
    return this.graphs[this.currIdx].getVertexDetail(vertexId);
  }

  getCurrentGraphType(): GraphType {
    return this.graphs[this.currIdx].type;
  }

  getGraphType(i: number): GraphType {
    if (this.graphs.length <= i) {
      throw new Error("Index of out boundary");
    }
    return this.graphs[i].type;
  }
}
