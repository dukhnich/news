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
            <div className="d-flex flex-column align-items-center ">
                <LoginForm/>
                {error ? (
                    <div>
                        <span className="text-danger">{error}</span>
                    </div>
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
