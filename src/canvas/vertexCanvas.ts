import { VertexCanvasInterface } from "./types/vertexCanvasInterface";
import { vertexStyle } from "./styles/vertex.style";

export class VertexCanvas implements VertexCanvasInterface {
  x: number;
  y: number;
  defaultStyle: string;
  vertexId: string;
  isActive: boolean;
  vertexElement: HTMLButtonElement

  constructor(x: number, y: number, vertexId: string) {
    this.x = x;
    this.y = y;
    this.vertexId = vertexId;
    this.isActive = false;
    this.vertexElement = document.createElement('button');
    this.vertexElement.classList.add('vertex');
    this.vertexElement.classList.add('inactive');
    this.vertexElement.setAttribute('style', vertexStyle(this.x, this.y));
  }

  getVertexElement(): HTMLButtonElement {
    return this.vertexElement;
  }

  handleClick(): void {
    if (this.isActive) {
      this.vertexElement.classList.remove('active');
      this.isActive = false;
      this.vertexElement.classList.add('inactive'); 
    } else {
      this.vertexElement.classList.remove('inactive');
      this.isActive = true;
      this.vertexElement.classList.add('active');
    }
  }
}