import { VertexCanvasInterface } from "./types/vertexCanvasInterface";
import { vertexStyle } from "./styles/vertex.style";
import { VertexConfig } from "../ds/types/vertexConfig";
import dragElement from "./utils/drag";

export class VertexCanvas implements VertexCanvasInterface {
  x: number;
  y: number;
  vertexId: string;
  isActive: boolean;
  vertexElement: HTMLButtonElement
  updateVertexWithEdgePosition: (_id: string, x: number, y: number) => void

  constructor(x: number, y: number, vertexId: string, value: any, config: VertexConfig, updateVertexWithEdgePosition: (_id: string, x: number, y: number) => void) {
    this.vertexId = vertexId;
    this.isActive = false;
    this.vertexElement = document.createElement('button');
    this.vertexElement.classList.add('vertex');
    this.vertexElement.classList.add('inactive');
    this.vertexElement.innerText = value;
    this.updatePosition(x, y);
    const { draggable } = config;
    this.updateVertexWithEdgePosition = updateVertexWithEdgePosition;
    if (draggable === true) {
      this.vertexElement.classList.add('draggable')
      dragElement(this.vertexElement, (x, y) => this.updateVertexWithEdgePosition(this.vertexId, x, y));
    }

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