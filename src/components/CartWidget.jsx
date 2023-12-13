import React, { useContext } from 'react';
import { Flex, Spacer } from '@chakra-ui/react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
    const { cantidadTotal } = useContext(CartContext);
    console.log('Cantidad total en el widget:', cantidadTotal);
    return (
        <>
            <Spacer />
            <div className='ButtonCart'>
              <Link to={'/cart'}>
                  <i className="bi bi-cart-plus h-3"></i>
                  {cantidadTotal > 0 && (
                  <h5 className='numeroCarrito'>{cantidadTotal}</h5>
              )}
              </Link>
                
            </div>
        </>
    );
}

export default CartWidget;