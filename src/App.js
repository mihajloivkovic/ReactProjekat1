import './App.css';
import NavBar from './components/NavBar';
import Pocetna from './pages/Pocetna';
import Kontakt from './pages/Kontakt';
import About from "./pages/About"
import {BrowserRouter, Routes,Route} from 'react-router-dom'


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Pocetna />} /> 
        <Route path='/kontakt' element={<Kontakt />} />  
        <Route path='/onama' element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

