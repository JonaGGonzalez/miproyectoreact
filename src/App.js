import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import Productos from './pages/Productos';
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <ItemListContainer/>
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/contacto' element={<Contacto/>}></Route>
        <Route path='/nosotros' element={<Nosotros/>}></Route>
        <Route path='/productos' element={<Productos/>}></Route>
      </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
