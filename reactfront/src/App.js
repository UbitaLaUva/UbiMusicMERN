import logo from './logo.svg';
import './App.css';

//importamos componentes 
import CompShowGenero from './generos/showGenero';
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
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
