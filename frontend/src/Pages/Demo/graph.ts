const getCGController = (ds: any): any => {
  const dsCGC = new ds.DataStructureController(800, 400);
  dsCGC.pushVerticesToCurrentGraph([
    {_id: '1', value: 'First Vertex', x: 50, y: 50},
    {_id: '2', value: 'Second Vertex', x: 200, y: 300},
    {_id: '3', value: 'Third Vertex', x: 300, y: 200},
    {_id: '4', value: 'Fourth Vertex', x: 500, y: 200},
    {_id: '5', value: 'Fifth Vertex', x: 750, y: 50},
    {_id: '6', value: 'Sixth Vertex', x: 460, y: 350},
    {_id: '7', value: 'Seventh Vertex', x: 1600, y: 350}
  ]);
  dsCGC.pushEdgesToCurrentGraph([
    {vertexTo: '4', vertexFrom: '5', weight: 43},
    {vertexTo: '3', vertexFrom: '5', weight: 21},
    {vertexTo: '1', vertexFrom: '3', weight: 24},
    {vertexTo: '2', vertexFrom: '1', weight: 2},
    {vertexTo: '4', vertexFrom: '3', weight: 10},
    {vertexTo: '1', vertexFrom: '2', weight: 0},
    {vertexTo: '3', vertexFrom: '6', weight: -20},
    {vertexTo: '6', vertexFrom: '4'},
    {vertexTo: '5', vertexFrom: '6'}
  ]);
  dsCGC.createGraph('undirected', 'Undirected Graph', [
    {_id: '1', value: 'New First Vertex', x: 200, y: 100},
    {_id: '2', value: 'New Second Vertex', x: 100, y: 200}
  ], [
    {vertexTo: '1', vertexFrom: '2'}
  ]);
  dsCGC.setDialogWidth(250);
  dsCGC.setDialogHeight(400);
  dsCGC.showDialog();
  dsCGC.updateCurrentGraphName('Directed Graph');
  return dsCGC;
}

const getCGControllerToString = (): string => {
  return `
    const dsCGC = new ds.DataStructureController(800, 400);
    dsCGC.pushVerticesToCurrentGraph([
      {_id: '1', value: 'First Vertex', x: 50, y: 50},
      {_id: '2', value: 'Second Vertex', x: 200, y: 300},
      {_id: '3', value: 'Third Vertex', x: 300, y: 200},
      {_id: '4', value: 'Fourth Vertex', x: 500, y: 200},
      {_id: '5', value: 'Fifth Vertex', x: 750, y: 50},
      {_id: '6', value: 'Sixth Vertex', x: 460, y: 350},
      {_id: '7', value: 'Seventh Vertex', x: 1600, y: 350}
    ]);
    dsCGC.pushEdgesToCurrentGraph([
      {vertexTo: '4', vertexFrom: '5', weight: 43},
      {vertexTo: '3', vertexFrom: '5', weight: 21},
      {vertexTo: '1', vertexFrom: '3', weight: 24},
      {vertexTo: '2', vertexFrom: '1', weight: 2},
      {vertexTo: '4', vertexFrom: '3', weight: 10},
      {vertexTo: '1', vertexFrom: '2', weight: 0},
      {vertexTo: '3', vertexFrom: '6', weight: -20},
      {vertexTo: '6', vertexFrom: '4'},
      {vertexTo: '5', vertexFrom: '6'}
    ]);
    dsCGC.createGraph('undirected', 'Undirected Graph', [
      {_id: '1', value: 'New First Vertex', x: 200, y: 100},
      {_id: '2', value: 'New Second Vertex', x: 100, y: 200}
    ], [
      {vertexTo: '1', vertexFrom: '2'}
    ]);
    dsCGC.setDialogWidth(250);
    dsCGC.setDialogHeight(400);
    dsCGC.showDialog();
    dsCGC.updateCurrentGraphName('Directed Graph');
  
    // Insert into the dom
    const target = document.getElementById('target');
    target.insertAdjacentElement('beforeend', dsCGC.getCanvasElement());
    target.insertAdjacentElement('beforeend', dsCGC.getDialogElement());
  `
};

const getVCController = (ds: any): any => {
  const dsVCC = new ds.DataStructureController(800, 400);
  dsVCC.pushVerticesToCurrentGraph([
    {_id: '1', value: 'Drag Me', x: 50, y: 50, config: {draggable: true, backgroundImageSrc: './images/image.png'}},
    {_id: '2', value: 'Do not Click Me', x: 200, y: 300, config: {disableActiveClick: true}},
    {_id: '3', value: 'Drag Me With Image', x: 300, y: 200, config: {draggable: true, backgroundImageSrc: './images/image2.jpg', }},
    {_id: '4', value: 'FourtVertex', x: 500, y: 200, config: {backgroundImageSrc: './images/myProfile.jpg', hideText: true, style: {width: "150px", height: "150px"}, disableActiveClick: true, clickCallback: () => window.open("https://github.com/Yuuuuuu-xue")}},
    {_id: '5', value: 'Styled Vertex', x: 750, y: 50},
    {_id: '6', value: 'I am Normal', x: 460, y: 350},
    {_id: '7', value: 'I am Normal too', x: 1600, y: 350}
  ]);
  dsVCC.pushEdgesToCurrentGraph([
    {vertexTo: '4', vertexFrom: '5', weight: 43},
    {vertexTo: '3', vertexFrom: '5', weight: 21},
    {vertexTo: '1', vertexFrom: '3', weight: 24},
    {vertexTo: '2', vertexFrom: '1', weight: 2},
    {vertexTo: '4', vertexFrom: '3', weight: 10},
    {vertexTo: '1', vertexFrom: '2', weight: 0},
    {vertexTo: '3', vertexFrom: '6', weight: -20},
    {vertexTo: '6', vertexFrom: '4'},
    {vertexTo: '5', vertexFrom: '6'}
  ]);
  dsVCC.updateCurrentGraphName('Vertex Config');
  dsVCC.setDialogWidth(250);
  dsVCC.setDialogHeight(400);
  dsVCC.showDialog();
  dsVCC.updateCurrentGraphVertexConfig('5', {style: {borderColor: "crimson"}})
  return dsVCC;
}

const getVCControllerToString = (): string => {
  return `
    const dsVCC = new ds.DataStructureController(800, 400);
    dsVCC.pushVerticesToCurrentGraph([
      {_id: '1', value: 'Drag Me', x: 50, y: 50, config: {draggable: true, backgroundImageSrc: './images/image.png'}},
      {_id: '2', value: 'Do not Click Me', x: 200, y: 300, config: {disableActiveClick: true}},
      {_id: '3', value: 'Drag Me With Image', x: 300, y: 200, config: {draggable: true, backgroundImageSrc: './images/image2.jpg', }},
      {_id: '4', value: 'FourtVertex', x: 500, y: 200, config: {backgroundImageSrc: './images/myProfile.jpg', hideText: true, style: {width: "150px", height: "150px"}, disableActiveClick: true, clickCallback: () => window.open("https://github.com/Yuuuuuu-xue")}},
      {_id: '5', value: 'Styled Vertex', x: 750, y: 50},
      {_id: '6', value: 'I am Normal', x: 460, y: 350},
      {_id: '7', value: 'I am Normal too', x: 1600, y: 350}
    ]);
    dsVCC.pushEdgesToCurrentGraph([
      {vertexTo: '4', vertexFrom: '5', weight: 43},
      {vertexTo: '3', vertexFrom: '5', weight: 21},
      {vertexTo: '1', vertexFrom: '3', weight: 24},
      {vertexTo: '2', vertexFrom: '1', weight: 2},
      {vertexTo: '4', vertexFrom: '3', weight: 10},
      {vertexTo: '1', vertexFrom: '2', weight: 0},
      {vertexTo: '3', vertexFrom: '6', weight: -20},
      {vertexTo: '6', vertexFrom: '4'},
      {vertexTo: '5', vertexFrom: '6'}
    ]);
    dsVCC.updateCurrentGraphName('Vertex Config');
    dsVCC.setDialogWidth(250);
    dsVCC.setDialogHeight(400);
    dsVCC.showDialog();
    dsVCC.updateCurrentGraphVertexConfig('5', {style: {borderColor: "crimson"}})

    // Insert into the dom
    const target = document.getElementById('target');
    target.insertAdjacentElement('beforeend', dsVCC.getCanvasElement());
    target.insertAdjacentElement('beforeend', dsVCC.getDialogElement());
  `
}

const getGCController = (ds: any): any => {
  const dsController = new ds.DataStructureController(800, 400);
  dsController.pushVerticesToCurrentGraph([
    {_id: '1', value: 'First Vertex', x: 50, y: 50},
    {_id: '2', value: 'Second Vertex', x: 200, y: 300},
    {_id: '3', value: 'Third Vertex', x: 300, y: 200},
    {_id: '4', value: 'Fourth Vertex', x: 500, y: 200},
    {_id: '5', value: 'Fifth Vertex', x: 750, y: 50},
    {_id: '6', value: 'Sixth Vertex', x: 460, y: 350},
    {_id: '7', value: 'Seventh Vertex', x: 1600, y: 350}
  ]);
  dsController.pushEdgesToCurrentGraph([
    {vertexTo: '4', vertexFrom: '5', weight: 43},
    {vertexTo: '3', vertexFrom: '5', weight: 21},
    {vertexTo: '1', vertexFrom: '3', weight: 24},
    {vertexTo: '2', vertexFrom: '1', weight: 2},
    {vertexTo: '4', vertexFrom: '3', weight: 10},
    {vertexTo: '1', vertexFrom: '2', weight: 0},
    {vertexTo: '3', vertexFrom: '6', weight: -20},
    {vertexTo: '6', vertexFrom: '4'},
    {vertexTo: '5', vertexFrom: '6'}
  ]);
  dsController.updateCurrentGraphName('Traversable Graph');
  dsController.setDialogWidth(250);
  dsController.setDialogHeight(400);
  dsController.showDialog();
  dsController.updateCurrentGraphConfig({ mode: 'traversable', enableWeight: true })
  dsController.createGraph('directed', 'Clickable Graph', dsController.getCurrentGraphVertexInput(), dsController.getCurrentGraphEdgeInput(), {mode: 'clickable'})
  dsController.createGraph('directed', 'Non-Clickable Graph', dsController.getCurrentGraphVertexInput(), dsController.getCurrentGraphEdgeInput(), {mode: 'non-clickable'})
  return dsController;
}

const getGCControllerToString = (): string => {
  return `
    const dsController = new ds.DataStructureController(800, 400);
    dsController.pushVerticesToCurrentGraph([
      {_id: '1', value: 'First Vertex', x: 50, y: 50},
      {_id: '2', value: 'Second Vertex', x: 200, y: 300},
      {_id: '3', value: 'Third Vertex', x: 300, y: 200},
      {_id: '4', value: 'Fourth Vertex', x: 500, y: 200},
      {_id: '5', value: 'Fifth Vertex', x: 750, y: 50},
      {_id: '6', value: 'Sixth Vertex', x: 460, y: 350},
      {_id: '7', value: 'Seventh Vertex', x: 1600, y: 350}
    ]);
    dsController.pushEdgesToCurrentGraph([
      {vertexTo: '4', vertexFrom: '5', weight: 43},
      {vertexTo: '3', vertexFrom: '5', weight: 21},
      {vertexTo: '1', vertexFrom: '3', weight: 24},
      {vertexTo: '2', vertexFrom: '1', weight: 2},
      {vertexTo: '4', vertexFrom: '3', weight: 10},
      {vertexTo: '1', vertexFrom: '2', weight: 0},
      {vertexTo: '3', vertexFrom: '6', weight: -20},
      {vertexTo: '6', vertexFrom: '4'},
      {vertexTo: '5', vertexFrom: '6'}
    ]);
    dsController.updateCurrentGraphName('Traversable Graph');
    dsController.setDialogWidth(250);
    dsController.setDialogHeight(400);
    dsController.showDialog();
    dsController.updateCurrentGraphConfig({ mode: 'traversable', enableWeight: true })
    dsController.createGraph('directed', 'Clickable Graph', dsController.getCurrentGraphVertexInput(), dsController.getCurrentGraphEdgeInput(), {mode: 'clickable'})
    dsController.createGraph('directed', 'Non-Clickable Graph', dsController.getCurrentGraphVertexInput(), dsController.getCurrentGraphEdgeInput(), {mode: 'non-clickable'})

    // Insert into the dom
    const target = document.getElementById('target');
    target.insertAdjacentElement('beforeend', dsController.getCanvasElement());
    target.insertAdjacentElement('beforeend', dsController.getDialogElement());
  `
}

const getTGController = (ds: any): any => {
  const dsController = new ds.DataStructureController(800, 400);
  dsController.pushVerticesToCurrentGraph([
    {_id: '1', value: 'First Vertex', x: 50, y: 50},
    {_id: '2', value: 'Second Vertex', x: 200, y: 300},
    {_id: '3', value: 'Third Vertex', x: 300, y: 200},
    {_id: '4', value: 'Fourth Vertex', x: 500, y: 200},
    {_id: '5', value: 'Fifth Vertex', x: 750, y: 50},
    {_id: '6', value: 'Sixth Vertex', x: 460, y: 350},
    {_id: '7', value: 'Seventh Vertex', x: 1600, y: 350}
  ]);
  dsController.pushEdgesToCurrentGraph([
    {vertexTo: '4', vertexFrom: '5', weight: 43},
    {vertexTo: '3', vertexFrom: '5', weight: 21},
    {vertexTo: '1', vertexFrom: '3', weight: 24},
    {vertexTo: '2', vertexFrom: '1', weight: 2},
    {vertexTo: '4', vertexFrom: '3', weight: 10},
    {vertexTo: '1', vertexFrom: '2', weight: 0},
    {vertexTo: '3', vertexFrom: '6', weight: -20},
    {vertexTo: '6', vertexFrom: '4'},
    {vertexTo: '5', vertexFrom: '6'}
  ]);
  dsController.updateCurrentGraphName('Traversable Graph (Disabled Weight)');
  dsController.setDialogWidth(250);
  dsController.setDialogHeight(400);
  dsController.showDialog();
  dsController.updateCurrentGraphConfig({ mode: 'traversable', enableWeight: false })
  dsController.createGraph('directed', 'No Repeated Vertex', dsController.getCurrentGraphVertexInput(), dsController.getCurrentGraphEdgeInput(), 
    {mode: 'traversable', enableWeight: true, disallowRepeatedVertex: true})
  dsController.createGraph('directed', 'No Repeated Edge', dsController.getCurrentGraphVertexInput(), dsController.getCurrentGraphEdgeInput(), 
    {mode: 'traversable', enableWeight: true, disallowRepeatedEdge: true})
  dsController.createGraph('directed', 'No Repeated Vertex and Edge', dsController.getCurrentGraphVertexInput(), dsController.getCurrentGraphEdgeInput(), 
    {mode: 'traversable', enableWeight: true, disallowRepeatedVertex: true, disallowRepeatedEdge: true})
  return dsController;
};

const getTGControllerToString = (): string => {
  return `
    const dsController = new ds.DataStructureController(800, 400);
    dsController.pushVerticesToCurrentGraph([
      {_id: '1', value: 'First Vertex', x: 50, y: 50},
      {_id: '2', value: 'Second Vertex', x: 200, y: 300},
      {_id: '3', value: 'Third Vertex', x: 300, y: 200},
      {_id: '4', value: 'Fourth Vertex', x: 500, y: 200},
      {_id: '5', value: 'Fifth Vertex', x: 750, y: 50},
      {_id: '6', value: 'Sixth Vertex', x: 460, y: 350},
      {_id: '7', value: 'Seventh Vertex', x: 1600, y: 350}
    ]);
    dsController.pushEdgesToCurrentGraph([
      {vertexTo: '4', vertexFrom: '5', weight: 43},
      {vertexTo: '3', vertexFrom: '5', weight: 21},
      {vertexTo: '1', vertexFrom: '3', weight: 24},
      {vertexTo: '2', vertexFrom: '1', weight: 2},
      {vertexTo: '4', vertexFrom: '3', weight: 10},
      {vertexTo: '1', vertexFrom: '2', weight: 0},
      {vertexTo: '3', vertexFrom: '6', weight: -20},
      {vertexTo: '6', vertexFrom: '4'},
      {vertexTo: '5', vertexFrom: '6'}
    ]);
    dsController.updateCurrentGraphName('Traversable Graph (Disabled Weight)');
    dsController.setDialogWidth(250);
    dsController.setDialogHeight(400);
    dsController.showDialog();
    dsController.updateCurrentGraphConfig({ mode: 'traversable', enableWeight: false })
    dsController.createGraph('directed', 'No Repeated Vertex', dsController.getCurrentGraphVertexInput(), dsController.getCurrentGraphEdgeInput(), 
      {mode: 'traversable', enableWeight: true, disallowRepeatedVertex: true})
    dsController.createGraph('directed', 'No Repeated Edge', dsController.getCurrentGraphVertexInput(), dsController.getCurrentGraphEdgeInput(), 
      {mode: 'traversable', enableWeight: true, disallowRepeatedEdge: true})
    dsController.createGraph('directed', 'No Repeated Vertex and Edge', dsController.getCurrentGraphVertexInput(), dsController.getCurrentGraphEdgeInput(), 
      {mode: 'traversable', enableWeight: true, disallowRepeatedVertex: true, disallowRepeatedEdge: true})


    // Insert into the dom
    const target = document.getElementById('target');
    target.insertAdjacentElement('beforeend', dsController.getCanvasElement());
    target.insertAdjacentElement('beforeend', dsController.getDialogElement());
  `
};

export {
  getCGController,
  getCGControllerToString,
  getVCController,
  getVCControllerToString,
  getGCController,
  getGCControllerToString,
  getTGController,
  getTGControllerToString
};