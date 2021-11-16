namespace ds {
  export class GraphManager implements GraphManagerInterface {
    private graphs: Graph[];
    private currIdx: number;

    constructor() {
      this.graphs = [];
      this.currIdx = 0;
    }

    createGraph(type: string, name: string): void {
      const newGraph = new Graph(type, name);
      this.graphs.push(newGraph);
    };

    private raiseError(): void {
      throw new Error("No graphs");
    }

    getCurrentGraph(): Graph {
      if (this.graphs.length < 0) {
        this.raiseError();
      } else {
        return this.graphs[this.currIdx];
      }  
    }

    getCurrentGraphInfo(): GraphInfo {
      if (this.graphs.length < 0) {
        return this.graphs[this.currIdx].getInfo();
      }
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
  }
}
