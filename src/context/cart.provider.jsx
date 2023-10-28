import { useEffect, useState } from "react";
import CartContext from "./cart.context";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState({
    items: []
  });

  const [itemsCount, setItemsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() =>{
    let stored = JSON.parse(sessionStorage.getItem("carrito"))
    if (stored){
      updateCart(stored.items)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addItem = (item, quantity) => {
    const { items } = cart;

    if (quantity < 0) {
        return;
    }

    let itemIndex = items.findIndex(x => x.item.id === item.id)
    if (itemIndex > -1) {
        if (items[itemIndex].quantity + quantity <= item.stock){
            items[itemIndex].quantity += quantity;
        }
    }
    else {
        items.push({item, quantity: quantity})
    }

    updateCart(items);
}

const removeItem = (item) => {
    const { items } = cart;
    let itemIndex = items.findIndex(x => x.item.id == item.item.id)
    if (itemIndex > -1) {
        items.splice(itemIndex, 1);
    }

    updateCart(items);
}

  const clear = () => {
        const { items } = cart;

        items.length = 0;

        updateCart(items);
    }

  const getTotalPrice = () => {
    const { items } = cart;
    return items.reduce(
      (acc, item) => acc + item.quantity * item.item.price,
      0
    );
  };

  const getItemCount = () => {
    const { items } = cart;
    return items.reduce((sum, item) => sum + item.quantity, 0);
}

const getAvailableStock = (item) => {
    let existingItem = cart.items.find(x => x.item.id === item.id)

    return item.stock - (existingItem?.quantity ?? 0);
}

const updateCart = (items) => {
    setCart({
      ...cart,
      items
    });
}

useEffect(() => {
  setTotalPrice(getTotalPrice())
  setItemsCount(getItemCount());
  sessionStorage.setItem("carrito", JSON.stringify(cart))
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        itemsCount,
        totalPrice,
        addItem,
        removeItem,
        clear,
        getTotal: getTotalPrice,
        getItemCount,
        getAvailableStock
      }}
    >
      {children}
    </CartContext.Provider>
  );
}