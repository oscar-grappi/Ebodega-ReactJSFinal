import { useContext, useState } from "react";
import { cartTotal } from "../../utils"
import CartContext from "../../context/CartContext";
import { getCartQuantity } from "../../utils"
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../../services";
import { mapCartToCheckout } from "../../utils";

const CheckOut = () => {

    const { cart, clearCart } = useContext(CartContext)
    let total = cartTotal(cart);
    let quantity = getCartQuantity(cart)

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState(null)

    const handleCheckout = () => {
        const order = {
            buyer: {
                name,
                lastName,
                phone,
                email,
            },
            item: mapCartToCheckout(cart),
            total,
            date: serverTimestamp(),
        }
        createOrder(order)
            .then((docRef) => {
                setOrderId(docRef.id)
                clearCart()
            })
    }

    return (
        <div>
            <h1 className="mx-4 mt-3">checkout</h1>
            {orderId &&
                <div className="container border w-50 rounded overflow-hidden">
                    <div className="row">
                        <h2 className="bg-info text-capitalize text-center p-3">¡tu compra fue exitosa!</h2>
                        <div className="text-center">
                            <p>¡muchas gracias por tu compra {name} {lastName}!</p>
                            <p>tu numero de pedido es: {orderId}</p>
                            <p>todos los datos fueron enviados a: {email}</p>
                        </div>
                    </div>
                </div>
            }

            {!orderId && (
                <>
                    <div className="container">
                        <div className="row column-gap-2">
                            <h2>tu carrito</h2>
                            <div className="col p-0">
                                <div className="border rounded overflow-hidden">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Producto</th>
                                                <th scope="col">Precio</th>
                                                <th scope="col">Cantidad</th>
                                                <th scope="col">subtotal</th>
                                            </tr>
                                        </thead>
                                        {cart.map((item, index) => (
                                            <tbody key={index}>
                                                <tr>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{item.name}</td>
                                                    <td>${item.price}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>${item.quantity * item.price}</td>
                                                </tr>
                                            </tbody>
                                        ))}
                                    </table>
                                </div>
                            </div>
                            <div className="col border rounded p-0 overflow-hidden">
                                <div>
                                    <h3 className="text-center bg-body-secondary p-2 text-capitalize">resumen de tu pedido</h3>
                                    <div className="p-2">
                                        <p>cantidad de productos: {quantity}</p>
                                        <p>total: ${total}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col border rounded mt-3">
                                <form className="p-3">
                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-3">
                                                <label className="form-label">Nombre</label>
                                                <input type="text" className="form-control" id="inputName" onChange={event => setName(event.target.value)} value={name} />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mb-3">
                                                <label className="form-label">Apellido</label>
                                                <input type="text" className="form-control" id="inputLastName" onChange={event => setLastName(event.target.value)} value={lastName} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-3">
                                                <label className="form-label">Telefono</label>
                                                <input type="tel" className="form-control" id="inputPhone" onChange={event => setPhone(event.target.value)} value={phone} />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mb-3">
                                                <label className="form-label">Direccion de Mail</label>
                                                <input type="email" className="form-control" id="inputEmail" onChange={event => setEmail(event.target.value)} value={email} />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <button className="btn btn-primary mt-3" onClick={handleCheckout}>Comprar</button>
                        </div>
                    </div>
                </>
            )}

        </div>
    )

}

export default CheckOut