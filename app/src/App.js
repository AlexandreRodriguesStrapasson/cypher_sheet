import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/home"
import FirsSteps from './pages/firsStep';
import SecondStep from './pages/secondStep';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/firstStep' element={<FirsSteps/>}></Route>
        <Route path='/secondStep' element={<SecondStep/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
