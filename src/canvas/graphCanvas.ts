import { GraphType } from "../ds/types/constantType";
import { EdgeDetailInterface } from "../ds/types/edgeDetailInterface";
import { GraphConfig, Mode } from "../ds/types/graphConfig";
import { VertexConfig } from "../ds/types/vertexConfig";
import { EdgeCanvas } from "./edgeCanvas";
import { GraphCanvasInterface } from "./types/graphCanvasInterface";
import seralizeEdge from "./utils/seralizeEdge";
import { VertexCanvas } from "./vertexCanvas";

export class GraphCanvas implements GraphCanvasInterface {
  vertices: VertexCanvas[];
  edges: EdgeCanvas[];
  display: boolean;
  graphElement: HTMLDivElement;
  updateDialog: (vertexId: string) => void;
  clearVertexDialog: () => void;
  setEdgeDialog: (edgeDetail: EdgeDetailInterface[], enableWeight?: boolean) => void;
  clearEdgeDialog: () => void;
  mode: Mode;
  traversedVertices: VertexCanvas[];
  visitedVertices: Map<string, number>;
  visitedEdges: Map<string, number>;
  enableWeight?: boolean;
  disallowRepeatedVertex?: boolean;
  disallowRepeatedEdge?: boolean;
  enableRemoveLastVertexButton: () => void;

  constructor(updateDialog: (vertexId: string) => void, clearVertexDialog: () => void, config: GraphConfig, setEdgeDialog: (edgeDetail: EdgeDetailInterface[], enableWeight?: boolean) => void, clearEdgeDialog: () => void, enableRemoveLastVertexButton: () => void) {
    this.vertices = [];
    this.edges = [];
    this.display = false;
    this.graphElement = document.createElement('div');
    this.graphElement.classList.add('graph');
    this.graphElement.classList.add('hidden');
    this.updateDialog = updateDialog;
    this.clearVertexDialog = clearVertexDialog;
    this.setEdgeDialog = setEdgeDialog;
    this.clearEdgeDialog = clearEdgeDialog;
    this.traversedVertices = [];
    const { mode, enableWeight, disallowRepeatedVertex, disallowRepeatedEdge } = config;
    this.mode = mode;
    this.enableWeight = enableWeight;
    this.disallowRepeatedVertex = disallowRepeatedVertex;
    this.disallowRepeatedEdge = disallowRepeatedEdge;
    this.visitedVertices = new Map();
    this.visitedEdges = new Map();
    this.enableRemoveLastVertexButton = enableRemoveLastVertexButton;
  }

  getMode(): Mode {
    return this.mode;
  }

  setInactiveAll(): void {
    this.vertices.forEach(v => {
    v.setInactive();
    });
    this.edges.forEach(e => {
    e.setInactive();
    })
  }

  clearPath(): void {
    // Set traversed vertices as inactive
    this.traversedVertices.forEach(v => {
      v.setInactive();
    });
    this.edges.forEach(e => {
      if(this.visitedEdges.has(e.getSeralizedEdge())) {
        e.setInactive();
      }
    });
    this.setCursor(null);

    // Reset the value
    this.traversedVertices = [];
    this.visitedVertices = new Map();
    this.visitedEdges = new Map();

    // Clear the dialog
    this.clearEdgeDialog();
  }

  getNumTraversedVertices(): number {
    return this.traversedVertices.length;
  }

  removeLastVertex(): void {
    if (this.traversedVertices.length > 0) {
      const lastVertexFrom = this.traversedVertices.pop();
      // If not last vertex, then also an edge
      if (this.traversedVertices.length > 0) {
        const lastVertexTo = this.traversedVertices[this.traversedVertices.length - 1]; 
        this.edges.forEach(e => {
          if (e.vertexToId === lastVertexTo.vertexId && e.vertexFromId ===  lastVertexFrom.vertexId) {
            // Remove from visited edges
            const seralizedEdge = seralizeEdge(lastVertexTo.vertexId, lastVertexFrom.vertexId);
            const mapEdgeValue = this.visitedEdges.get(seralizedEdge);
            if (mapEdgeValue <= 1) {
              this.visitedEdges.delete(seralizedEdge);
            } else {
              this.visitedEdges.set(seralizedEdge, mapEdgeValue - 1);
            }
            // Set inactive if we remove it
            if (!this.visitedEdges.has(seralizedEdge)) {
              e.setInactive();
            }
          }
        });

        // If value is less than or equal to 1, then we delete it directly
        const mapValue = this.visitedVertices.get(lastVertexFrom.vertexId); 
        if (mapValue <= 1) {
          this.visitedVertices.delete(lastVertexFrom.vertexId);
        } else {
          // Decrement by 1
          this.visitedVertices.set(lastVertexFrom.vertexId, mapValue - 1);
        }
        // Set the cursor
        this.setCursor(lastVertexTo);
      } else {
        // If value is less than or equal to 1, then we delete it directly
        const mapValue = this.visitedVertices.get(lastVertexFrom.vertexId); 
        if (mapValue <= 1) {
          this.visitedVertices.delete(lastVertexFrom.vertexId);
        } else {
          // Decrement by 1
          this.visitedVertices.set(lastVertexFrom.vertexId, mapValue - 1);
        }
        this.setCursor(null);
      }
      // If visitiedVertices does not have this vertex meaning that no previous move involve with this vertex, then inactive
      if (!this.visitedVertices.has(lastVertexFrom.vertexId)) {
        lastVertexFrom.setInactive();
      }
      this.setEdgeDialog(this.getEdgeDetail(), this.enableWeight);
    }
  }

  updateConfig(config: GraphConfig): void {
    const { mode, enableWeight, disallowRepeatedVertex, disallowRepeatedEdge } = config;
    this.mode = mode;

    if (enableWeight !== undefined) {
      this.enableWeight = enableWeight;
    }

    if (disallowRepeatedVertex !== undefined) {
      this.disallowRepeatedVertex = disallowRepeatedVertex;
    }
    
    if (disallowRepeatedEdge !== undefined) {
      this.disallowRepeatedEdge = disallowRepeatedEdge;
    }
  }

  private getEdgeDetail(): EdgeDetailInterface[] {
    const output: EdgeDetailInterface[] = []; 
    
    for(let i = 0; i < this.traversedVertices.length - 1; i ++) {
      const targetEdges = this.edges.filter(e => e.vertexToId === this.traversedVertices[i].vertexId && e.vertexFromId === this.traversedVertices[i + 1]. vertexId);
      if (targetEdges.length > 0) {
        output.push({
          vertexTo: this.traversedVertices[i].vertexId,
          vertexFrom: this.traversedVertices[i + 1].vertexId,
          weight: targetEdges[0].weight
        });
      }
    }
    return output;
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
    } else if (this.mode === 'traversable') {
      
      if (this.traversedVertices.length >= 1) {

        // Check if this is a repeated vertex, if we has the vertices this means it's value >= 1, so will be repeated
        if (this.disallowRepeatedVertex === true && this.visitedVertices.has(newVertex.vertexId)) {
          return;
        }

        const lastVertex = this.traversedVertices[this.traversedVertices.length - 1];

        // Check if this is a repeated edge
        if (this.disallowRepeatedEdge === true && this.visitedEdges.has(seralizeEdge(lastVertex.vertexId, newVertex.vertexId))) {
          return;
        }

        // Find the correct edge
        const incidentEdges = this.edges.filter(e => e.vertexToId === lastVertex.vertexId && e.vertexFromId === newVertex.vertexId);
        if (incidentEdges.length > 0) {
          incidentEdges[0].setActive();
          // Set the vertex as active as well
          newVertex.setActive();
          // Check if we have it or not
          if (this.visitedVertices.has(newVertex.vertexId)) {
            this.visitedVertices.set(newVertex.vertexId, this.visitedVertices.get(newVertex.vertexId) + 1); // Increment it by 1
          } else {
            this.visitedVertices.set(newVertex.vertexId, 1); // First time
          }
          this.traversedVertices.push(newVertex);
          // Check if we have it or not
          const seralizedEdge = seralizeEdge(lastVertex.vertexId, newVertex.vertexId);
          if (this.visitedEdges.has(seralizedEdge)) {
            this.visitedEdges.set(seralizedEdge, this.visitedEdges.get(seralizedEdge) + 1);
          } else {
            this.visitedEdges.set(seralizedEdge, 1);
          }
          this.setEdgeDialog(this.getEdgeDetail(), this.enableWeight);
        }
      } else {
        newVertex.setActive();
        if (this.visitedVertices.has(newVertex.vertexId)) {
          this.visitedVertices.set(newVertex.vertexId, this.visitedVertices.get(newVertex.vertexId) + 1); // Increment it by 1
        } else {
          this.visitedVertices.set(newVertex.vertexId, 1); // First time
        }
        this.traversedVertices.push(newVertex);
        this.setEdgeDialog(this.getEdgeDetail(), this.enableWeight);

        // Since thi sis the first traversed vertex, so we will enable the button
        this.enableRemoveLastVertexButton(); 
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
          if (this.disallowRepeatedEdge) {
            if (!this.visitedEdges.has(e.getSeralizedEdge())) {
              canTraverseVertex.add(e.vertexFromId);
            }
          } else {
            canTraverseVertex.add(e.vertexFromId);
          }
        }
      });
      this.vertices.forEach(v => {
        if (canTraverseVertex.has(v.vertexId) && ((this.disallowRepeatedVertex !== true) || (this.disallowRepeatedVertex === true && !this.visitedVertices.has(v.vertexId)))) { 
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
    if (type === 'undirected') {
      const reverseEdge = new EdgeCanvas(vertexFrom.x, vertexFrom.y, vertexTo.x, vertexTo.y, vertexToId, vertexFromId, type, weight);
      this.edges.push(reverseEdge);
      this.graphElement.insertAdjacentElement('beforeend', reverseEdge.getEdgeElement());
    }
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
