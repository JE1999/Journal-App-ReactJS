import { Link } from 'react-router-dom'

export default function Register () {

    return(
        <>
            <h1 className="auth__title">Register</h1>

            <form>

                <input
                    className="auth__input" 
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoFocus
                    autoComplete="off"
                />

                <input
                    className="auth__input" 
                    type="text"
                    placeholder="email"
                    name="email"
                    autoComplete="off"
                />

                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                />

                <input
                    className="auth__input"
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>


                <Link 
                    className="link"
                    to="/auth/login"
                >
                    Already registered?
                </Link>
            </form>
        </>
    )
}