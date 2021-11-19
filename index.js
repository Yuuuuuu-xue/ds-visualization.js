$(document).ready(function() {
  const dsController = new ds.DataStructureController(800, 400, document.getElementById("root"));
  dsController.setCurrentGraphTitle('Example of a graph')
  dsController.pushVertex('1', 'First Vertex', 50, 50);
  dsController.pushVertex('2', 'Second Vertex', 200, 300);
  dsController.pushVertex('3', 'Third Vertex', 300, 200);
  dsController.pushVertex('4', 'Fourth Vertex', 500, 200);
  dsController.pushVertex('5', 'Fifth Vertex', 750, 50);
  dsController.pushVertex('6', 'Sixth Vertex', 460, 350);
  dsController.pushEdge('4', '5');
  dsController.pushEdge('3', '5')
  dsController.pushEdge('1', '3');
  dsController.pushEdge('2', '1');
  dsController.pushEdge('4', '3');
  dsController.pushEdge('1', '2');
  dsController.pushEdge('3', '6');
  dsController.createGraph('test', 'Next Graph');
  dsController.moveNextGraph();
  dsController.pushVertex('1', 'New First Vertex', 200, 200);
  dsController.movePrevGraph();
  dsController.setDialogWidth(250);
  dsController.setDialogHeight(300);
  dsController.updateDialog('1');
  dsController.showDialog();
  console.log(dsController.getCurrentGraphInfo());
});