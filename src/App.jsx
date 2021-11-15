import { Fragment } from 'react/cjs/react.production.min';
import Navbar from './components/navbar/navbar';
import Front from './components/frontpage/frontpage';
import Footer from './components/footer/footer';
import './App.css'

function App () {
  return (
    <Fragment>

      <Navbar />
      <Front />

      {/* ACA IRIAN LOS PRODUCTOS */}

      <Footer/>


    </Fragment>
  )
}

export default App;