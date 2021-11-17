import { VertexCanvasInterface } from "./types/vertexCanvasInterface";

export class VertexCanvas implements VertexCanvasInterface {
  x: number;
  y: number;
  defaultStyle: string;
  vertexId: string;
  isActive: boolean;

  constructor(x: number, y: number, defaultStyle: string, vertexId: string) {
    this.x = x;
    this.y = y;
    this.defaultStyle = defaultStyle;
    this.vertexId = vertexId;
    this.isActive = false;
  }

  handleClick(): string {
    this.isActive = !this.isActive;
    return this.vertexId;
  }

  draw(canvasElement: HTMLDivElement): void {
    const vertexElement = document.createElement('div');
    vertexElement.setAttribute('style', this.defaultStyle);
    vertexElement.addEventListener('click', this.handleClick);
    
  }
}