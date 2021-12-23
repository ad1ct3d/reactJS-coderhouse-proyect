import { Fragment } from 'react/cjs/react.production.min';

// imports for components
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// context
import { CartProvider } from './components/context/CartContext';

// imports for navigation components
import Home from './components/views/home/Home'

import ItemListContainer from './components/items/ItemListContainer'

import { ItemDetailContainer } from './components/items/ItemDetailContainer';

import Cart from './components/views/cart/Cart'


// styles
import './App.css'
import { useEffect } from 'react';
import {getFirestore, collection, getDocs } from 'firebase/firestore'


function App () {



  return (
    <CartProvider>
      <Fragment>
        <BrowserRouter>
          {/* inicio de app */}
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/category/:categoryID' element={<ItemListContainer />} />

            <Route path='product/:id' element={<ItemDetailContainer />}/>

            <Route path='/cart' element={<Cart />} />

          </Routes>

          {/* footer */}
          <Footer/>
          {/* final de app */}
        </BrowserRouter>
      </Fragment>
    </CartProvider>
  )
}

export default App;