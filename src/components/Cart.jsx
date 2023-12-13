import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import './Cart.css'
import { Button, Badge } from '@chakra-ui/react'
const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CartContext);

  if (cantidadTotal === 0) {
    return (
      <div className='carrito'>
        <h2 className='productoCarrito'>No hay productos en el carrito.</h2>
        <Link to='/'>
            <Button className='buttonCart'>
                Ver productos
            </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className='carrito'>
      <div className='productoCarrito'>
        {carrito.map((prod) => (
          <CartItem key={prod.producto.id} {...prod} />
        ))}
        <h3>Total: ${total} </h3>
        <h3>Cantidad Total: {cantidadTotal} </h3>
        <Button onClick={vaciarCarrito}>Vaciar carrito</Button>
        <Link to='/'>
            <Button onClick={vaciarCarrito}> 
                Finalizar Compra
            </Button>
        </Link>
      </div>
    </div>
  );
};
export default Cart