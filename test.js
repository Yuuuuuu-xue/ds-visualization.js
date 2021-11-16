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
  const graph = new ds.MyGraph("test", "Testing Graph!");
  console.log(graph.getInfo());
});
document.getElementById("svg").insertAdjacentHTML('beforeend', `<circle cx="220" cy="300" r="50" stroke="crimson" fill="none" />`);