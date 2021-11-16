namespace ds {
  export interface GraphInfo {
    name: string,
    type: string,
    numVertex: number,
    vertices: string[],
    numEdge: number,
    edges: Edge[]
  }
  
  export interface GraphInterface {
    vertices: Vertex[],
    edges: Edge[],
    type: string,
    name: string,
    pushVertex: (_id: string, value: any) => boolean;
    pushEdge: (vertexTo: string, vertexFrom: string, weight?: number) => boolean;
    getInfo: () => GraphInfo;
  }
}