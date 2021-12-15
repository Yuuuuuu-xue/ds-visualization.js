import { GraphType } from "../ds/types/constantType";
import { GraphConfig, Mode } from "../ds/types/graphConfig";
import { VertexConfig } from "../ds/types/vertexConfig";
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
  mode: Mode;
  traversedVertices: VertexCanvas[];
  visitedVertices: Set<string>;
  visitedEdges: Set<string>;

  constructor(updateDialog: (vertexId: string) => void, clearVertexDialog: () => void, config: GraphConfig) {
    this.vertices = [];
    this.edges = [];
    this.display = false;
    this.graphElement = document.createElement('div');
    this.graphElement.classList.add('graph');
    this.graphElement.classList.add('hidden');
    this.updateDialog = updateDialog;
    this.clearVertexDialog = clearVertexDialog;
    this.traversedVertices = [];
    const { mode } = config;
    this.mode = mode;
    this.visitedVertices = new Set();
    this.visitedEdges = new Set();
  }

  setInactiveAll(): void {
    this.vertices.forEach(v => {
    v.setInactive();
    });
    this.edges.forEach(e => {
    e.setInactive();
    })
  }

  updateConfig(config: GraphConfig): void {
    const { mode } = config;
    this.mode = mode;
  }

  handleVertexClick(newVertex: VertexCanvas): void {
    // Not clickable graph
    if (this.mode === 'non-clickable') {
      return;
    } else if (this.mode === 'clickable') {
      if (newVertex.getDisableActiveClick()) {
        newVertex.handleClick();
        return;
      }
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
    } else if (this.mode === 'traverse') {
      
      if (this.traversedVertices.length >= 1) {
        const lastVertex = this.traversedVertices[this.traversedVertices.length - 1];
        // Find the correct edge
        const incidentEdges = this.edges.filter(e => e.vertexToId === lastVertex.vertexId && e.vertexFromId === newVertex.vertexId);
        if (incidentEdges.length > 0) {
          incidentEdges[0].setActive();
          // Set the vertex as active as well
          newVertex.setActive();
          this.visitedVertices.add(newVertex.vertexId);
          this.traversedVertices.push(newVertex);
          this.visitedEdges.add(JSON.stringify([lastVertex.vertexId, newVertex.vertexId]));
        }
      } else {
        newVertex.setActive();
        this.visitedVertices.add(newVertex.vertexId);
        this.traversedVertices.push(newVertex);
      }

      // Update the canvas
      const lastVertex = this.traversedVertices[this.traversedVertices.length - 1];
      this.setCursor(lastVertex);
    }
  }

  private setCursor(lastVertex?: VertexCanvas): void {
    if (lastVertex) {
      const canTraverseVertex = new Set();
      this.edges.forEach(e => {
        if (e.vertexToId === lastVertex.vertexId) {
          canTraverseVertex.add(e.vertexFromId);
        }
      });
      this.vertices.forEach(v => {
        if (canTraverseVertex.has(v.vertexId)) { 
          v.getVertexElement().style.cursor = 'pointer';
        } else {
          v.getVertexElement().style.cursor = 'not-allowed';
        }
      })
    } else {
      // Initila
      this.vertices.forEach(v => {
        v.getVertexElement().style.cursor = 'pointer';
      });
    }
  }

  pushVertex(vertexId: string, x: number, y: number, value: any, config: VertexConfig): void {
    const newVertex = new VertexCanvas(x, y, vertexId, value, config, (_id: string, x: number, y: number) => this.updateVertexPosition(_id, x, y));
    newVertex.getVertexElement().addEventListener('click', () => this.handleVertexClick(newVertex));
    this.vertices.push(newVertex);
    this.graphElement.insertAdjacentElement('beforeend', newVertex.getVertexElement());
  }

  pushEdge(vertexToId: string, vertexFromId: string, type: GraphType, weight ?: number): void {
    // Assume vertexFromId is valid 
    const vertexFrom = this.vertices.filter(vertex => vertex.vertexId === vertexFromId)[0];
    const vertexTo = this.vertices.filter(vertex => vertex.vertexId === vertexToId)[0];
    const newEdge = new EdgeCanvas(vertexTo.x, vertexTo.y, vertexFrom.x, vertexFrom.y, vertexFromId, vertexToId, type, weight);
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

  removeVertex(_id: string): void {
    const targetVertices = this.vertices.filter(v => v.vertexId === _id);
    targetVertices.forEach(targetVertex => {
    // Remove the element from DOM
    targetVertex.vertexElement.parentElement.removeChild(targetVertex.vertexElement);
    });

    const inNeighbourIds = [];
    const outNeighbourIds = [];
    this.edges.forEach(e => {
    if (e.vertexFromId === _id) {
      inNeighbourIds.push(e.vertexToId);
    } else if (e.vertexToId === _id) {
      outNeighbourIds.push(e.vertexFromId);
    }
    });

    inNeighbourIds.forEach(vertexTo => {
    this.removeEdge(vertexTo, _id);
    })

    outNeighbourIds.forEach(vertexFrom => {
    this.removeEdge(_id, vertexFrom);
    })
  }

  removeEdge(vertexTo: string, vertexFrom: string): void {
    const targetEdges = this.edges.filter(e => e.vertexToId === vertexTo && e.vertexFromId === vertexFrom);
    targetEdges.forEach(targetEdge => {
    targetEdge.edgeElement.parentElement.removeChild(targetEdge.edgeElement);
    });
  }

  removeGraph(): void {
    // this.vertices.forEach(v => {
    //   this.removeVertex(v.vertexId);
    // });
    this.graphElement.parentElement.removeChild(this.graphElement);
  }

  updateVertexConfig(vertexId: string, config: VertexConfig): void {
    this.vertices.forEach(v => {
    if (v.vertexId === vertexId) {
      v.updateConfig(config);
    }
    });
  }

  updateVertexValue(vertexId: string, value: any): void { 
    this.vertices.forEach(v => {
    if (v.vertexId === vertexId) {
      v.vertexElement.innerText = value;
    }
    });
  }

  updateVertexPosition(vertexId: string, x: number, y: number): void {
    this.vertices.forEach(v => {
    if (v.vertexId === vertexId) {
      v.updatePosition(x, y);
      this.edges.forEach(e => {
      if (e.vertexToId === vertexId) {
        e.updateVertexToPosition(x, y);
      }
      if (e.vertexFromId === vertexId) {
        e.updateVertexFromPosition(x, y);
      }
      });
    }
    })
  }

  updateGraphType(type: GraphType): void {
    this.edges.forEach(e => {
    e.updateType(type);
    });
  }
};
