import { Fragment } from 'react/cjs/react.production.min';

// imports for components
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// imports for navigation components
import Home from './components/views/home/Home'

import ItemListContainer from './components/items/ItemListContainer'

import { ItemDetailContainer } from './components/items/ItemDetailContainer';

import Cart from './components/views/cart/Cart'


// styles
import './App.css'

function App () {
  return (
    <Fragment>
      <BrowserRouter>
        {/* inicio de app */}
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/category/:categoryID' element={<ItemListContainer />} />

          <Route path='product/:productID' element={<ItemDetailContainer />}/>

          <Route path='/cart' element={<Cart />} />

        </Routes>

        {/* footer */}
        <Footer/>
        {/* final de app */}
      </BrowserRouter>
    </Fragment>
  )
}

export default App;