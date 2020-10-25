import React from "react";
import Spinner from "../../shared/components/spinner";
import {connect} from "react-redux";
import {login} from "../../services/login";

const LoginForm = ({dispatch, status}) => {
    const [values, setValues] = React.useState({});

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(login(values));
    };

    const onChange = (e) => {
        const target = e.target;
        setValues((prev) => ({
            ...prev,
            [target.name]: target.value
        }));
    };


    return (<form onSubmit={onSubmit} className={"mx-auto"}>
        <div className="form-group">
            <label>Login
            <input
                onChange = {onChange}
                name={"login"}
                type="text"
                className="form-control"
                aria-describedby="Login"
            />
            </label>
        </div>
        <div className="form-group">
            <label>Password
            <input
                onChange = {onChange}
                name={"password"}
                type="password"
                className="form-control"
                aria-describedby="Password"
            />
            </label>
        </div>
        <div className={"d-flex justify-content-center mb-3"}>
            <button type="submit" className="btn btn-primary mx-auto">Login</button>
        </div>
        {status === "pending" && <Spinner />}
    </form>)
}

const mapStateToProps = (state) => {
    return {
        status: state.auth.status,
    };
};

export default connect(mapStateToProps)(LoginForm);