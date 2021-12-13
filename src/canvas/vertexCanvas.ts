import { VertexCanvasInterface } from "./types/vertexCanvasInterface";
import { vertexStyle } from "./styles/vertex.style";

export class VertexCanvas implements VertexCanvasInterface {
  x: number;
  y: number;
  vertexId: string;
  isActive: boolean;
  vertexElement: HTMLButtonElement

  constructor(x: number, y: number, vertexId: string, value: any) {
    this.vertexId = vertexId;
    this.isActive = false;
    this.vertexElement = document.createElement('button');
    this.vertexElement.classList.add('vertex');
    this.vertexElement.classList.add('inactive');
    this.vertexElement.innerText = value;
    this.updatePosition(x, y);
  }

  getVertexElement(): HTMLButtonElement {
    return this.vertexElement;
  }

  handleClick(): void {
    if (this.isActive) {
      this.setInactive();
    } else {
      this.setActive();
    }
  }

  updatePosition(x: number, y: number) {
    if (x < 0 || y < 0) {
      throw new Error('The value of x and y must be non-negative');
    }
    this.x = x; 
    this.y = y;
    this.vertexElement.setAttribute('style', vertexStyle(this.x, this.y));
  }

  setInactive(): void {
    this.vertexElement.classList.remove('active');
    this.isActive = false;
    this.vertexElement.classList.add('inactive'); 
  }

  setActive(): void {
    this.vertexElement.classList.remove('inactive');
    this.isActive = true;
    this.vertexElement.classList.add('active');
  }
}