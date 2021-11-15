import { Fragment } from 'react/cjs/react.production.min';
import Navbar from './components/navbar/navbar';
import Front from './components/frontpage/frontpage';
import './App.css'

function App () {
  return (
    <Fragment>

      <Navbar />
      <Front />

    </Fragment>
  )
}

export default App;