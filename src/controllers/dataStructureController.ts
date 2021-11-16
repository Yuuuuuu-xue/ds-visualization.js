namespace ds {
  export class DataStructureController implements DataStructureControllerInterface {
    private graphManager: GraphManager;
    private drawingManager: DrawingManager;
    private targetElement: HTMLDivElement;

    constructor(width: number, height: number, targetElement: HTMLDivElement) {
      this.drawingManager = new DrawingManager(width, height);
      this.graphManager = new GraphManager();
      this.targetElement = targetElement;
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
}