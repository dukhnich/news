import React from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import {Redirect} from "react-router-dom";

const Login = ({isLoggedIn, error }) => {
    if (isLoggedIn) {
        return <Redirect to="/" />;
    }
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center">
                <h1>Login</h1>
            </div>
            <div className="col-sm-12 col-md-5 mx-auto">
                <LoginForm/>
            </div>
            <div>
                {error ? (
                    <span className="text-danger">{error}</span>
                ) : null}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isAuth,
        error: state.auth.error,
    };
};

export default connect(mapStateToProps)(Login);
