import { CodeBlockData } from "../../Components/CodeBlockData";

const getConstructorDocumentation = (): CodeBlockData[] => {
  return [
    {
      header: 'Main Constructor for the library',
      description: 'Takes in the width and height for the canvas and dialog as parameters.  ',
      codeBody: `constructor(width: number, height: number) {}`,
      exampleCode: `const dsController = new ds.DataStructureController(800, 400);`  
    }
  ];
}

const getDialogDocumentation = (): CodeBlockData[] => {
  return [
    {
      header: 'Update the dialog',
      description: 'Takes in the vertex id and update the dialog',
      codeBody: `updateDialog(vertexId: string): void {}`,
      exampleCode: `dsController.updateDialog('1');`
    }
  ]
};

const getCanvasDocumentation = (): CodeBlockData[] => {
  return [

  ]
};

const getVertexDocumentation = (): CodeBlockData[] => {
  return [

  ]
};

const getEdgeDocumentation = (): CodeBlockData[] => {
  return [

  ]
};

const getGraphDocumentation = (): CodeBlockData[] => {
  return [

  ]
}

const getImportantTypesDocumentation = (): CodeBlockData[] => {
  return [

  ]
}




export {
  getConstructorDocumentation,
  getCanvasDocumentation,
  getDialogDocumentation,
  getVertexDocumentation,
  getEdgeDocumentation,
  getGraphDocumentation,
  getImportantTypesDocumentation
}