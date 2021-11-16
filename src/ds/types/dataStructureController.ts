namespace ds {
  export interface DataStructureControllerInterface {
    createGraph: (type: string, name: string) => void,
    getCurrentGraphInfo: () => GraphInfo,
    moveNextGraph: () => boolean,
    movePrevGraph: () => boolean,
    displayCurrentGraph: () => void,
  }
}