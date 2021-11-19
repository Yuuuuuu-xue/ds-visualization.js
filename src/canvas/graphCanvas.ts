import { EdgeCanvas } from "./edgeCanvas";
import { GraphCanvasInterface } from "./types/graphCanvasInterface";
import { VertexCanvas } from "./vertexCanvas";

export class GraphCanvas implements GraphCanvasInterface {
    vertices: VertexCanvas[];
    edges: EdgeCanvas[];
    display: boolean;
    graphElement: HTMLDivElement;
    updateDialog: (vertexId: string) => void;
    clearVertexDialog: () => void;

    constructor(updateDialog: (vertexId: string) => void, clearVertexDialog: () => void) {
        this.vertices = [];
        this.edges = [];
        this.display = false;
        this.graphElement = document.createElement('div');
        this.graphElement.classList.add('graph');
        this.graphElement.classList.add('hidden');
        this.updateDialog = updateDialog;
        this.clearVertexDialog = clearVertexDialog;
    }

    setInactiveAll(): void {
      this.vertices.forEach(v => {
        v.setInactive();
      });
      this.edges.forEach(e => {
        e.setInactive();
      })
    }

    handleVertexClick(newVertex: VertexCanvas): void {
        this.vertices.forEach(v => {
            if (v.vertexId !== newVertex.vertexId) {
                v.setInactive();
            }
        });
        this.edges.forEach(e => {
            if (e.vertexFromId !== newVertex.vertexId && e.vertexToId !== newVertex.vertexId) {
                e.setInactive();
            } else {
                if (!newVertex.isActive) {
                    e.setActive();
                } else {
                    e.setInactive();
                }
            }
        })
        newVertex.handleClick();
        this.updateDialog(newVertex.vertexId);
        if(!newVertex.isActive) {
          // Not active, clear the dialog
          this.clearVertexDialog();
        }
    }

    pushVertex(vertexId: string, x: number, y: number, value: any): void {
        const newVertex = new VertexCanvas(x, y, vertexId, value);
        newVertex.getVertexElement().addEventListener('click', () => this.handleVertexClick(newVertex));
        this.vertices.push(newVertex);
        this.graphElement.insertAdjacentElement('beforeend', newVertex.getVertexElement());
    }

    pushEdge(vertexToId: string, vertexFromId: string, weight ?: number): void {
        // Assume vertexFromId is valid 
        const vertexFrom = this.vertices.filter(vertex => vertex.vertexId === vertexFromId)[0];
        const vertexTo = this.vertices.filter(vertex => vertex.vertexId === vertexToId)[0];
        const newEdge = new EdgeCanvas(vertexTo.x, vertexTo.y, vertexFrom.x, vertexFrom.y, vertexFromId, vertexToId, weight);
        this.edges.push(newEdge);
        this.graphElement.insertAdjacentElement('beforeend', newEdge.getEdgeElement());
    }

    getGraphElement(): HTMLDivElement {
        return this.graphElement;
    }

    displayGraph(): void {
        this.display = true;
        this.graphElement.classList.remove('hidden');
    }

    hideGraph(): void {
        this.display = false;
        this.graphElement.classList.add('hidden');
    }
};
