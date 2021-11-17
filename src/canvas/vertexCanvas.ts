import { VertexCanvasInterface } from "./types/vertexCanvasInterface";

export class VertexCanvas implements VertexCanvasInterface {
  x: number;
  y: number;
  defaultStyle: string;
  vertexId: string;
  isActive: boolean;
  vertexElement: HTMLDivElement

  constructor(x: number, y: number, defaultStyle: string, vertexId: string) {
    this.x = x;
    this.y = y;
    this.defaultStyle = defaultStyle;
    this.vertexId = vertexId;
    this.isActive = false;
    this.vertexElement = document.createElement('div');
    this.vertexElement.setAttribute('style', this.defaultStyle);
    
  }

  handleClick(): void {

  }

  draw(canvasElement: HTMLDivElement): void {
    const vertexElement = document.createElement('div');
    vertexElement.setAttribute('style', this.defaultStyle);
    vertexElement.addEventListener('click', this.handleClick);
    
  }
}