import { Redirect, Route } from 'react-router-dom'

interface IProps {
    exact: boolean;
    isLoggedIn: boolean;
    path: string;
    component: () => JSX.Element;
}

const PrivateRoutes = ({isLoggedIn, component: Component, ...rest}: IProps) => {
    return (
        <Route {...rest}
            component={(props: JSX.Element) =>(
                isLoggedIn
                    ?   <Component {...props} />
                    :   <Redirect to="/auth/login" />
            )}
        />
    )
}

export default PrivateRoutes