import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/home"
import FirsSteps from './pages/firsStep';
import SecondStep from './pages/secondStep';
import ThirdStep from './pages/thirdStep';
import Sheet from './pages/sheet';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/FirstStep' element={<FirsSteps/>}></Route>
        <Route path='/SecondStep' element={<SecondStep/>}></Route>
        <Route path='/ThirdStep' element={<ThirdStep/>}></Route>
        <Route path='/Sheet' element={<Sheet/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
