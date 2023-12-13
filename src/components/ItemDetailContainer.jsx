import React, { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getUnProducto } from "../asynmock";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const {idItem} = useParams();

    useEffect(() => {
        getUnProducto(idItem)
            .then(respuesta => setProducto(respuesta))
    }, [idItem])
    
    return (
        <div className='cardContainer'>
            {producto ? <ItemDetail {...producto} />: <p>Producto no encontrado</p>}
        </div>
    )
}

export default ItemDetailContainer