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

export {
  getCGController,
  getCGControllerToString
};