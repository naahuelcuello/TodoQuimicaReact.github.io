import { getFirestore, collection, addDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import "./SendOrder.css";
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { useContext } from 'react';

const SendOrder = () => {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState("");

  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CartContext);


  const db = getFirestore();
  const orderCollection = collection(db, "orden");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email !== emailConfirm) {
      setError("Los correos electrónicos no coinciden");
      return;
    }

    const order = {
      nombre,
      apellido,
      email,
      telefono,
    };

    try {
      const docRef = await addDoc(orderCollection, order);
      setId(docRef.id);
      setError(""); // Limpiar el mensaje de error si la orden se envía correctamente
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
        <div className='tituCompra'>
            <h2>DETALLES DE COMPRA</h2>
        </div>
      <div className='DetalleCompra'>
        <div className='productoCarrito'>
            {carrito.map((prod) => (
             <CartItem key={prod.producto.id} {...prod} />
            ))}
            <h6>Total: ${total} </h6>
            <h6>Cantidad Total: {cantidadTotal} </h6>
            <h6>El ID de su compra es: <span>{id}</span></h6>
        </div>
      </div>
        <div className='tituCompra'>
            <h2>FORMULARIO DE COMPRA</h2>
        </div>

      <div className='formuCompra'>
        <form action="" onSubmit={handleSubmit}>
            <h5>Ingrese su Nombre</h5>
            <input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} required/>

            <h5>Ingrese su apellido</h5>
            <input type="text" placeholder='Apellido' onChange={(e) => setApellido(e.target.value)} required/>

            <h5>Ingrese su numero de teléfono</h5>
            <input type="text" placeholder='Teléfono' onChange={(e) => setTelefono(e.target.value)} required/>
          
            <h5>Ingrese su Email</h5>
            <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required/>

            <h5>Confirme su Email</h5>
            <input type="text" placeholder='Confirme su Email' onChange={(e) => setEmailConfirm(e.target.value)} required/>


            <Button className='ButtonSend' onClick={vaciarCarrito} type="submit"> 
             Enviar
            </Button>

          {error && <p className="error-message">{error}</p>}
        </form>
      </div>

    </div>
  );
};

export default SendOrder;
