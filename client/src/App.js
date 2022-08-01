import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './componentes/LandingPage';
import Home from './componentes/Home';
import CreateCat from './componentes/CreateCat';
import Detail from './componentes/Detail'
import "./fontello/css/fontello.css"
//import About from './componentes/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<LandingPage/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/cat' element={<CreateCat/>}></Route>
          <Route path='/cats/:id' element={<Detail/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
