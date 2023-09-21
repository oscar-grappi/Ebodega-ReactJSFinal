import { useContext } from "react";
import propTypes from "prop-types";
import CartContext from "../../context/CartContext";

const ItemDetail = ({ item, isLoading, addItem, buttonAdd, buttonMinus, initial }) => {
    if (isLoading) {
        return <div className="d-flex justify-content-center align-content-center pt-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    if (!item) {
        return null;
    }
       
    return (
        <div className="container">
            <h1 className="text-capitalize text-center mt-4">detalle del producto</h1>
            <div className="row pt-5 justify-content-center m-0">
                <div className="col-4">
                    <img className="mh-100 mw-100" src={item.img} alt={item.title} />
                </div>
                <div className="col-2 bg-body-secondary h-100 border rounded overflow-hidden p-3">
                    <h2 className="text-center mb-3">{item.name}</h2>
                    <p>precio: ${item.price}</p>
                    <p>categoria: {item.category}</p>
                    <p>stock disponible: {item.stock}</p>
                    <p>{item.description}</p>
                    <hr />
                    <div className="row">
                        <div className="col text-center mb-2 ">
                            <button className="btn btn-danger" onClick={() => buttonMinus()}>-</button>
                            <div className="d-inline p-2 mx-1 border border-dark rounded bg-body align-middle">{initial}</div>
                            <button className="btn btn-success" onClick={() => buttonAdd(item.stock)} >+</button>
                        </div>
                        <button className="btn btn-primary" onClick={() => addItem(item, initial)}>agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

ItemDetail.propTypes = {
    item: propTypes.object,
    isLoading: propTypes.bool,
    addItem: propTypes.func,
}
export default ItemDetail