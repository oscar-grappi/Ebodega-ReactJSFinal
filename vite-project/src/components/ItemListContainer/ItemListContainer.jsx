import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    
    const {id} = useParams();

    useEffect (() => {
        
        setIsLoading(true)

        getProducts (id)
            .then (response => {
                setItems(response)
            }).finally (() => {
                setIsLoading(false)
            })
    }, [id])

    return <ItemList items={items} isLoading={isLoading}/>
};

export default ItemListContainer;