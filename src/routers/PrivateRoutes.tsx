import { Redirect, Route } from 'react-router-dom'

const PrivateRoutes = ({isLoggedIn, component: Component, ...rest}: any) => {
    return (
        <Route {...rest}
            component={(props: any) =>(
                isLoggedIn
                    ?   <Component {...props} />
                    :   <Redirect to="/auth/login" />
            )}
        />
    )
}

export default PrivateRoutes