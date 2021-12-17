import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';

function App() {
  // const ds = (window as any).ds;
  // let dsController = new ds.DataStructureController(800, 400);

  // useEffect(() => {
  //   document.getElementById('app')?.insertAdjacentElement('beforeend', dsController.getCanvasElement());
  // }, [])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
