namespace ds {
  export interface GraphManagerInterface {
    createGraph: (type: string, name: string) => void,
    getCurrentGraph: () => Graph,
    getCurrentGraphInfo: () => GraphInfo,
    moveNextGraph: () => boolean;
    movePrevGraph: () => boolean;
  }
}