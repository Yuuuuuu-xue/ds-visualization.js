import React, { useEffect } from 'react';


function App() {
  const ds = (window as any).ds;
  let dsController = new ds.DataStructureController(800, 400);

  useEffect(() => {
    document.getElementById('app')?.insertAdjacentElement('beforeend', dsController.getCanvasElement());
  }, [])

  return (
    <div className="App" id='app'>
    </div>
  );
}

export default App;
