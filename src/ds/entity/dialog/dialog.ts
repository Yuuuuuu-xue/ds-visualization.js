import { GraphInfo } from "../../types/graph";
import { VertexDetailInterface } from "../../types/vertexDetailInterface";

export class Dialog {
  name: HTMLDivElement;
  type: HTMLDivElement;
  numVertex: HTMLDivElement;
  numEdge: HTMLDivElement;
  vertexDetail: HTMLDivElement;

  constructor() {
    this.name = document.createElement('div');
    this.name.classList.add('ds-dialog-name');
    this.name.classList.add('one-line');

    this.type = document.createElement('div');
    this.type.classList.add('ds-dialog-type');
    this.type.classList.add('one-line');

    this.numVertex = document.createElement('div');
    this.numVertex.classList.add('ds-dialog-numVertex');
    this.numVertex.classList.add('one-line');

    this.numEdge = document.createElement('div');
    this.numEdge.classList.add('ds-dialog-numEdge');
    this.numEdge.classList.add('one-line');

    this.vertexDetail = document.createElement('div');
    this.vertexDetail.classList.add('ds-dialog-vertexDetail');   
    this.vertexDetail.classList.add('multiple-line');
  }

  getElementName(): HTMLDivElement {
    return this.name;
  }

  getElementType(): HTMLDivElement {
    return this.type;
  }

  getElementNumVertex(): HTMLDivElement {
    return this.numVertex;
  }

  getElementNumEdge(): HTMLDivElement {
    return this.numEdge;
  }

  getElementVertexDetail(): HTMLDivElement {
    return this.vertexDetail;
  }

  private setInnerHTML(divElement: HTMLDivElement, spanBody: string, paraBody: string) {
    divElement.innerHTML = `
      <span>${spanBody}</span>
      <p>${paraBody}</p>
    `;
  }

  setGraphDetail(graphInfo: GraphInfo) {
    this.setInnerHTML(this.name, 'Graph name: ', graphInfo.name);
    this.setInnerHTML(this.type, 'Graph type: ', graphInfo.type);
    this.setInnerHTML(this.numVertex, 'Number of vertex: ', graphInfo.numVertex.toString());
    this.setInnerHTML(this.numEdge, 'Number of edge: ', graphInfo.numEdge.toString());
    this.vertexDetail.innerHTML = '';
  }

  setVertexDetail(vertexDetail: VertexDetailInterface) {
    this.vertexDetail.innerHTML += `
      <span>Vertex id: </spam>
      <p>${vertexDetail.vertexId}</p>
      <span>In-degree: </span>
      <p>${vertexDetail.vertexTo.length}</p>
      <span>Out-degree: </span>
      <p>${vertexDetail.vertexFrom.length}</p>
    `

    if (vertexDetail.vertexTo.length > 0) {
      this.vertexDetail.innerHTML += `
        <span>In-neighbours: </span>
        <ul>
          ${vertexDetail.vertexTo.map(vertex => {
            return `
              <li>
                Vertex id: ${vertex.vertexId} with value ${vertex.vertexValue} ${vertex.weight ? `and weight ${vertex.weight}` : ''}
              </li>
            `
          })}
        </ul>
      `
    }
  } 
}