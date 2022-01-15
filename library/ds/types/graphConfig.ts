export interface GraphConfig {
  mode: Mode,
  // all other config are used when mode === 'traverse'
  enableWeight?: boolean,
  disallowRepeatedVertex?: boolean,
  disallowRepeatedEdge?: boolean
}


export type Mode = "non-clickable" | "clickable" | "traversable"
