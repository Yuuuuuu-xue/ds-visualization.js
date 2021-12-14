import { VertexConfig } from "./vertexConfig";

export default interface VertexInput {
  _id: string,
  value: any,
  x: number, 
  y: number,
  config: VertexConfig
}