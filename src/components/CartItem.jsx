import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button} from '@chakra-ui/react'

const CartItem = ({ producto, cantidad}) => {
  const { eliminarProducto } = useContext(CartContext);

  return (
    <div>
      <h3>Producto: {producto.nombre}</h3>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: ${producto.precio}</p>
      <Button onClick={() => eliminarProducto(producto.id)}>Eliminar</Button>
      <hr />
    </div>
  );
};

export default CartItem;