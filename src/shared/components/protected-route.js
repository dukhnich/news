import React from "react";
import { Route, Redirect } from "react-router-dom";
import {connect} from "react-redux";

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


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};

export default connect(mapStateToProps)(ProtectedRoute);
