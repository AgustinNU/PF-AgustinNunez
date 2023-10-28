function CartWidget({ itemCount }) {
    return (
        <div>
            <img src="/path/to/cart-icon.png" alt="Cart" />
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
        </div>
    );
}

export default CartWidget;