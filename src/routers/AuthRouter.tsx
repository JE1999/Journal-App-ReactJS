import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../page/Auth/Login'
import Register from '../page/Auth/Register'

export default function index () {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route exact path="/auth/login" component={Login} />

                    <Route exact path="/auth/register" component={Register} />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </div>
    )
}
