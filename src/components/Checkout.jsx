import { useContext, useState } from 'react';
import { db } from '../services/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import CartContext from '../context/cart.context';
import { useNavigate } from 'react-router-dom';

function Checkout() {
    const { cart, clear } = useContext(CartContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        confirmEmail: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const orderData = {
            items: cart.items,
            fecha: Timestamp.fromDate(new Date()),
            estado: 'generada',
            nombre: formData.firstName,
            apellido: formData.lastName,
            telefono: formData.phone,
            email: formData.email,
        };

        try {
            let docRef = await addDoc(collection(db, 'orders'), orderData);
            alert(`Orden guardada con ID: ${docRef.id}`);
            clear();
            navigate("/")
        } catch (error) {
            alert('Error al guardar la orden: ' + error)
        }
    }

    return (
        <div>
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                </div>
                <div>
                    <label>Apellido:</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                </div>
                <div>
                    <label>Teléfono:</label>
                    <input type="text" pattern="[0-9]*" name="phone" value={formData.phone} onChange={handleInputChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div>
                    <label>Confirmar Email:</label>
                    <input type="email" name="confirmEmail" value={formData.confirmEmail} onChange={handleInputChange} required />
                </div>
                <button type="submit">Realizar Compra</button>
            </form>
        </div>
    );
}

export default Checkout;