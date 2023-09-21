import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";


function CartList() {

    const { cart, removeItem, clearCart } = useContext(CartContext)

    return (
        <>
        <h1 className="text-capitalize mt-3 mx-2">tu carrito</h1>
            <table className="table table-striped mt-3">
                <thead>
                    <tr className="align-middle">
                        <th scope="col">#</th>
                        <th scope="col"></th>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">subtotal</th>
                        <th scope="col"><button type="button" className="btn btn-danger" onClick={() => clearCart()}>Limpiar Carrito</button></th>
                    </tr>
                </thead>
                {cart.map((item, index) => (
                    <tbody key={index}>
                        <tr className="align-middle">
                            <th scope="row">{index + 1}</th>
                            <td className="text-center"><img src={item.img} style={{ height: 8 + "rem" }} alt={item.name} /></td>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                            <td>${item.quantity * item.price}</td>
                            <td><button type="button" className="btn btn-danger" onClick={() => removeItem(item.id)}>Eliminar Producto</button></td>
                        </tr>
                    </tbody>
                ))}
            </table>

            <div className="text-center">
                <Link to="/checkout" className="btn btn-success">Finalizar Compra</Link>
            </div>
        </>

    );
}

export default CartList;