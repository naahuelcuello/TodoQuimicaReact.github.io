import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Badge } from '@chakra-ui/react'

const ItemCount = ({ id, nombre, precio }) => {
  const [count, setCount] = useState(0);
  const { agregarAlCarrito } = useContext(CartContext);

  const incContador = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addCart = () => {
    if (count > 0) {
      agregarAlCarrito({ id, nombre, precio }, count);
      toast.success(`Has agregado ${count} producto/s al carrito`, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } else {
      toast.error('No has seleccionado ningún producto', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  return (
    <div className='countContainer'>
      <div className='classCount' align='center'>
        <Button colorScheme='teal' variant='outline' m='2' onClick={decCount}>-</Button>
        <Badge>{count}</Badge>
        <Button colorScheme='teal' variant='outline' m='2' onClick={incContador}>+</Button>
      </div>
      <div className='classCount'>
        <Button onClick={addCart}>Agregar al carrito</Button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ItemCount;

