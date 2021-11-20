import { Fragment } from 'react/cjs/react.production.min';

// imports for components
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// imports for navigation components
import Home from './components/views/home/Home'


// styles
import './App.css'

function App () {
  return (
    <Fragment>
      <BrowserRouter>
        {/* inicio de app */}
        <Navbar />

        {/* content */}
        <Home />

        {/* footer */}
        <Footer/>
        {/* final de app */}
      </BrowserRouter>
    </Fragment>
  )
}

export default App;