import { Fragment } from "react/cjs/react.development"

const SignUp = () => {
    return (
        <Fragment>

            <form>
                <h5>Nombre</h5>
                <input type="text" />

                <h5>apellido</h5>
                <input type="text" />
 
                <h5>email</h5>
                <input type="email" />

                <h5>contrasena</h5>
                <input type="password" />

                <h5>confirmar contrasena</h5>
                <input type="password" />
            </form>

        </Fragment>
    )
}

export default SignUp