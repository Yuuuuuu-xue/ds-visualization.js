import { Vertex } from "../types/vertex";
import { Edge } from "../types/edge";
import { GraphInterface } from "../types/graph";
import { GraphInfo } from "../types/graph";

export class Graph implements GraphInterface {
  vertices: Vertex[];
  edges: Edge[];
  type: string;
  name: string;
  visitedVertices = new Set();
  visitedEdges = new Set();
  
  constructor(type: string, name: string) {
    this.vertices = [];
    this.edges = [];
    this.type = type;
    this.name = name;
  };

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

  pushEdge(vertexTo: string, vertexFrom: string, weight?: number): boolean {
    if(!this.visitedVertices.has(vertexTo) || !this.visitedVertices.has(vertexFrom)) {
      throw new Error(`The vertex id ${vertexTo} or ${vertexFrom} does not exist`);
    }

    const seralizeEdge = JSON.stringify([vertexTo, vertexFrom]);
    if (this.visitedEdges.has(seralizeEdge)) {
      throw new Error(`The edge is already exist!`);
    }

    this.visitedEdges.add(seralizeEdge);
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

