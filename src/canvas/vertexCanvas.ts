import { VertexCanvasInterface } from "./types/vertexCanvasInterface";
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

    const { draggable, backgroundImageSrc, hideText, style } = config;

    if (!hideText) {
      this.vertexElement.innerText = value;
    }

    this.updatePosition(x, y);

    this.updateVertexWithEdgePosition = updateVertexWithEdgePosition;
    if (draggable === true) {
      this.vertexElement.classList.add('draggable')
      dragElement(this.vertexElement, (x, y) => this.updateVertexWithEdgePosition(this.vertexId, x, y));
    }

    if (backgroundImageSrc) {
      // const backgroundImage = document.createElement('img');
      // backgroundImage.classList.add('background-img');
      // backgroundImage.setAttribute('src', backgroundImageSrc);
      // this.vertexElement.insertAdjacentElement('beforeend', backgroundImage); 
      if (!hideText) {
        this.vertexElement.style.background = `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url('${backgroundImageSrc}') no-repeat center center / cover`;
      } else {
        this.vertexElement.style.background = `url('${backgroundImageSrc}') no-repeat center center / cover`;
      } 
    }

    // Set the style
    for (const styleKey in style) {
      this.vertexElement.style[styleKey] = style[styleKey];
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
    this.vertexElement.style.left = `${x}px`;
    this.vertexElement.style.top = `${y}px`
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