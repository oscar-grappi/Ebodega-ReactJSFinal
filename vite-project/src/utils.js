
export const getCartQuantity = (cart) => {
    return cart.reduce ((acc, product) => acc + product.quantity, 0)
}

export const cartTotal = (cart) => {
    return (
        cart.reduce ((acc, product) => acc + product.price*product.quantity, 0)
    )
}

export const mapCartToCheckout = (cart) => {
    return cart.map ((item) => ({
        id: item.id,
        quantity: item.quantity,
        price: item.price,
        name: item.name
    }))
}
