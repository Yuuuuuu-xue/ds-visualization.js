const c = document.getElementById("myId");
const ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();



document.getElementById("bluecircle").addEventListener('click', () => {
  console.log('click');
  document.getElementById('line').style.stroke = 'red';
});

$(document).ready(function() {
  const dsController = new ds.DataStructureController(500, 400, document.getElementById("test"));
  dsController.pushVertex('0', 'Test', 50, 50);
  console.log(dsController.getCurrentGraphInfo());
});
document.getElementById("svg").insertAdjacentHTML('beforeend', `<circle cx="220" cy="300" r="50" stroke="crimson" fill="none" />`);

const clickMe = () => console.log('Click me');

const testCircle = document.getElementById('circle');
testCircle.innerHTML = `
  <button style='width: 100px; height: 100px; border-radius: 50%; background: transparent; border: 3px solid crimson; position: absolute; left: 50px; top: 50px;' id='newButton'>Test</button>
`

document.getElementById('newButton').addEventListener('click', clickMe);