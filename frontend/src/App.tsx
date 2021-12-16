import React from 'react';


function App() {
  const ds = (window as any).ds;
  let dataStructure = new ds.DataStructureController(800, 400, document.getElementById("test"));

  return (
    <div className="App">
      Hello World
      <div id='test'></div>
    </div>
  );
}

export default App;
