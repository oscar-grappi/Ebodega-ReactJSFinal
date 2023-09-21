import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services";
import ItemDetail from "./ItemDetail";
import CartContext from "../../context/CartContext";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams();

    const { addItem, buttonAdd, buttonMinus, initial, initialSet } = useContext(CartContext)

    useEffect(() => {

        setIsLoading(true);

        getProduct(id)
            .then((response) => {
                setItem(response)
                initialSet(1);
            }).catch((error) => {
                setItem(null);
            }).finally(() => {
                setIsLoading(false);
            })
    }, [id])

    return <ItemDetail item={item} isLoading={isLoading} addItem={addItem} buttonAdd={buttonAdd} buttonMinus={buttonMinus} initial={initial} initialSet={initialSet} />
}

export default ItemDetailContainer;