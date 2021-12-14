const dsController = new ds.DataStructureController(800, 400, document.getElementById("test"));
dsController.pushVerticesToCurrentGraph([
  {_id: '1', value: 'First Vertex', x: 50, y: 50, config: {draggable: true}},
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
  {vertexTo: '3', vertexFrom: '6', weight: -20}
]);
dsController.createGraph('undirected', 'Next Graph', [
  {_id: '1', value: 'New First Vertex', x: 200, y: 200},
  {_id: '2', value: 'New Second Vertex', x: 100, y: 500}
], [
  {vertexTo: '1', vertexFrom: '2'}
]);
dsController.setDialogWidth(250);
dsController.setDialogHeight(400);
dsController.showDialog();
console.log(dsController.getCurrentGraphInfo());
