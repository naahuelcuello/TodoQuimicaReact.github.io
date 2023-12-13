import React from 'react';
import { useState, useEffect } from "react";
import { getProductos, getProdByCat } from "../asynmock";
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import {collection,getDocs,getFirestore} from "firebase/firestore"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();

    useEffect(() => {
        
        const db =getFirestore()
        const itemsCollections = collection(db,"Productos")
        getDocs (itemsCollections).then((snapshot)=>{
            const docs = snapshot.docs.map((doc)=>doc.data())
            setProductos(docs)
        })

        const funcionProductos = idCategoria ? getProdByCat : getProductos;

        funcionProductos(idCategoria)
            .then(res => setProductos(res))

    }, [idCategoria])

    return (
        <>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer