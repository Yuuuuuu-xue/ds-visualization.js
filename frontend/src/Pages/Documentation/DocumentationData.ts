import { CodeBlockData } from "../../Components/CodeBlockData";

const getConstructorDocumentation = (): CodeBlockData[] => {
  return [
    {
      header: 'Main Constructor for the library',
      description: 'Takes in the width and height for the canvas and dialog as parameters.  ',
      codeBody: `constructor(width: number, height: number) {}`,
      exampleDescription: 'Example:',
      exampleCode: `const dsController = new ds.DataStructureController(800, 400);`  
    }
  ];
}

export {
  getConstructorDocumentation
}