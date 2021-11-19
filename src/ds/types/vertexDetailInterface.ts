interface VertexInfo {
  vertexId: string,
  vertexValue: any,
  weight ?: number
}

export interface VertexDetailInterface {
  vertexTo: VertexInfo[],
  vertexFrom: VertexInfo[],
  vertexId: string
}
