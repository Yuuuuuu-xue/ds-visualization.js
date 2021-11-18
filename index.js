$(document).ready(function() {
  const dsController = new ds.DataStructureController(500, 400, document.getElementById("root"));
  dsController.pushVertex('0', 'First Vertex', 50, 50);
  dsController.pushVertex('1', 'Second Vertex', 200, 300);
  dsController.pushVertex('2', 'Third Vertex', 300, 200);
  dsController.pushVertex('3', 'Fourth Vertex', 500, 200);
  console.log(dsController.getCurrentGraphInfo());
});