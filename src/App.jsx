import { Fragment } from 'react/cjs/react.production.min';
import Navbar from './components/navbar/navbar';
import Front from './components/frontpage/frontpage';
import Footer from './components/footer/footer';
import ItemList from './components/items/ItemList'
import Product from './components/items/products/Product'
import './App.css'

function App () {
  return (
    <Fragment>
      {/* inicio de app */}
      <Navbar />

      {/* imagenes/carrusel */}
      <Front />

      {/* articulos */}
      <ItemList />

      <Footer/>
      {/* final de app */}
    </Fragment>
  )
}

export default App;