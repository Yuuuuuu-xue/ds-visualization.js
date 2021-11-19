export interface VertexInfo {
  vertexId: string,
  weight ?: number
}

export interface VertexDetailInterface {
  vertexTo: VertexInfo[],
  vertexFrom: VertexInfo[],
  vertexId: string
}
