import { Redirect, Route } from 'react-router-dom'

interface IProps {
    isLoggedIn: boolean;
    path: string;
    component: () => JSX.Element;
}

const PublicRoutes = ({isLoggedIn, component: Component, ...rest}: IProps) => {
    return (
        <Route {...rest}
            component={(props: JSX.Element) =>(
                isLoggedIn
                    ?   <Redirect to="/" />
                    :   <Component {...props} />
            )}
        />
    )
}

export default PublicRoutes