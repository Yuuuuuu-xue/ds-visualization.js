import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Documentation from './Pages/Documentation/Documentation';
import Home from './Pages/Home/Home';
import Setup from './Pages/Setup/Setup';
import Demo from './Pages/Demo/Demo';
import './App.scss';
import Navbar from "./Components/Navbar";

function App() {
  // const ds = (window as any).ds;
  // let dsController = new ds.DataStructureController(800, 400);

  // useEffect(() => {
  //   document.getElementById('app')?.insertAdjacentElement('beforeend', dsController.getCanvasElement());
  // }, [])

  return (
    <Router>
      <Navbar options={[['test', '#test'], ['Test test', '#test test']]} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/setup' element={<Setup />} />
        <Route path='/documentation' element= {<Documentation />} />
        <Route path='/demo' element = {<Demo />} />
      </Routes>
    </Router>
  );
}

export default App;
