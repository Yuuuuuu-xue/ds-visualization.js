import { Style } from "./style";

export interface VertexConfig { 
  draggable?: boolean,
  backgroundImageSrc?: string
  hideText?: boolean
  style?: Style
  disableActiveClick?: boolean
  clickCallback?: () => void
}