import { useContext } from 'react';
import CartContext from '../context/cart.context';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const { cart, removeItem, totalPrice } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <div>
            <h1>Carrito de Compras</h1>
            {cart.items.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <div className='table'>
                    <div className='headers'>
                        <div className='name'>Nombre</div>
                        <div className='quantity'>Cantidad</div>
                        <div className='unitPrice'>Precio Unitario</div>
                        <div className='totalPrice'>Total</div>
                        <div className='actions'></div>
                    </div>
                    <div className='rows'>
                        {cart.items.map(item => (
                            <div className='row' key={item.item.id}>
                                <div className='name'>{item.item.title}</div>
                                <div className='quantity'>{item.quantity}</div>
                                <div className='unitPrice'>{item.item.price}</div>
                                <div className='totalPrice'>{item.item.price * item.quantity}</div>
                                <div className='actions'>
                                    <button className='delete' onClick={() => removeItem(item)}>X</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='total'>
                        <div>Total Price: {totalPrice}</div>
                    </div>
                    <button className='confirm' onClick={() => navigate("/checkout")}>Confirmar Compra</button>
                </div>

                // <ul>
                //     {cart.items.map(item => (
                //         <li key={item.item.id}>
                //             <span>{item.item.title}</span>
                //             <span>Quantity: {item.quantity}</span>
                //             
                //         </li>
                //     ))}
                // </ul>
            )}
        </div>
    );
}

export default Cart;