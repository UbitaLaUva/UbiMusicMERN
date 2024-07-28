import logo from './logo.svg';
import './App.css';

//importamos componentes 
import CompShowGenero from './generos/showGenero';
import CompCreateGenero from './generos/createGenero';
import CompEditGenero from './generos/editGenero';

//importamos los router
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowGenero />}/>
          <Route path='/create' element={<CompCreateGenero />}/>
          <Route path='/edit/:id' element={<CompEditGenero />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
