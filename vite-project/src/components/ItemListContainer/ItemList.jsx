import propTypes from "prop-types";
import { Link } from "react-router-dom";


const ItemList = ({ items, isLoading }) => {

    if (isLoading) {
        return <div className="d-flex justify-content-center pt-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    return (
        <div className="containerFlex">
            <h1 className="text-center pt-5">Todos Los Productos</h1>
            <div className="row justify-content-around row-gap-3 m-0 pt-5">
                {items.map((item) => (
                    <div key={item.id} className="card" style={{ width: 18 + "rem", height: 25 + "rem" }}>
                        <div className="card-img h-50">
                            <img src={item.img} className="card-img-top mh-100" alt={item.name} style={{ objectFit: "contain" }} />
                        </div>
                        <div className="card-body text-center">
                            <hr />
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">${item.price}</p>
                            <Link to={`/item/${item.id}`} className="btn btn-primary">Detalle</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

ItemList.propTypes = {
    items: propTypes.array.isRequired,
    isLoading: propTypes.bool,
}

export default ItemList