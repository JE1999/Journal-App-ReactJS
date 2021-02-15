import { Redirect, Route } from 'react-router-dom'

const PublicRoutes = ({isLoggedIn, component: Component, ...rest}: any) => {
    return (
        <Route {...rest}
            component={(props: any) =>(
                isLoggedIn
                    ?   <Redirect to="/" />
                    :   <Component {...props} />
            )}
        />
    )
}

export default PublicRoutes