import { GraphType } from "../ds/types/constantType";
import { edgeStyle } from "./styles/edge.style";
import { EdgeCanvasInterface } from "./types/edgeCanvasInterface";

export class EdgeCanvas implements EdgeCanvasInterface {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    weight?: number;
    vertexToId: string;
    vertexFromId: string
    isActive: boolean;
    edgeElement: HTMLDivElement;

    private getLength(): number {
        // Length between two points is sqrt ((x2 - x1)^2 + (y2 - y1)^2)
        return Math.sqrt((this.x2 - this.x1) ** 2 + (this.y2 - this.y1) ** 2)
    }

    private getMidX(): number {
        return (this.x1 + this.x2) / 2 - (this.getLength() / 2);
    }

    private getMidY(): number {
        return (this.y1 + this.y2) / 2 - 1;
    }

    private getAngle(): number {
        // in radians
        return Math.atan2((this.y2 - this.y1), (this.x2 - this.x1)) * (180 / Math.PI);
    }


    constructor(x1: number, y1: number, x2: number, y2: number, vertexFromId: string, vertexToId: string, type: GraphType, weight?: number) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.weight = weight;
        this.isActive = false;
        this.edgeElement = document.createElement('div');
        this.edgeElement.classList.add('edge');
        this.edgeElement.classList.add('inactive');
        this.edgeElement.classList.add(type);

        this.edgeElement.setAttribute('style', edgeStyle(this.getMidX(),
            this.getMidY(), this.getLength(), this.getAngle()));
        this.vertexFromId = vertexFromId;
        this.vertexToId = vertexToId;
    }

    getEdgeElement(): HTMLDivElement {
        return this.edgeElement;
    }

    setActive(): void {
        this.edgeElement.classList.remove('inactive');
        this.isActive = true;
        this.edgeElement.classList.add('active');
    }

    setInactive(): void {
        this.edgeElement.classList.remove('active');
        this.isActive = false;
        this.edgeElement.classList.add('inactive');
    }

    handleClick(): void {
        if (this.isActive) {
            this.setInactive();
        } else { 
            this.setActive();
        }
    }
}