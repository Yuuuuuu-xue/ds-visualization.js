import { Dialog } from "../entity/dialog/dialog";
import { canvasStyle } from "../styles/canvas.style";
import { GraphInfo } from "../types/graph";
import { VertexDetailInterface } from "../types/vertexDetailInterface";

export class DialogManager {
  dialogElement: HTMLDivElement;
  width: number;
  height: number;
  dialog: Dialog;

  constructor(width: number, height: number) {
    if (width <= 0) {
      throw new Error('Width must be positive number');
    }

    if (height <= 0) {
      throw new Error('Height must be positive number');
    }

    this.width = width;
    this.height = height;
    
    this.dialogElement = document.createElement('div');
    this.dialogElement.classList.add('ds-dialog');
    this.dialogElement.setAttribute('style', canvasStyle(this.width, this.height));
    
    // background title
    const dialogBackgroundTitle = document.createElement('p');
    dialogBackgroundTitle.innerText = 'DS.js Dialog';
    dialogBackgroundTitle.classList.add('ds-dialog-background-title'); 

    const dialogTitle = document.createElement('p');
    dialogTitle.innerText = 'Graph Info';
    dialogTitle.classList.add('ds-dialog-title');

    this.dialog = new Dialog();

    this.dialogElement.insertAdjacentElement('beforeend', dialogBackgroundTitle);
    this.dialogElement.insertAdjacentElement('beforeend', dialogTitle);
    this.dialogElement.insertAdjacentElement('beforeend', this.dialog.getElementName());
    this.dialogElement.insertAdjacentElement('beforeend', this.dialog.getElementType());
    this.dialogElement.insertAdjacentElement('beforeend', this.dialog.getElementNumVertex());
    this.dialogElement.insertAdjacentElement('beforeend', this.dialog.getElementNumEdge());
    this.dialogElement.insertAdjacentElement('beforeend', this.dialog.getElementVertexDetail());
  }

  setWidth(width: number): void {
    if (width <= 0) {
      throw new Error("Width must be positive number");
    }
    this.width = width;
    this.dialogElement.setAttribute('style', canvasStyle(this.width, this.height));
  }

  setHeight(height: number): void {
    if (height <= 0) {
      throw new Error("Height must be positive number");
    }
    this.height = height;
    this.dialogElement.setAttribute('style', canvasStyle(this.width, this.height));
  }

  getDialogElement(): HTMLDivElement {
    return this.dialogElement;
  }

  setGraphDetail(graphInfo: GraphInfo) {
    this.dialog.setGraphDetail(graphInfo);
  }

  setVertexDetail(vertexDetail: VertexDetailInterface) {
    this.dialog.setVertexDetail(vertexDetail);
  }
  
}