import { VertexCanvasInterface } from "./types/vertexCanvasInterface";
import { VertexConfig } from "../ds/types/vertexConfig";
import dragElement, { clearDragListener } from "./utils/drag";
import { Style } from "../ds/types/style";
import { Mode } from "../ds/types/graphConfig";

export class VertexCanvas implements VertexCanvasInterface {
  x: number;
  y: number;
  vertexId: string;
  isActive: boolean;
  vertexElement: HTMLButtonElement;
  updateVertexWithEdgePosition: (_id: string, x: number, y: number) => void;
  vertexValue: any;
  disableActiveClick: any;
  clickCallback: () => void;

  constructor(x: number, y: number, vertexId: string, value: any, config: VertexConfig, updateVertexWithEdgePosition: (_id: string, x: number, y: number) => void, graphMode: Mode) {
    this.vertexId = vertexId;
    this.isActive = false;
    this.vertexElement = document.createElement('button');
    this.vertexElement.classList.add('vertex');
    this.vertexElement.classList.add('inactive');
    this.vertexValue = value; 

    const { draggable, backgroundImageSrc, hideText, style, disableActiveClick, clickCallback } = config;

    this.disableActiveClick = disableActiveClick === true;
    this.clickCallback = clickCallback;

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

    if (graphMode !== 'traversable') {
      // Set the cursor
      if (draggable) {
        this.vertexElement.style.cursor = 'move';
      } else if (this.disableActiveClick && this.clickCallback === undefined) {
        this.vertexElement.style.cursor = 'not-allowed'
      } else {
        this.vertexElement.style.cursor = 'pointer';
      }
    } else {
      this.vertexElement.style.cursor = 'pointer';
    }
  }
  
  private configHideText(hideText?: boolean): void {
    // Hide text
    if (hideText !== undefined) {
      if (!hideText) {
        this.vertexElement.innerText = this.vertexValue;
      }
    }
  }

  private configDraggable(draggable?: boolean): void {
    // Draggable
    if (draggable !== undefined) {
      if (draggable === true) {
        this.vertexElement.classList.add('draggable');
        dragElement(this.vertexElement, (x, y) => this.updateVertexWithEdgePosition(this.vertexId, x, y));
      } else {
        // We might need to remove the event listener
        this.vertexElement.classList.remove('draggable');
        clearDragListener(this.vertexElement);
      }
    }
  }

  private configBackgroundImageSrc(backgroundImageSrc?: string, hideText?: boolean): void {
    // Background image source
    if (backgroundImageSrc !== undefined) {
      if (!hideText) {
        this.vertexElement.style.background = `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url('${backgroundImageSrc}') no-repeat center center / cover`;
      } else {
        this.vertexElement.style.background = `url('${backgroundImageSrc}') no-repeat center center / cover`;
      } 
    }; 
  }

  private configStyle(style?: Style, draggable?: boolean) {
    // Set the style
    for (const styleKey in style) {
      this.vertexElement.style[styleKey] = style[styleKey];
    }

    // Set the cursor
    if (draggable) {
      this.vertexElement.style.cursor = 'move';
    } else if (this.disableActiveClick && this.clickCallback === undefined) {
      this.vertexElement.style.cursor = 'default'
    } else {
      this.vertexElement.style.cursor = 'pointer';
    }
  }

  updateConfig(config: VertexConfig): void {
    const { draggable, backgroundImageSrc, hideText, style, disableActiveClick, clickCallback } = config;
    // Update disable active click
    if (disableActiveClick !== undefined) {
      this.disableActiveClick = disableActiveClick === true;
    }

    // Update click callback
    if (clickCallback !== undefined) {
      this.clickCallback = clickCallback;
    }

    this.configHideText(hideText);
    this.configDraggable(draggable);
    this.configBackgroundImageSrc(backgroundImageSrc, hideText); 
    this.configStyle(style, draggable);
  }

  getVertexElement(): HTMLButtonElement {
    return this.vertexElement;
  }

  getDisableActiveClick(): boolean {
    return this.disableActiveClick;
  }

  handleClick(): void {
    if (this.clickCallback !== undefined) {
      this.clickCallback();
    }
    if (!this.disableActiveClick) {
      if (this.isActive) {
        this.setInactive();
      } else {
        this.setActive();
      }
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