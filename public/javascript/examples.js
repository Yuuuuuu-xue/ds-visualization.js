const addInstruction = (title, description, comments, code) => {
  return `
    <div class="instruction">
      <p class="instruction-title">${title}</p>
      <p>${description}</p>
      <div class='instruction-code-wrapper'>
        <code class='instruction-code'>
          <span class="comments">// ${comments}</span>
          ${code}
        </code>
      </div>
    </div>
  `
}


$(document).ready(function() {

  const instructionElement = document.getElementById('instructions');
  instructionElement.innerHTML += addInstruction(
    'Define a controller:', '', 'Define a controller with canvas width, height, and a div element',
    'const dsController = new ds.DataStructureController(width: number, height: number, targetElement: HTMLDivElement);'
  );

  instructionElement.innerHTML += addInstruction(
    'Push a vertex:', 
    'We take in an unique identifier, vertex value, x-coordinate, y-coordinate',
    'Push a vertex',
    "dsController.pushVertex(_id: string, value: any, x: number, y: number): void {};"
  );

  instructionElement.innerHTML += addInstruction(
    'Push an edge',
    'We take in the unique identifier of vertexTo and vertexFrom, also optional weight',
    'Push an edge',
    `pushEdge(vertexTo: string, vertexFrom: string, weight ?: number): void {}`
  );

  instructionElement.innerHTML += addInstruction(
    'Set the width and height of a canvas or a dialog',
    'Take in a number',
    'setCanvasWidth(), setCanvasHeight(), setDialogWidth(), setDialogHeight()',
    'setCanvasWidth(width: number) {}'
  );

  instructionElement.innerHTML += addInstruction(
    'Create a new graph',
    'Take in the graph type and graph name',
    'Create the graph and by clicking the next of prev button, you can see a new empty graph',
    'dsController.createGraph(type: string, name: string): void {};'
  );

  instructionElement.innerHTML += addInstruction(
    'Get current graph info',
    '',
    'Return an object representing the current graph info',
    `dsController.getCurrentGraphInfo(): GraphInfo {}`
  );

  instructionElement.innerHTML += addInstruction(
    'Set the current graph title',
    'Take in a string of a title',
    'Update the title of current graph',
    'dsController.setCurrentGraphTitle(title: string): void {}'
  );

  instructionElement.innerHTML += addInstruction(
    'Move to the next graph or prev graph',
    '',
    'Move to the next graph if we have one or more graph after current. Same for movePrevGraph()',
    'dsController.moveNextGraph(): void {}'
  );

  instructionElement.innerHTML += addInstruction(
    'Show dialog',
    '',
    'Show the dialog',
    'dsController.showDialog(): void {}'
  );
  
  instructionElement.innerHTML += addInstruction(
    'Hide dialog',
    '',
    'Hide the dialog',
    'dsController.hideDialog(): void {}'
  );

  instructionElement.innerHTML += addInstruction(
    'Update the dialog to current graph',
    '',
    'Update the dialog',
    'dsController.updateDialog(vertexId: string): void {}'
  );

  instructionElement.innerHTML += addInstruction(
    'Clear the vertex info inside the dialog',
    '',
    'Clear the vertex info',
    'dsController.clearVertexDialog(): void {}'
  )

  const exampleElement = document.getElementById('example');
  exampleElement.innerHTML = `
    <div class="instruction">
      <div class='instruction-code-wrapper'>
        <code class='instruction-code'>
          dsController.setCurrentGraphTitle('Example of a graph')
          <br/>
          dsController.pushVertex('1', 'First Vertex', 50, 50);
          <br/>
          dsController.pushVertex('2', 'Second Vertex', 200, 300);
          <br/>
          dsController.pushVertex('3', 'Third Vertex', 300, 200);
          <br/>
          dsController.pushVertex('4', 'Fourth Vertex', 500, 200);
          <br/>
          dsController.pushVertex('5', 'Fifth Vertex', 750, 50);
          <br/>
          dsController.pushVertex('6', 'Sixth Vertex', 460, 350);
          <br/>
          dsController.pushEdge('4', '5');
          <br/>
          dsController.pushEdge('3', '5')
          <br/>
          dsController.pushEdge('1', '3');
          <br/>
          dsController.pushEdge('2', '1');
          <br/>
          dsController.pushEdge('4', '3');
          <br/>
          dsController.pushEdge('1', '2');
          <br/>
          dsController.pushEdge('3', '6');
          <br/>
          dsController.createGraph('test', 'Next Graph');
          <br/>
          dsController.moveNextGraph();
          <br/>
          dsController.pushVertex('1', 'New First Vertex', 200, 200);
          <br/>
          dsController.movePrevGraph();
          <br/>
          dsController.setDialogWidth(250);
          <br/>
          dsController.setDialogHeight(400);
          <br/>
          dsController.showDialog();
          <br/>
          console.log(dsController.getCurrentGraphInfo());
        </code>
      </div>
    </div>
  `

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
  dsController.setDialogHeight(400);
  // dsController.updateDialog('1');
  dsController.showDialog();
  console.log(dsController.getCurrentGraphInfo());

  const demoElement = document.getElementById('demo'); 
  const demoController = new ds.DataStructureController(800, 400, demoElement);
  demoController.setDialogWidth(250);
  demoController.setDialogHeight(400);
  demoController.showDialog();

  const vertexForm = document.getElementById('vertex-form'); 
  vertexForm.addEventListener('submit', e => {
    e.preventDefault();
    try {
      demoController.pushVertex(
      document.getElementById('vertex-id').value,
      document.getElementById('vertex-value').value,
      document.getElementById('vertex-x-coord').value,
      document.getElementById('vertex-y-coord').value)
    } catch (err) {
      alert(err);
    }
  }) 
});