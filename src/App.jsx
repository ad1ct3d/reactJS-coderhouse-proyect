import { Fragment } from 'react/cjs/react.production.min';

// imports for components
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// context
import { CartProvider } from './components/context/CartContext';
import { UserProvider } from './components/context/UserContext';

// imports for navigation components
import Home from './components/views/home/Home'

import ItemListContainer from './components/items/ItemListContainer'

import { ItemDetailContainer } from './components/items/ItemDetailContainer';

import Cart from './components/views/cart/Cart'

import SignUp from './components/views/Signup/SignUp'

import Login from './components/views/login/Login'


// styles
import './App.css'
import Dashboard from './components/dashboard/Dashboard';


function App () {



  return (
    <UserProvider>
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

              <Route path='/dashboard' element={<Dashboard />}/>

              <Route path='/log-in' element={<Login />} />

            </Routes>

            {/* footer */}
            <Footer/>
            {/* final de app */}
          </BrowserRouter>
        </Fragment>
      </CartProvider>
    </UserProvider>
  )
}

export default App;