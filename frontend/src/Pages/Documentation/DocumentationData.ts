import { CodeBlockData } from "../../Components/CodeBlockData";

const getConstructorDocumentation = (): CodeBlockData[] => {
  return [
    {
      header: 'Main Constructor for the library',
      description: 'Takes in the width and height (in px) for the canvas and dialog as parameters.',
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
    },
    {
      header: 'Clear the vertex info dialog',
      description: 'Clear the vertex info (i.e. when user clicks on vertex on clickable mode graph and see the info of clicked vertex such as in-neighbours and out-neighbours)',
      codeBody: `clearVertexDialog(): void {}`,
      exampleCode: `dsController.clearVertexDialog();`
    },
    {
      header: `Clear the edge info dialog`,
      description: `Clear the edge info (i.e. when user clicks on vertex on traversable mode graph and see the info of traversed path)`,
      codeBody: `clearEdgeDialog(): void {}`,
      exampleCode: `dsController.clearEdgeDialog();`
    },
    {
      header: 'Set the dialog width',
      description: 'Takes in one parameter represents the width of the dialog in px. Raise an error if width is <= 0.',
      codeBody: `setDialogWidth(width: number) {}`,
      exampleCode: `dsController.setDialogWidth(400);`
    }, 
    {
      header: 'Set the dialog height',
      description: 'Takes in one parameter represents the height of the canvas in px. Raise an error if height is <= 0.',
      codeBody: `setDialogHeight(height: number) {}`,
      exampleCode: `dsController.setDialogHeight(400);`
    },
    { 
      header: 'Get the dialog element',
      description: 'Return the root of dialog element of type HTMLDivElement.',
      codeBody: `getDialogElement(): HTMLDivElement {}`
    },
    {
      header: 'Show the dialog',
      description: 'By calling this method, the end-user is able to see the dialog. Default is hide the dialog.',
      codeBody: `showDialog(): void {}`
    },
    {
      header: 'Hide the dialog',
      description: 'By calling this method, the end-user is not able to see the dialog.',
      codeBody: `hideDialog(): void {}`
    }
  ]
};

const getCanvasDocumentation = (): CodeBlockData[] => {
  return [
    {
      header: 'Set the canvas width',
      description: 'Takes in one parameter represents the width of the canvas in px. Raise an error if width is <= 0.',
      codeBody: `setCanvasWidth(width: number) {}`,
      exampleCode: `dsController.setCanvasWidth(400);`
    }, 
    {
      header: 'Set the canvas height',
      description: 'Takes in one parameter represents the height of the canvas in px. Raise an error if height is <= 0.',
      codeBody: `setCanvasHeight(height: number) {}`,
      exampleCode: `dsController.setCanvasHeight(400);`
    },
    {
      header: 'Get the canvas element',
      description: 'Return the root of canvas element of type HTMLDivElement',
      codeBody: `getCanvasElement(): HTMLDivElement {}`,
    }
  ]
};

const getVertexDocumentation = (): CodeBlockData[] => {
  return [
    {
      header: 'Push a new vertex to current graph',
      description: `Takes five parameter. The first parameter has the type string and represents vertex id. The second parameter has the type any and represents the vertex value. 
      The third parameter is the x-position of this vertex on the canvas. The fourth parameter is the y-position of this vertex on the canvas. The fifth parameter is the vertex configuration. 
      Raise an error if the current graph already has this vertex id, violates it's uniqueness constraint.`, 
      codeBody: `pushVertexToCurrentGraph(_id: string, value: any, x: number, y: number, config: VertexConfig = {}): void {}`,
      exampleCode: `dsController.pushVertexToCurrentGraph('1', 'Hello World', 50, 50, {draggable: true});`
    },
    { 
      header: 'Push a vertex to a graph',
      description: `The first parameter is a number i which represents the index of the graphs that we want to push a vertex to. Other parameters are same as "pushVertexToCurrentGraph".
      Raise an error if this number i is invalid (i.e. < 0 or > length of graphs)`,
      codeBody: `pushVertexToGraph(i: number, _id: string, value: any, x: number, y: number, config: VertexConfig = {}): void {}`,
      exampleCode: `dsController.pushVertexToGraph(0, '1', 'Hello World', 50, 50, {draggable: true});`
    },
    {
      header: 'Push vertices to current graph',
      description: `Takes one parameter which has a list of VertexInput type. Represents a list of input vertex. Raise an error if any of the vertex violates the uniqueness constraint.`,
      codeBody: `pushVerticesToCurrentGraph(vertices: VertexInput[]): void {}`,
      exampleCode: `dsController.pushVerticesToCurrentGraph([{_id: '1', value: 'First Vertex', x: 50, y: 50}, {_id: '2', value: 'First Vertex', x: 200, y: 200}]);`
    },
    {
      header: 'Push vertices to a graph',
      description: `The first parametrer is a number i which represents the index of the graph. Other parameters are same as "pushVerticesToCurrentGraph".
      Raise an error if this number i is invalid (i.e. < 0 or > length of graphs)`, 
      codeBody: `pushVerticesToGraph(i: number, vertices: VertexInput[]): void {}`,
      exampleCode: `dsController.pushVerticesToGraph(0, [{_id: '1', value: 'First Vertex', x: 50, y: 50}, {_id: '2', value: 'First Vertex', x: 200, y: 200}]);`
    },
    {
      header: 'Remove vertex from current graph',
      description: 'Takes in a parameter that represents the vertex id and remove this vertex from current graph. Raise an error if no vertices has this id.',
      codeBody: `removeVertexFromCurrentGraph(_id: string): void {}`,
      exampleCode: `dsController.removeVertexFromCurrentGraph('1');`
    },
    {
      header: 'Remove vertex from a graph',
      description: `The first parametrer is a number i which represents the index of the graph. Other parameters are same as "removeVertexFromCurrentGraph".
      Raise an error if this number i is invalid (i.e. < 0 or > length of graphs)`, 
      codeBody: `removeVertexFromGraph(i: number, _id: string): void {}`,
      exampleCode: `dsController.removeVertexFromGraph(0, '1');`
    },
    {
      header: 'Update a vertex value from current graph',
      description: 'Takes in two parameters. First parameter has a type string which represents the vertex id. The second parameter has a type any which represents the new vertex value.',
      codeBody: `updateCurrentGraphVertexValue(_id: string, value: any): void {}`,
      exampleCode: `dsController.updateCurrentGraphVertexValue('0', 'New Value');`
    },
    {
      header: 'Update a vertex value from a graph',
      description: `The first parametrer is a number i which represents the index of the graph. Other parameters are same as "updateCurrentGraphVertexValue".
      Raise an error if this number i is invalid (i.e. < 0 or > length of graphs)`, 
      codeBody: `updateGraphVertexValue(i: number, _id: string, value: any): void {`,
      exampleCode: `dsController.updateGraphVertexValue(0, '0', 'New Value');`
    }, 
    {
      header: 'Update a vertex position from current graph',
      description: 'Takes in three parameters. First parameter has a type string which represents the vertex id. The second parameter and third parameter have a type number and represent the x and y position.',
      codeBody: `updateCurrentGraphVertexPosition(_id: string, x: number, y: number): void {}`,
      exampleCode: `dsController.updateCurrentGraphVertexPosition('0', 50, 50);`
    },
    {
      header: 'Update a vertex position from a graph',
      description: `The first parametrer is a number i which represents the index of the graph. Other parameters are same as "updateCurrentGraphVertexPosition".
      Raise an error if this number i is invalid (i.e. < 0 or > length of graphs)`, 
      codeBody: `updateGraphVertexPosition(i: number, _id: string, x: number, y: number): void {}`,
      exampleCode: `dsController.updateGraphVertexPosition(0, '0', 50, 50);`
    }, 
    {
      header: 'Update a vertex config from current graph',
      description: `Takes in two parameters. First parameter has a type string which represents the vertex id. The second parameter has a type VertexConfig which represents the vertex config`,
      codeBody: `updateCurrentGraphVertexConfig(_id: string, config: VertexConfig) {}`,
      exampleCode: `dsController.updateCurrentGraphVertexConfig('0', {draggable: true});`
    },
    { 
      header: 'Update a vertex from a graph',
      description: `The first parametrer is a number i which represents the index of the graph. Other parameters are same as "updateCurrentGraphVertexConfig".
      Raise an error if this number i is invalid (i.e. < 0 or > length of graphs)`, 
      codeBody: `updateGraphVertexConfig(i: number, _id: string, config: VertexConfig) {}`,
      exampleCode: `dsController.updateGraphVertexConfig(0, '0', {draggable: true})`
    }, 
    {
      header: 'Get current graph vertex input',
      description: 'Get vertices as VertexInput format from current graph',
      codeBody: `getCurrentGraphVertexInput(): VertexInput[] {}`,
    },
    {
      header: 'Get vertex input from a graph',
      description: `The first parametrer is a number i which represents the index of the graph. Other parameters are same as "getCurrentGraphVertexInput".
      Raise an error if this number i is invalid (i.e. < 0 or > length of graphs)`, 
      codeBody: `getGraphVertexInput(i: number): VertexInput[] {}`
    }
  ]
};

const getEdgeDocumentation = (): CodeBlockData[] => {
  return [
    {
      header: 'Push a new edge to current graph',
      description: `Takes three parameter. The first two parameters represent the vertex id of an edge (vertexTo, vertexFrom). The third parameter has type optional number and represents the weight of this edge. 
      If no weight specified, then this edge has implict weight of value 1. Raise an error if this edge violates the uniqueness constraint.`,
      codeBody: `pushEdgeToCurrentGraph(vertexTo: string, vertexFrom: string, weight ?: number): void {}`,
      exampleCode: `dsController.pushEdgeToCurrentGraph('1', '2', -3);`
    },
    {
      header: 'Push a new edge to a graph',
      description: `The first parameter is a number i which represents the index of the graphs that we want to push a edge to. Other parameters are same as "pushEdgeToCurrentGraph".
      Raise an error if this number i is invalid (i.e. < 0 or > length of graphs)`,
      codeBody: `pushEdgeToGraph(i: number, vertexTo: string, vertexFrom: string, weight ?: number): void {}`,
      exampleCode: `dsController.pushEdgeToGraph(0, '1', '2', -3);`
    },
    {
      header: 'Push edges to current graph',
      description: 'Takes one parameter which has a list of EdgeInput type. Represents a list of input edge. Raise an error if any of the edge violates the uniqueness constraint.',
      codeBody: `pushEdgesToCurrentGraph(edges: EdgeInput[]): void {}`,
      exampleCode: `dsController.pushEdgesToCurrentGraph([{vertexTo: '1', vertexFrom: '2', weight: 43}]);`
    },
    {
      header: 'Push edges to a graph',
      description: `The first parametrer is a number i which represents the index of the graph. Other parameters are same as "pushEdgesToCurrentGraph".
      Raise an error if this number i is invalid (i.e. < 0 or > length of graphs)`, 
      codeBody: `pushEdgesToGraph(i: number, edges: EdgeInput[]): void {}`,
      exampleCode: `dsController.pushEdgesToGraph(0, [{vertexTo: '1', vertexFrom: '2', weight: 43}]);`
    },
    {
      header: 'Remove an edge from current graph',
      description: `Takes two parameters that represent the vertex id. Remove the edge (vertexTo, vertexFrom). Raise an error if no such edge.`,
      codeBody: `removeEdgeFromCurrentGraph(vertexTo: string, vertexFrom: string): void {}`,
      exampleCode: `dsController.removeEdgeFromCurrentGraph('1', '2');`
    },
    {
      header: 'Remove an edge from a graph', 
      description: `The first parametrer is a number i which represents the index of the graph. Other parameters are same as "removeEdgeFromCurrentGraph".
      Raise an error if this number i is invalid (i.e. < 0 or > length of graphs)`, 
      codeBody: `removeEdgeFromGraph(i: number, vertexTo: string, vertexFrom: string): void {}`,
      exampleCode: `dsController.removeEdgeFromCurrentGraph(0, '1', '2');`
    },
    {
      header: 'Get edge input from current graph',
      description: 'Get all edges as EdgeInput format from current graph',
      codeBody: `getCurrentGraphEdgeInput(): EdgeInput[] {}`
    }, 
    {
      header: 'Get edge input from a graph',
      description: `The first parametrer is a number i which represents the index of the graph. Other parameters are same as "getCurrentGraphEdgeInput".
      Raise an error if this number i is invalid (i.e. < 0 or > length of graphs)`,
      codeBody: `getGraphEdgeInput(i: number): EdgeInput[] {}`
    }
  ]
};

const getGraphDocumentation = (): CodeBlockData[] => {
  return [
    {
      header: 'Create a new graph',
      description: `Takes in 5 parameters. First parameter type is string, represents the type of the graph. Raise an error if type is not "directed" or "undirected". 
        The second parameter type is string, represents the graph name. The third parameter type is VertexInput[], represents the vertices for this graph. 
        The fourth parameter type is EdgeInput[], represents the edges for this graph. The fifth parameter type is GraphConfig, represents the configuration of the graph. 
        The default value is {mode: 'clickable'}. Raise error if not valid vertices or edges. For instance, repeated vertices id or repeated edges.
      `,
      codeBody: `createGraph(type: string, name: string, vertices: VertexInput[] = [], edges: EdgeInput[] = [], config: GraphConfig={mode: 'clickable'}): void {}`,
      exampleCode: `dsController.createGraph('directed', 'New Graph', 
        [{_id: '1', value: 'First Vertex', x: 50, y: 50}, {_id: '2', value: 'First Vertex', x: 200, y: 200}],
        [{vertexTo: '1', vertexFrom: '2', weight: 43}]);`
    },
    { 
      header: 'Get current graph info',
      description: `Return an instance of GraphInfo, represents the current graph info.`,
      codeBody: `getCurrentGraphInfo(): GraphInfo {}`,
      exampleCode: `dsController.getCurrentGraphInfo();`
    },
    {
      header: 'Get number of graphs',
      description: `Return the number of graphs.`,
      codeBody: `getNumberOfGraphs(): number {}`
    },
    {
      header: 'Update current graph',
      description: 'Update the canvas and dialog with current graph index. Similar to how you refresh the page.',
      codeBody: `updateCurrentGraph(): void {}`
    },
    { 
      header: 'Move to next graph',
      description: 'Move to the next graph. Update the canvas and dialog. Raise an error if there is no next graph.',
      codeBody: `moveNextGraph(): void {}`
    },
    {
      header: 'Move to previous graph',
      description: 'Move to the previous graph. Update the canvas and dialog. Raise an error if there is no previous graph.',
      codeBody: `movePrevGraph(): void {}`
    },
    {
      header: 'Remove current graph',
      codeBody: `removeCurrentGraph(): void {}`
    },
    {
      header: 'Remove a graph',
      description: `The first parametrer is a number i which represents the index of the graph. Other parameters are same as "removeCurrentGraph".
      Raise an error if this number i is invalid (i.e. < 0 or > length of graphs)`, 
      codeBody: `removeGraph(i: number): void {}`
    }, 
    {
      header: 'Update current graph name',
      description: 'Takes in one parameter that has type string and represents the new graph name',
      codeBody: `updateCurrentGraphName(name: string): void {}`,
      exampleCode: `dsController.updateCurrentGraphName('New Name');`
    },
    {
      header: 'Update name of a graph',
      description: `The first parametrer is a number i which represents the index of the graph. Other parameters are same as "updateCurrentGraphName".
      Raise an error if this number i is invalid (i.e. < 0 or > length of graphs)`, 
      codeBody: `updateGraphName(i: number, name: string): void {}`,
      exampleCode: `dsController.updateGraphName(0, 'New Name');`
    },
    {
      header: 'Update the current graph type',
      description: `Takes in one parameter that has type string and represents the new graph name. Raise an error if it is neither 'directed' nor 'undirected'.`,
      codeBody: `updateCurrentGraphType(type: string): void {}`,
      exampleCode: `dsController.updateCurrentGraphType('directed');`
    },
    {
      header: 'Update the type from a graph',
      description: `The first parametrer is a number i which represents the index of the graph. Other parameters are same as "updateCurrentGraphType".
      Raise an error if this number i is invalid (i.e. < 0 or > length of graphs)`,
      codeBody: `updateGraphType(i: number, type: string): void {}`,
      exampleCode: `dsController.updateGraphType(0, 'directed')`
    },
    {
      header: 'Update current graph config',
      description: 'Takes one parameter that has the type GraphConfig and represents the configuration of the graph',
      codeBody: `updateCurrentGraphConfig(config: GraphConfig): void {}`,
      exampleCode: `dsController.updateCurrentGraphConfig({mode: 'traversable', enableWeight: true})`
    }, 
    {
      header: 'Update graph config from a graph',
      description: `The first parametrer is a number i which represents the index of the graph. Other parameters are same as "updateCurrentGraphConfig".
      Raise an error if this number i is invalid (i.e. < 0 or > length of graphs)`,
      codeBody: `updateGraphConfig(i: number, config: GraphConfig): void {}`,
      exampleCode: `dsController.updateGraphConfig(0, {mode: 'traversable', enableWeight: true})`
    }
  ]
}

const getImportantTypesDocumentation = (): CodeBlockData[] => {
  return [
    {
      header: 'VertexInput',
      description: 'The type for the vertex input.',
      codeBody: 
      `interface VertexInput {
  _id: string,  // Vertex id
  value: any,  // Value of the vertex
  x: number,  // Position in the canvas, in px
  y: number,  // Position in the canvas, in px
  config: VertexConfig  // The configuration of the vertex
}`
    },
    {
      header: 'VertexConfig',
      description: 'The type for the configuration of a vertex.',
      codeBody:
      `interface VertexConfig { 
  draggable?: boolean,  // true iff we can drag the vertex
  backgroundImageSrc?: string  // The background image source
  hideText?: boolean  // true iff we want to hide the vertex value in the vertex itself
  style?: Style  // Style object, the style we want to override for this vertex
  disableActiveClick?: boolean  // true iff we want to disable user to click on the vertex
  clickCallback?: () => void  // callback function when user clicks on the vertex
}
      `,
    },
    {
      header: 'Style',
      description: 'The type used when user wants to override the style.',
      codeBody: `type Style = Partial<CSSStyleDeclaration>;`
    },
    {
      header: 'EdgeInput',
      description: 'The type for the edge input.',
      codeBody: 
      `interface EdgeInput {
  vertexTo: string,  // Vertex id of an edge (vertexTo, vertexFrom)
  vertexFrom: string,  // Vertex id of an edge (vertexTo, VertexFrom)
  weight ?: number  // The weight of the edge
}
      `
    },
    {
      header: 'GraphInfo',
      description: 'The type for the current graph info.',
      codeBody: 
      `interface GraphInfo {
  name: string,  // The name of the graph
  type: GraphType  // The type of the graph
  numVertex: number,  // Number of vertices of this graph
  vertices: string[],  // Vertex ids of this graph
  numEdge: number,  // Number of edges of this graph
  edges: Edge[]  // Edges of this graph
}`
    },
    {
      header: 'GraphType',
      description: 'The type of a graph can have.',
      codeBody: `type GraphType = 'directed' | 'undirected';`
    },
    {
      header: 'Edge',
      description: 'The info of an edge',
      codeBody: 
      `interface Edge {
  vertexTo: string,  // Vertex id of an edge (vertexTo, vertexFrom)
  vertexFrom: string,  // Vertex id of an edge (vertexTo, VertexFrom)
  weight?: number  // The weight of the edge
}
`
    },
    {
      header: 'GraphConfig',
      description: 'The configuration of the graph',
      codeBody: 
      `interface GraphConfig {
  mode: Mode,  // The graph modde
  // all other config are used when mode === 'traverse'
  enableWeight?: boolean,  // true iff we want to show the weight in the dialog
  disallowRepeatedVertex?: boolean,  // true iff no repeated vertices are allowed on traversed path
  disallowRepeatedEdge?: boolean  // true iff no repeated edges are allowed on traversed path
}
      `
    },
    {
      header: 'Mode',
      description: `The game mode. Non-clickable means the vertices are non-clickable. Clickable means the when user clicks on a vertex, canvas will highlight the cliked vertex and incident edges and dialog will show the info.
      Traversable means when user can click vertices to traverse the graph.
      `,
      codeBody: `type Mode = "non-clickable" | "clickable" | "traversable"`
    }
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