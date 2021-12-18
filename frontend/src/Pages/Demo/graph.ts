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

const getBController = (ds: any): any => {
  const dsController = new ds.DataStructureController(1200, 600);
  const vertexConfig1 = {draggable: true, style: {backgroundColor: '#45B8AC', borderColor: '#308078'}, disableActiveClick: true};
  const vertexConfig2 = {draggable: true, style: {backgroundColor: '#D65076', borderColor: '#b02950'}, disableActiveClick: true};
  dsController.pushVerticesToCurrentGraph([
    {_id: '1', value: '1', x: 100, y: 100, config: vertexConfig1},
    {_id: '2', value: '2', x: 1000, y: 100, config: vertexConfig2},
    {_id: '3', value: '3', x: 100, y: 400, config: vertexConfig2},
    {_id: '4', value: '4', x: 1000, y: 400, config: vertexConfig1},
    {_id: '5', value: '5', x: 350, y: 180, config: vertexConfig2},
    {_id: '6', value: '6', x: 750, y: 180, config: vertexConfig1},
    {_id: '7', value: '7', x: 350, y: 320, config: vertexConfig1},
    {_id: '8', value: '8', x: 750, y: 320, config: vertexConfig2}
  ]);
  dsController.updateCurrentGraphType('undirected');
  dsController.updateCurrentGraphName('Is Bilateral Graph?')
  dsController.pushEdgesToCurrentGraph([
    {vertexTo: '1', vertexFrom: '5'},
    {vertexTo: '1', vertexFrom: '3'},
    {vertexTo: '3', vertexFrom: '7'},
    {vertexTo: '5', vertexFrom: '7'},
    {vertexTo: '7', vertexFrom: '8'},
    {vertexTo: '5', vertexFrom: '6'},
    {vertexTo: '6', vertexFrom: '8'},
    {vertexTo: '6', vertexFrom: '2'},
    {vertexTo: '8', vertexFrom: '4'},
    {vertexTo: '2', vertexFrom: '4'},
    {vertexTo: '1', vertexFrom: '2'},
    {vertexTo: '3', vertexFrom: '4'}
  ])
  return dsController
};

const getBControllerToString = (): string => {
  return `
  const dsController = new ds.DataStructureController(1200, 600);
  const vertexConfig1 = {draggable: true, style: {backgroundColor: '#45B8AC', borderColor: '#308078'}, disableActiveClick: true};
  const vertexConfig2 = {draggable: true, style: {backgroundColor: '#D65076', borderColor: '#b02950'}, disableActiveClick: true};
  dsController.pushVerticesToCurrentGraph([
    {_id: '1', value: '1', x: 100, y: 100, config: vertexConfig1},
    {_id: '2', value: '2', x: 1000, y: 100, config: vertexConfig2},
    {_id: '3', value: '3', x: 100, y: 400, config: vertexConfig2},
    {_id: '4', value: '4', x: 1000, y: 400, config: vertexConfig1},
    {_id: '5', value: '5', x: 350, y: 180, config: vertexConfig2},
    {_id: '6', value: '6', x: 750, y: 180, config: vertexConfig1},
    {_id: '7', value: '7', x: 350, y: 320, config: vertexConfig1},
    {_id: '8', value: '8', x: 750, y: 320, config: vertexConfig2}
  ]);
  dsController.updateCurrentGraphType('undirected');
  dsController.updateCurrentGraphName('Is Bilateral Graph?')
  dsController.pushEdgesToCurrentGraph([
    {vertexTo: '1', vertexFrom: '5'},
    {vertexTo: '1', vertexFrom: '3'},
    {vertexTo: '3', vertexFrom: '7'},
    {vertexTo: '5', vertexFrom: '7'},
    {vertexTo: '7', vertexFrom: '8'},
    {vertexTo: '5', vertexFrom: '6'},
    {vertexTo: '6', vertexFrom: '8'},
    {vertexTo: '6', vertexFrom: '2'},
    {vertexTo: '8', vertexFrom: '4'},
    {vertexTo: '2', vertexFrom: '4'},
    {vertexTo: '1', vertexFrom: '2'},
    {vertexTo: '3', vertexFrom: '4'}
  ])

  const target = document.getElementById('target');
  target.insertAdjacentElement('beforeend', dsController.getCanvasElement());
  `
}

const getTAController = (ds: any): any => {
  const dsController = new ds.DataStructureController(1200, 600);

  dsController.updateCurrentGraphConfig({mode: 'traversable', disallowRepeatedVertex: true});
  dsController.updateCurrentGraphType('undirected');
  dsController.updateCurrentGraphName('Hamiltonian Graph')
  dsController.pushVerticesToCurrentGraph([
    {_id: '1', value: '1', x: 50, y: 50},
    {_id: '2', value: '2', x: 280, y: 420},
    {_id: '3', value: '3', x: 400, y: 200},
    {_id: '4', value: '4', x: 600, y: 100},
    {_id: '5', value: '5', x: 800, y: 200},
    {_id: '6', value: '6', x: 620, y: 400},
  ]);
  dsController.pushEdgesToCurrentGraph([
    {vertexTo: '1', vertexFrom: '2'},
    {vertexTo: '2', vertexFrom: '3'},
    {vertexTo: '3', vertexFrom: '6'},
    {vertexTo: '2', vertexFrom: '6'},
    {vertexTo: '6', vertexFrom: '5'},
    {vertexTo: '3', vertexFrom: '4'},
    {vertexTo: '4', vertexFrom: '5'}, 
    {vertexTo: '1', vertexFrom: '3'}, 
    {vertexTo: '1', vertexFrom: '4'},
    {vertexTo: '4', vertexFrom: '6'}
  ]);
  dsController.createGraph('undirected', 'Eulierian Graph', [
    {_id: '1', value: '1', x: 500, y: 100},
    {_id: '2', value: '2', x: 250, y: 250},
    {_id: '3', value: '3', x: 750, y: 250},
    {_id: '4', value: '4', x: 250, y: 450},
    {_id: '5', value: '5', x: 750, y: 450},
    {_id: '6', value: '6', x: 500, y: 350},
  ], [
    {vertexTo: '1', vertexFrom: '2'},
    {vertexTo: '2', vertexFrom: '3'},
    {vertexTo: '1', vertexFrom: '3'},
    {vertexTo: '2', vertexFrom: '4'},
    {vertexTo: '4', vertexFrom: '5'},
    {vertexTo: '3', vertexFrom: '5'},
    {vertexTo: '2', vertexFrom: '6'},
    {vertexTo: '3', vertexFrom: '6'},
    {vertexTo: '4', vertexFrom: '6'},
    {vertexTo: '5', vertexFrom: '6'}
  ], {mode: 'traversable', disallowRepeatedEdge: true})
  return dsController;
};

const getTAControllerToString = (): string => {
  return `
  const dsController = new ds.DataStructureController(1200, 600);

  dsController.updateCurrentGraphConfig({mode: 'traversable', disallowRepeatedVertex: true});
  dsController.updateCurrentGraphType('undirected');
  dsController.updateCurrentGraphName('Hamiltonian Graph')
  dsController.pushVerticesToCurrentGraph([
    {_id: '1', value: '1', x: 50, y: 50},
    {_id: '2', value: '2', x: 280, y: 420},
    {_id: '3', value: '3', x: 400, y: 200},
    {_id: '4', value: '4', x: 600, y: 100},
    {_id: '5', value: '5', x: 800, y: 200},
    {_id: '6', value: '6', x: 620, y: 400},
  ]);
  dsController.pushEdgesToCurrentGraph([
    {vertexTo: '1', vertexFrom: '2'},
    {vertexTo: '2', vertexFrom: '3'},
    {vertexTo: '3', vertexFrom: '6'},
    {vertexTo: '2', vertexFrom: '6'},
    {vertexTo: '6', vertexFrom: '5'},
    {vertexTo: '3', vertexFrom: '4'},
    {vertexTo: '4', vertexFrom: '5'}, 
    {vertexTo: '1', vertexFrom: '3'}, 
    {vertexTo: '1', vertexFrom: '4'},
    {vertexTo: '4', vertexFrom: '6'}
  ]);
  dsController.createGraph('undirected', 'Eulierian Graph', [
    {_id: '1', value: '1', x: 500, y: 100},
    {_id: '2', value: '2', x: 250, y: 250},
    {_id: '3', value: '3', x: 750, y: 250},
    {_id: '4', value: '4', x: 250, y: 450},
    {_id: '5', value: '5', x: 750, y: 450},
    {_id: '6', value: '6', x: 500, y: 350},
  ], [
    {vertexTo: '1', vertexFrom: '2'},
    {vertexTo: '2', vertexFrom: '3'},
    {vertexTo: '1', vertexFrom: '3'},
    {vertexTo: '2', vertexFrom: '4'},
    {vertexTo: '4', vertexFrom: '5'},
    {vertexTo: '3', vertexFrom: '5'},
    {vertexTo: '2', vertexFrom: '6'},
    {vertexTo: '3', vertexFrom: '6'},
    {vertexTo: '4', vertexFrom: '6'},
    {vertexTo: '5', vertexFrom: '6'}
  ], {mode: 'traversable', disallowRepeatedEdge: true});

  // Insert into the dom
  const target = document.getElementById('target');
  target.insertAdjacentElement('beforeend', dsController.getCanvasElement());
  `
}

const getSPWController = (ds: any): any => {
  const dsController = new ds.DataStructureController(800, 400);

  dsController.updateCurrentGraphConfig({mode: 'traversable', enableWeight: true});
  dsController.updateCurrentGraphName('Shortest Path Weight')
  dsController.pushVerticesToCurrentGraph([
    {_id: '1', value: 'A', x: 50, y: 200},
    {_id: '2', value: 'B', x: 150, y: 40},
    {_id: '3', value: 'C', x: 180, y: 300},
    {_id: '4', value: 'D', x: 400, y: 80},
    {_id: '5', value: 'E', x: 420, y: 280},
    {_id: '6', value: 'F', x: 550, y: 180},
  ]);
  dsController.pushEdgesToCurrentGraph([
    {vertexTo: '1', vertexFrom: '2', weight: 4},
    {vertexTo: '1', vertexFrom: '3', weight: 2},
    {vertexTo: '2', vertexFrom: '3', weight: 5},
    {vertexTo: '2', vertexFrom: '4', weight: 10},
    {vertexTo: '3', vertexFrom: '5', weight: 3},
    {vertexTo: '5', vertexFrom: '4', weight: 4},
    {vertexTo: '4', vertexFrom: '6', weight: 11}
  ]);

  dsController.setDialogWidth(250);
  dsController.setDialogHeight(400);
  dsController.showDialog();
  return dsController;
};

const getSPWControllerToString = (): string => {
  return `
  const dsController = new ds.DataStructureController(800, 400);

  dsController.updateCurrentGraphConfig({mode: 'traversable', enableWeight: true});
  dsController.updateCurrentGraphName('Shortest Path Weight')
  dsController.pushVerticesToCurrentGraph([
    {_id: '1', value: 'A', x: 50, y: 200},
    {_id: '2', value: 'B', x: 150, y: 40},
    {_id: '3', value: 'C', x: 180, y: 300},
    {_id: '4', value: 'D', x: 400, y: 80},
    {_id: '5', value: 'E', x: 420, y: 280},
    {_id: '6', value: 'F', x: 550, y: 180},
  ]);
  dsController.pushEdgesToCurrentGraph([
    {vertexTo: '1', vertexFrom: '2', weight: 4},
    {vertexTo: '1', vertexFrom: '3', weight: 2},
    {vertexTo: '2', vertexFrom: '3', weight: 5},
    {vertexTo: '2', vertexFrom: '4', weight: 10},
    {vertexTo: '3', vertexFrom: '5', weight: 3},
    {vertexTo: '5', vertexFrom: '4', weight: 4},
    {vertexTo: '4', vertexFrom: '6', weight: 11}
  ]);

  dsController.setDialogWidth(250);
  dsController.setDialogHeight(400);
  dsController.showDialog();
  
  // Insert into the dom
  const target = document.getElementById('target');
  target.insertAdjacentElement('beforeend', dsController.getCanvasElement());
  `
}

const getNVController = (ds: any): any => {
  const dsController = new ds.DataStructureController(1200, 600);
  dsController.updateCurrentGraphType('undirected');
  const vertexConfig = {disableActiveClick: true, clickCallback: () => window.open("https://github.com/Yuuuuuu-xue"), hideText: true}
  dsController.pushVerticesToCurrentGraph([
    {_id: '1', value: 'Yu 1', x: 500, y: 300, config: {...vertexConfig, backgroundImageSrc: './images/myProfile.jpg', style: {width: "150px", height: "150px", transform: 'translate(-25px, -25px)'}}},
    {_id: '2', value: 'Yu 2', x: 400, y: 150, config: {...vertexConfig, backgroundImageSrc: './images/profile1.jpeg'}},
    {_id: '3', value: 'Yu 3', x: 650, y: 120, config: {...vertexConfig, backgroundImageSrc: './images/profile2.jpeg'}},
    {_id: '4', value: 'Yu 4', x: 420, y: 440, config: {...vertexConfig, backgroundImageSrc: './images/profile3.jpeg'}},
    {_id: '5', value: 'Yu 5', x: 120, y: 420, config: {...vertexConfig, backgroundImageSrc: './images/profile4.jpeg'}},
    {_id: '6', value: 'Yu 6', x: 620, y: 510, config: {...vertexConfig, backgroundImageSrc: './images/profile5.jpeg'}},
    {_id: '7', value: 'Yu 7', x: 910, y: 400, config: {...vertexConfig, backgroundImageSrc: './images/profile6.jpeg'}},
    {_id: '8', value: 'Yu 8', x: 900, y: 150, config: {...vertexConfig, backgroundImageSrc: './images/profile7.jpeg'}},
    {_id: '9', value: 'Yu 9', x: 130, y: 130, config: {...vertexConfig, backgroundImageSrc: './images/profile8.jpeg'}},
    {_id: '10', value: 'Yu 10', x: 220, y: 310, config: {...vertexConfig, backgroundImageSrc: './images/profile9.jpeg'}}
  ]);
  dsController.pushEdgesToCurrentGraph([
    {vertexTo: '2', vertexFrom: '1'},
    {vertexTo: '3', vertexFrom: '1'},
    {vertexTo: '4', vertexFrom: '1'},
    {vertexTo: '5', vertexFrom: '1'},
    {vertexTo: '6', vertexFrom: '1'},
    {vertexTo: '7', vertexFrom: '1'},
    {vertexTo: '8', vertexFrom: '1'},
    {vertexTo: '9', vertexFrom: '1'},
    {vertexTo: '10', vertexFrom: '1'}
  ])
  dsController.updateCurrentGraphName('Today');
  dsController.createGraph('directed', 'A month ago', dsController.getCurrentGraphVertexInput(), dsController.getCurrentGraphEdgeInput());
  dsController.updateGraphType(1, 'undirected');
  dsController.removeVertexFromGraph(1, '4'); 
  dsController.removeVertexFromGraph(1, '7');
  dsController.removeVertexFromGraph(1, '9');
  dsController.updateGraphVertexConfig(1, '5', {backgroundImageSrc: './images/otherUserImg.jpg', hideText: true});

  dsController.createGraph('directed', 'A year ago', [{_id: '1', value: 'Yu 1', x: 500, y: 300, config: {...vertexConfig, backgroundImageSrc: './images/myProfile.jpg', style: {width: "150px", height: "150px", transform: 'translate(-25px, -25px)'}}}], []);

  return dsController;
};

const getNVControllerToString = (): string => {
  return `
  const dsController = new ds.DataStructureController(1200, 600);
  dsController.updateCurrentGraphType('undirected');
  const vertexConfig = {disableActiveClick: true, clickCallback: () => window.open("https://github.com/Yuuuuuu-xue"), hideText: true}
  dsController.pushVerticesToCurrentGraph([
    {_id: '1', value: 'Yu 1', x: 500, y: 300, config: {...vertexConfig, backgroundImageSrc: './images/myProfile.jpg', style: {width: "150px", height: "150px", transform: 'translate(-25px, -25px)'}}},
    {_id: '2', value: 'Yu 2', x: 400, y: 150, config: {...vertexConfig, backgroundImageSrc: './images/profile1.jpeg'}},
    {_id: '3', value: 'Yu 3', x: 650, y: 120, config: {...vertexConfig, backgroundImageSrc: './images/profile2.jpeg'}},
    {_id: '4', value: 'Yu 4', x: 420, y: 440, config: {...vertexConfig, backgroundImageSrc: './images/profile3.jpeg'}},
    {_id: '5', value: 'Yu 5', x: 120, y: 420, config: {...vertexConfig, backgroundImageSrc: './images/profile4.jpeg'}},
    {_id: '6', value: 'Yu 6', x: 620, y: 510, config: {...vertexConfig, backgroundImageSrc: './images/profile5.jpeg'}},
    {_id: '7', value: 'Yu 7', x: 910, y: 400, config: {...vertexConfig, backgroundImageSrc: './images/profile6.jpeg'}},
    {_id: '8', value: 'Yu 8', x: 900, y: 150, config: {...vertexConfig, backgroundImageSrc: './images/profile7.jpeg'}},
    {_id: '9', value: 'Yu 9', x: 130, y: 130, config: {...vertexConfig, backgroundImageSrc: './images/profile8.jpeg'}},
    {_id: '10', value: 'Yu 10', x: 220, y: 310, config: {...vertexConfig, backgroundImageSrc: './images/profile9.jpeg'}}
  ]);
  dsController.pushEdgesToCurrentGraph([
    {vertexTo: '2', vertexFrom: '1'},
    {vertexTo: '3', vertexFrom: '1'},
    {vertexTo: '4', vertexFrom: '1'},
    {vertexTo: '5', vertexFrom: '1'},
    {vertexTo: '6', vertexFrom: '1'},
    {vertexTo: '7', vertexFrom: '1'},
    {vertexTo: '8', vertexFrom: '1'},
    {vertexTo: '9', vertexFrom: '1'},
    {vertexTo: '10', vertexFrom: '1'}
  ])
  dsController.updateCurrentGraphName('Today');
  dsController.createGraph('directed', 'A month ago', dsController.getCurrentGraphVertexInput(), dsController.getCurrentGraphEdgeInput());
  dsController.updateGraphType(1, 'undirected');
  dsController.removeVertexFromGraph(1, '4'); 
  dsController.removeVertexFromGraph(1, '7');
  dsController.removeVertexFromGraph(1, '9');
  dsController.updateGraphVertexConfig(1, '5', {backgroundImageSrc: './images/otherUserImg.jpg', hideText: true});

  dsController.createGraph('directed', 'A year ago', [{_id: '1', value: 'Yu 1', x: 500, y: 300, config: {...vertexConfig, backgroundImageSrc: './images/myProfile.jpg', style: {width: "150px", height: "150px", transform: 'translate(-25px, -25px)'}}}], []);
  
  // Insert into the dom
  const target = document.getElementById('target');
  target.insertAdjacentElement('beforeend', dsController.getCanvasElement());
  `
}

export {
  getCGController,
  getCGControllerToString,
  getVCController,
  getVCControllerToString,
  getGCController,
  getGCControllerToString,
  getTGController,
  getTGControllerToString,
  getBController,
  getBControllerToString,
  getTAController,
  getTAControllerToString,
  getSPWController,
  getSPWControllerToString,
  getNVController,
  getNVControllerToString,
};