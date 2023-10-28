import { useState } from 'react';

function ItemQuantitySelector({ onQuantityChange }) {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value);
        setQuantity(newQuantity);
        onQuantityChange(newQuantity);
    }

    return (
        <input type="number" value={quantity} min="1" onChange={handleQuantityChange} />
    );
}

export default ItemQuantitySelector;