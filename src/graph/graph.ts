namespace graph {
  class MyGraph implements Graph {
    vertices: Vertex[];
    edges: Edge[];
    type: string;
    name: string;
    visitedVertices = new Set();
    
    constructor(type: string, name: string) {
      this.vertices = [];
      this.edges = [];
      this.type = type;
      this.name = name;
    };

    pushVertex(_id: string, value: any): boolean {
      // id is not unique
      if(this.visitedVertices.has(_id)) {
        return false;
      }
      
      // create new Vertex
      const newVertex: Vertex = {
        _id: _id,
        value: value
      };
      this.vertices.push(newVertex);
    };

    pushEdge(vertexTo: string, vertexFrom: string, weight?: number): boolean {
      if(!this.visitedVertices.has(vertexTo) || this.visitedVertices.has(vertexFrom)) {
        return false;
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
}