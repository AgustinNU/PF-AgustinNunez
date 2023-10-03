import "../src/App.css";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { NAVBAR_ROUTES } from '../routes/routes';
import SneakersListContainer from '../components/SneakersListContainer';
import SneakerDetailContainer from '../components/SneakerDetailContainer';
import CategorySelector from '../components/CategorySelector';
import cartIcon from '../src/assets/bxs-cart-add.svg';
import homeIcon from '../img/pngwing.com.png';

function App() {
    return (
      <BrowserRouter>
        <nav>
          <ul className="navbar">
            <a href="/"><img src={homeIcon} alt="Home" className='icon'/></a>
            {NAVBAR_ROUTES.map((route) => (
              <li key={route.path}>
                <NavLink
                  to={route.path}className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}>{route.name}
                </NavLink>
              </li>
            ))}
            <li>
              <div to="/cart" >
                <img src={cartIcon} alt="Cart" />
                <span className="cart-count">2</span>
              </div>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<h1 className='titulo'>HOME</h1>} />
          <Route exact path="/category" element={<CategorySelector />} />
          <Route exact path="/category/:id" element={<SneakersListContainer />} />
          <Route exact path="/item/:id" element={<SneakerDetailContainer />} />
          <Route path="*" element={<h1>NO EXISTE LA RUTA</h1>} />
          </Routes>
        </BrowserRouter>
    );
}

export default App;