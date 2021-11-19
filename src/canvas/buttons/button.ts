import { ButtonInterface } from "../types/buttonInterface";

export class Button implements ButtonInterface {
  buttonElemenet: HTMLButtonElement;

  constructor(type: string, buttonBody: string) {
    this.buttonElemenet = document.createElement('button');
    this.buttonElemenet.classList.add('ds-canvas-button');
    this.buttonElemenet.classList.add(`ds-canvas-${type}`);
    this.buttonElemenet.innerText = buttonBody;
  }

  getButtonElement(): HTMLButtonElement {
    return this.buttonElemenet;
  }

  disableButtonElement(): void {
    this.buttonElemenet.classList.add('disable');
    this.buttonElemenet.classList.remove('enable');
  }

  enableButtonElement(): void {
    this.buttonElemenet.classList.remove('disable');
    this.buttonElemenet.classList.add('enable');
  }
}
