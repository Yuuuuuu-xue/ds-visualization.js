const dsController = new ds.DataStructureController(1500, 600, document.getElementById("test"));
dsController.pushVerticesToCurrentGraph([
  {_id: '1', value: 'First Vertex', x: 50, y: 50, config: {draggable: true, backgroundImageSrc: './public/images/image.png'}},
  {_id: '2', value: 'Second Vertex', x: 200, y: 300, config: {disableActiveClick: true}},
  {_id: '3', value: 'Third Vertex', x: 300, y: 200, config: {draggable: true, backgroundImageSrc: './public/images/image2.jpg', style: {a: 'a'}, }},
  {_id: '4', value: 'Fourth Vertex', x: 500, y: 200, config: {backgroundImageSrc: './public/images/myProfile.jpg', hideText: true, style: {width: "150px", height: "150px"}, disableActiveClick: true, clickCallback: () => window.open("https://github.com/Yuuuuuu-xue")}},
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
  {vertexTo: '6', vertexFrom: '4'}
]);
dsController.createGraph('undirected', 'Next Graph', [
  {_id: '1', value: 'New First Vertex', x: 200, y: 100},
  {_id: '2', value: 'New Second Vertex', x: 100, y: 200}
], [
  {vertexTo: '1', vertexFrom: '2'}
], {
  mode: 'non-clickable'
});

dsController.updateCurrentGraphVertexValue('3', 'New Value')
dsController.setDialogWidth(250);
dsController.setDialogHeight(400);
dsController.showDialog();
dsController.updateCurrentGraphVertexConfig('4', {style: {borderColor: "crimson"}})
dsController.updateCurrentGraphConfig({mode: 'traversable', enableWeight: true, disallowRepeatedVertex: true})
console.log(dsController.getCurrentGraphInfo());
