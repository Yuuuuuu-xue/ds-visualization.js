$(document).ready(function() {
  const dsController = new ds.DataStructureController(800, 400, document.getElementById("root"));
  dsController.pushVertex('1', 'First Vertex', 50, 50);
  dsController.pushVertex('2', 'Second Vertex', 200, 300);
  dsController.pushVertex('3', 'Third Vertex', 300, 200);
  dsController.pushVertex('4', 'Fourth Vertex', 500, 200);
  dsController.pushEdge('1', '3');
  dsController.pushEdge('2', '1');
  dsController.pushEdge('4', '3');
  dsController.pushEdge('1', '2');
  console.log(dsController.getCurrentGraphInfo());
});