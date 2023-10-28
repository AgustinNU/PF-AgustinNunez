import { NavLink } from 'react-router-dom';
import cartIcon from '../assets/bxs-cart-add.svg';
import logo from '../assets/pngwing.com.png';
import { useContext } from 'react';
import CartContext from '../context/cart.context';

function NavBar() {
    const { itemsCount } = useContext(CartContext);

    return (
        <nav className="navbar">
            <a href="/"><img src={logo} alt="Home" className='icon'/></a>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/category">Tienda</NavLink>
            <NavLink to="/cart">
                <div className='cart'>
                    <img src={cartIcon} alt="Carrito" className='icon' />
                    <div className='cartCount'>{itemsCount ?? 0}</div>
                </div>
            </NavLink>
        </nav>
    );
}

export default NavBar;