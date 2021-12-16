import { EdgeDetailInterface } from "../../types/edgeDetailInterface";
import { GraphInfo } from "../../types/graph";
import { VertexDetailInterface, VertexInfo } from "../../types/vertexDetailInterface";

export class Dialog {
  name: HTMLDivElement;
  type: HTMLDivElement;
  numVertex: HTMLDivElement;
  numEdge: HTMLDivElement;
  vertexDetail: HTMLDivElement;
  edgeDetail: HTMLDivElement;

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
    
    this.edgeDetail = document.createElement('div');
    this.edgeDetail.classList.add('ds-dialog-edgeDetail');
    this.edgeDetail.classList.add('multiple-line');
  }

  updateName(name: string) {
    this.setInnerHTML(this.name, 'Graph name: ', name);
  }

  updateType(type: string) {
    this.setInnerHTML(this.type, 'Graph type: ', type);
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

  getElementEdgeDetail(): HTMLDivElement {
    return this.edgeDetail;
  }

  private setInnerHTML(divElement: HTMLDivElement, spanBody: string, paraBody: string) {
    divElement.innerHTML = `
      <p><span>${spanBody}</span>${paraBody}</p>
    `;
  }

  setGraphDetail(graphInfo: GraphInfo) {
    this.setInnerHTML(this.name, 'Graph name: ', graphInfo.name);
    this.setInnerHTML(this.type, 'Graph type: ', graphInfo.type);
    this.setInnerHTML(this.numVertex, 'Number of vertex: ', graphInfo.numVertex.toString());
    this.setInnerHTML(this.numEdge, 'Number of edge: ', graphInfo.numEdge.toString());
    // this.vertexDetail.innerHTML = '';
  }

  private getVertexNeighbourString(vertexDetail: VertexInfo[]): string {
    let output = '';
    vertexDetail.forEach(vertex => {
      output += `
        <li>
          Vertex id: ${vertex.vertexId} ${vertex.weight ? `and weight ${vertex.weight}` : ''}
        </li>
      `
    });
    return output;
  }

  clearVertexDetail(): void {
    this.vertexDetail.innerHTML = '';
  }

  clearEdgeDetail(): void {
    this.edgeDetail.innerHTML = '';
  }

  private getPathDetail(edgeDetail: EdgeDetailInterface[]) {
    let output = '';
    edgeDetail.forEach((e, i) => {
      output += `
        <li>
          ${i + 1}. (${e.vertexTo}, ${e.vertexFrom})
        </li>
      `
    });
    return output;
  }

  setEdgeDetail(edgeDetail: EdgeDetailInterface[]) {
    this.clearEdgeDetail();
    this.clearVertexDetail();

    this.edgeDetail.innerHTML += `
      <p class='ds-dialog-title'>Edge Info</p>
      <p class='one-line'><span>Path: </spn></p>
      <ul> 
        ${this.getPathDetail(edgeDetail)}
      </ul>
    `;
  }

  setVertexDetail(vertexDetail: VertexDetailInterface) {
    this.clearVertexDetail();
    this.clearEdgeDetail();
    
    this.vertexDetail.innerHTML += `
      <p class='ds-dialog-title'>Vertex Info</p>
      <p class='one-line'><span>Vertex id: </span>${vertexDetail.vertexId}</p>
      <p class='one-line'><span>Vertex value: </span>${vertexDetail.value}</p>
      <p class='one-line'><span>In-degree: </span>${vertexDetail.vertexTo.length}</p>
      <p class='one-line'><span>Out-degree: </span>${vertexDetail.vertexFrom.length}</p>
    `

    if (vertexDetail.vertexTo.length > 0) {
      this.vertexDetail.innerHTML += `
        <p class='one-line'><span>In-neighbours: </span></p>
        <ul>
          ${this.getVertexNeighbourString(vertexDetail.vertexTo)}
        </ul>
      `
    }

    if (vertexDetail.vertexFrom.length > 0) {
      this.vertexDetail.innerHTML += `
        <p class='one-line'><span>Out-neighbours: </span></p>
        <ul>
          ${this.getVertexNeighbourString(vertexDetail.vertexFrom)}
        </ul>
      `
    }
  } 
}