import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import AuthRouter from './AuthRouter'

import Journal from '../page/Journal'

export default function Routers () {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={AuthRouter} />

                    <Route exact path="/" component={Journal} />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
