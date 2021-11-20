import { Fragment } from "react"

// imports for components
import Front from "../../frontpage/frontpage"
import { ItemListContainer } from "../../items/ItemListContainer.jsx"

const Home = () => {
    return (
        <Fragment>

            {/* imagenes/carrusel */}
             <Front />

            {/* articulos */}
            <ItemListContainer />

        </Fragment>
    )
}

export default Home