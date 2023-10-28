import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/cart.context';

const SneakerCard = ({ sneaker }) => {
const [quantity, setQuantity] = useState(0);

const {getAvailableStock, addItem} = useContext(CartContext)

const incrementQuantity = () => {
    handleQuantityChange(quantity+1)
}

const decrementQuantity = () => {
    if (quantity > 0) {
        handleQuantityChange(quantity-1)
    }
}

const handleQuantityChange = (newValue) => {

    if (newValue <= getAvailableStock(sneaker))
    {
        setQuantity(newValue);
    }
}

const handleAdd = () => {
    addItem(sneaker, quantity)
    setQuantity(0)
}

return (
    <div className="sneaker-card">
        <img className="sneaker-image" src={sneaker.imageUrl} alt={sneaker.title} />
        <h2 className="nameSize">{sneaker.title}</h2>
        <p className="sneaker-price">Precio: {sneaker.price}</p>
        <p className="sneaker-stock">Stock: {sneaker.stock}</p>
        <div className="quantity-controls">
            <button className="quantity-button" onClick={decrementQuantity}>-</button>
            <span className="quantity">{quantity}</span>
            <button className="quantity-button" onClick={incrementQuantity}>+</button>
        </div>
        <button onClick={handleAdd}>Agregar al Carrito</button>
        <Link to={`/item/${sneaker.id}`} className="sneaker-link">Ver Detalles</Link>
    </div>
    );
}

export default SneakerCard;