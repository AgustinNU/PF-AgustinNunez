import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../services/firebase';
import AddItemButton from './AddItemButton';
import { doc, getDoc } from '@firebase/firestore';
import CartContext from '../context/cart.context';

function SneakerDetailContainer() {
    const { id } = useParams();
    const [sneaker, setSneaker] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const { addItem, getAvailableStock } = useContext(CartContext);

    useEffect(() => {
        const obtenerSneakerPorId = async (sneakerId) => {
            const docRef  = doc(db, "items", sneakerId)
            const docSnap  = await getDoc(docRef);
            if (docSnap.exists) {
                setSneaker({ id: docSnap.id, ...docSnap.data() });
            } else {
                alert("El producto no existe en Firebase")
            }
        };

        if (id) {
            obtenerSneakerPorId(id);
        }
    }, [id]);

    const handleAddToCart = () => {
        addItem(sneaker, quantity)
        setQuantity(0);
    }

    const handleQuantityChange = (e) => {
        let newValue = parseInt(e.target.value);

        if (newValue <= getAvailableStock(sneaker))
        {
            setQuantity(newValue);
        }
    }

    if (!sneaker) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>{sneaker.title}</h1>
            <img src={sneaker.imageUrl} alt={sneaker.title} className='imageDetail'/>
            <p>{sneaker.description}</p>
            <p>Precio: {sneaker.price}</p>
            <p>Stock: {sneaker.stock}</p>
            <input type="number" value={quantity} min="1" onChange={handleQuantityChange} />
            <AddItemButton onAddToCartClick={handleAddToCart} />
        </div>
    );
}

export default SneakerDetailContainer;