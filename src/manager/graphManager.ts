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

    displayCurrentGraph(target: HTMLDivElement): void {
      target.insertAdjacentHTML('beforeend',
      '<p>Hello World</p>');
    };

    getCurrentGraphInfo(): GraphInfo {
      return this.graphs[this.currIdx].getInfo();
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
