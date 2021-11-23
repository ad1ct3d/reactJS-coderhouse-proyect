import { Fragment } from 'react/cjs/react.production.min';

// imports for components
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// imports for navigation components
import Home from './components/views/home/Home'

import ItemListContainer from './components/items/ItemListContainer'


// styles
import './App.css'
import { ItemDetailContainer } from './components/items/ItemDetailContainer';

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

        </Routes>

        {/* footer */}
        <Footer/>
        {/* final de app */}
      </BrowserRouter>
    </Fragment>
  )
}

export default App;