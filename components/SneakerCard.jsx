import { Link } from 'react-router-dom';
import { useState } from 'react';

const SneakerCard = ({ sneaker }) => {
    const [quantity, setQuantity] = useState(0);

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    }

    return (
        <div className="sneaker-card">
            <img className="sneaker-image" src={`/img/${sneaker.imagen}`} alt={sneaker.nombre} />
            <h2 className="nameSize">{sneaker.nombre}</h2>
            <p className="sneaker-description">{sneaker.descripcion}</p>
            <p className="sneaker-price">Precio: {sneaker.precio}</p>
            <div className="quantity-controls">
    <button className="quantity-button" onClick={decrementQuantity}>-</button>
    <span className="quantity">{quantity}</span>
    <button className="quantity-button" onClick={incrementQuantity}>+</button>
</div>
            <Link to={`/item/${sneaker.id}`} className="sneaker-link">Ver Detalles</Link>
        </div>
    );
}

export default SneakerCard;