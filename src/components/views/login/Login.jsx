import { Fragment } from "react/cjs/react.development"

const login = () => {
    return (
        <Fragment>
            <h2>Nombre de usuario</h2>
            <input type="text" />

            <h2>contrasena</h2>
            <input type="password" />

            <button>Iniciar sesion</button>
        </Fragment>

    )
}

export default login