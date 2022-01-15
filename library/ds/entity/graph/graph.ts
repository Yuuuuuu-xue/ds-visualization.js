import { Vertex } from "../../types/vertex";
import { Edge } from "../../types/edge";
import { GraphInterface } from "../../types/graph";
import { GraphInfo } from "../../types/graph";
import { VertexDetailInterface, VertexInfo } from "../../types/vertexDetailInterface";
import { GraphType } from "../../types/constantType";
import VertexInput from "../../types/vertexInput";

export class Graph implements GraphInterface {
  vertices: Vertex[];
  edges: Edge[];
  type: GraphType;
  name: string;
  visitedVertices = new Set();
  visitedEdges = new Set();
  
  constructor(type: string, name: string) {
    this.vertices = [];
    this.edges = [];
    if (type !== 'directed' && type !== 'undirected') {
      throw new Error("Graph type must be either 'directed' or 'undirected'");
    }
    this.type = type;
    this.name = name;
  };

  removeGraph(): void {
    this.vertices.forEach(v => {
      this.removeVertex(v._id);
    });
  }

  validateValidVertexId(_id: string): void {
    if(!this.visitedVertices.has(_id)) {
      throw new Error(`No such vertex with id ${_id}`);
    }
  }


  removeVertex(_id: string): void {
    this.validateValidVertexId(_id);
    this.visitedVertices.delete(_id);
    this.vertices = this.vertices.filter(v => v._id !== _id);
    // Remove Edge
    this.getInNeighbourIds(_id).forEach(vertexTo => {
      this.removeEdge(vertexTo, _id);
    })

    this.getOutNeighbourIds(_id).forEach(vertexFrom => {
      this.removeEdge(_id, vertexFrom);
    });
  }

  getInNeighbourIds(vertexId: string): string[] {
    const targetIds = [];
    this.edges.forEach(e => {
      if (e.vertexFrom === vertexId) {
        targetIds.push(e.vertexTo);
      }
    });
    return targetIds;
  }

  getOutNeighbourIds(vertexId: string): string[] {
    const targetIds = [];
    this.edges.forEach(e => {
      if (e.vertexTo === vertexId){
        targetIds.push(e.vertexFrom);
      }
    });
    return targetIds;
  }

  removeEdge(vertexTo: string, vertexFrom: string) {
    if (this.type === 'directed') {
      const edge = JSON.stringify([vertexTo, vertexFrom]);
      if (!this.visitedEdges.has(edge)) {
        throw new Error(`No edge with vertex id ${vertexTo} to vertex id ${vertexFrom}`);
      }
      this.visitedEdges.delete(edge);
      this.edges = this.edges.filter(e => e.vertexTo !== vertexTo || e.vertexFrom !== vertexFrom);
    } else {
      // Undirected graph, we need to remove two edges
      const edge1 = JSON.stringify([vertexTo, vertexFrom]);
      const edge2 = JSON.stringify([vertexFrom, vertexTo]);
      if (!this.visitedEdges.has(edge1)) {
        throw new Error(`No edge with vertex id ${vertexTo} to vertex id ${vertexFrom}`);
      };
      this.visitedEdges.delete(edge1);
      this.visitedEdges.delete(edge2);
      this.edges = this.edges.filter(e => e.vertexTo !== vertexTo || e.vertexFrom !== vertexFrom);
      this.edges = this.edges.filter(e => e.vertexTo !== vertexFrom || e.vertexFrom !== vertexTo);
    }
  }

  updateVertexValue(_id: string, value: any): void {
    if (!this.visitedVertices.has(_id)) {
      throw new Error(`No such vertex with id ${_id}`);
    }

    this.vertices.forEach(v => {
      if (v._id === _id) {
        v.value = value;
      }
    })
  }

  updateGraphName(name: string): void {
    this.name = name;
  }

  updateGraphType(type: GraphType): void {
    this.type = type; 
  }

  getVertexDetail(_id: string): VertexDetailInterface {
    this.validateValidVertexId(_id);
    
    const vertexTo: VertexInfo[] = [];
    const vertexFrom: VertexInfo[] = [];
    this.edges.forEach(e => {
      if (e.vertexFrom === _id) {
        vertexTo.push({
          vertexId: e.vertexTo,
          weight: e.weight
        });
      } else if (e.vertexTo === _id) {
        vertexFrom.push({
          vertexId: e.vertexFrom,
          weight: e.weight
        });
      }
    })
    let vertexValue: any;
    this.vertices.forEach(v => {
      if (v._id === _id) {
        vertexValue = v.value;
      }
    })

    const vertexDetail: VertexDetailInterface = {
      vertexTo,
      vertexFrom,
      vertexId: _id,
      value: vertexValue
    };

    return vertexDetail;
  }

  pushVertex(_id: string, value: any): boolean {
    // id is not unique
    if(this.visitedVertices.has(_id)) {
      throw new Error(`The id ${_id} must be unique`);
    }
    
    // create new Vertex
    const newVertex: Vertex = {
      _id: _id,
      value: value
    };
    this.vertices.push(newVertex);
    this.visitedVertices.add(_id);
    return true;
  };


  private saveSeralizedEdge(vertexTo: string, vertexFrom: string): void {
    const seralizeEdge = JSON.stringify([vertexTo, vertexFrom]);
    if (this.visitedEdges.has(seralizeEdge)) {
      throw new Error(`The edge is already exist!`);
    }
    this.visitedEdges.add(seralizeEdge);
  }

  pushEdge(vertexTo: string, vertexFrom: string, weight?: number): boolean {
    if(!this.visitedVertices.has(vertexTo) || !this.visitedVertices.has(vertexFrom)) {
      throw new Error(`The vertex id ${vertexTo} or ${vertexFrom} does not exist`);
    }

    this.saveSeralizedEdge(vertexTo, vertexFrom);

    // Undirected graph
    if (this.type === 'undirected') {
      this.saveSeralizedEdge(vertexFrom, vertexTo);
    }

    // Create a new Edge
    const newEdge: Edge = {
      vertexTo: vertexTo,
      vertexFrom: vertexFrom,
      weight: weight
    }
    this.edges.push(newEdge);
    return true;
  };
  
  getInfo(): GraphInfo {
    const info: GraphInfo = {
      name: this.name,
      type: this.type,
      numVertex: this.vertices.length,
      vertices: this.vertices.map(v => v._id),
      numEdge: this.edges.length,
      edges: [...this.edges]
    };
    return info;
  }
}

