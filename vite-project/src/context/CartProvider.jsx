import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [initial, setInitial] = useState(0)

    const isInCart = (id) => {
        const itemInCart = cart.find((item) => item.id == id)
        return !!itemInCart;
    }

    const addItem = (product, quantity) => {
        const itemInCart = isInCart(product.id)

        if (itemInCart) {
            const newCart = cart.map((item) => {
                if (item.id == product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + quantity,
                    }
                }
                return item;
            })
            setCart(newCart)
        } else {
            setCart([...cart, { ...product, quantity }])
        }
    }

    const removeItem = (id) => {
        const newCart = cart.filter((item) => item.id != id)
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    // botones para agregar y sacar productos del carrito.

     const initialSet = () => {
        setInitial(1)
    }

    const buttonAdd = (stock) => {
        if (initial < stock) {
            setInitial(initial + 1)
    }}

    const buttonMinus = () => {
        if (initial > 1) {
            setInitial(initial - 1)
        }
    }

    return (
        <CartContext.Provider
            value = {{cart, addItem, removeItem, clearCart, isInCart, buttonAdd, buttonMinus, initial, initialSet}}>
                {children}
        </CartContext.Provider>
    )
}

export default CartProvider;