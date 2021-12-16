export interface GraphConfig {
  mode: Mode,
  enableWeight?: boolean
}


export type Mode = "non-clickable" | "clickable" | "traverse"
