import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import {CartProvider } from './context/CartContext';
import SendOrder from './components/SendOrder';

const App = () => {
  const[carrito,setCarrito]=useState ([]);
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />}/>

            <Route exact path="/categoria/:idCategoria" element={<ItemListContainer />} />

            <Route exact path='/item/:idItem' element={<ItemDetailContainer/>}/>

            <Route exact path='/cart' element={<Cart/>}/>

            <Route exact path= "/SendOrder" element= {<SendOrder/>}></Route>

          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>

  )

};

export default App