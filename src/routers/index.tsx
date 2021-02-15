import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import AuthRouter from './AuthRouter'
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'

import { useDispatch } from 'react-redux'

import { firebase } from '../firebase/firebaseConfig'

import Journal from '../page/Journal'

import { authLoginAction } from '../actions/Auth/authAction';

export default function Routers () {

    const dispatch = useDispatch()

    const [checking, setChecking] = useState<boolean>(true)
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( (user) => {

            if(user?.uid){
                dispatch( authLoginAction(user.uid, user.displayName) )
                setIsLoggedIn(true)
            }else{
                setIsLoggedIn(false)
            }

            setChecking(false)

        })

    }, [dispatch, checking, isLoggedIn])

    if(checking){
        return (
            <h1>Cargando...</h1>
        )        
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoutes 
                        isLoggedIn={isLoggedIn} 
                        path="/auth"
                        component={AuthRouter} 
                    />

                    <PrivateRoutes 
                        exact
                        isLoggedIn={isLoggedIn}
                        path="/" 
                        component={Journal} 
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
