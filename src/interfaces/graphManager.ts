namespace ds {
  export interface GraphManagerInterface {
    createGraph: (type: string, name: string) => void,
    displayCurrentGraph: (element: HTMLDivElement) => void,
    getCurrentGraphInfo: () => GraphInfo,
    moveNextGraph: () => boolean;
    movePrevGraph: () => boolean;
  }
}