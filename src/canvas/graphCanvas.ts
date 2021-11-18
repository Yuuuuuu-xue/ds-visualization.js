import { canvasStyle } from "../ds/styles/canvas.style";
import { GraphCanvasInterface } from "./types/graphCanvasInterface";
import { VertexCanvas } from "./vertexCanvas";

export class GraphCanvas implements GraphCanvasInterface {
    vertices: VertexCanvas[];
    display: boolean;
    graphElement: HTMLDivElement;

    constructor() {
        this.vertices = [];
        this.display = false;
        this.graphElement = document.createElement('div');
        this.graphElement.classList.add('graph');
        this.graphElement.classList.add('hidden');
    }

    handleVertexClick(newVertex: VertexCanvas): void {
        this.vertices.forEach(v => {
            v.setInactive();
        })
        newVertex.handleClick();
    }

    pushVertex(vertexId: string, x: number, y: number, value: any): void {
        const newVertex = new VertexCanvas(x, y, vertexId, value);
        newVertex.getVertexElement().addEventListener('click', () => this.handleVertexClick(newVertex));
        this.vertices.push(newVertex);
        this.graphElement.insertAdjacentElement('beforeend', newVertex.getVertexElement());
    }

    getGraphElement(): HTMLDivElement {
        return this.graphElement;
    }

    displayGraph(): void {
        this.display = true;
        this.graphElement.classList.remove('hidden');
    }

    hideGraph(): void {
        this.display = false;
        this.graphElement.classList.add('hidden');
    }
};
