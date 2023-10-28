import "../src/App.css";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import SneakersListContainer from './components/SneakersListContainer';
import SneakerDetailContainer from './components/SneakerDetailContainer';
import CategorySelector from './components/CategorySelector';
import NavBar from "./components/NavBar";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";



function App() {
    return (
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<SneakersListContainer />} />
          <Route exact path="/category" element={<CategorySelector />} />
          <Route exact path="/category/:id" element={<SneakersListContainer />} />
          <Route exact path="/item/:id" element={<SneakerDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1>NO EXISTE LA RUTA</h1>} />
          </Routes>
        </BrowserRouter>
    );
}

export default App;