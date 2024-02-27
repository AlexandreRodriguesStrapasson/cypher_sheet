import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/home"
import FirsSteps from './pages/firsStep';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/firstStep' element={<FirsSteps/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
