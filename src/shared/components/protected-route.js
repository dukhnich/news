import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, redirectTo, isAuth, ...rest }) => {

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: redirectTo,
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};
ProtectedRoute.defaultProps = {
    redirectTo: "/login"
};


export default ProtectedRoute
;
