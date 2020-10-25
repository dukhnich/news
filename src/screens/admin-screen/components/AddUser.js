import React from "react";
import { connect } from "react-redux";
import {addUser, changeUser} from "../../../services/users";
import {logout} from "../../../services/login";

const AddUser = ({selectedUser, currentUser, dispatch}) => {
    const initialValues = {
        login: "",
        password: "",
    }
    const [values, setValues] = React.useState({...initialValues});

    React.useEffect (() => {
            if (Object.keys(selectedUser).length) {
                if (selectedUser.id !== values.id) {
                    setValues({...selectedUser})
                }
            }
            else {
                setValues({...initialValues});
            }
        },
        [selectedUser])

    const onChange = (e) => {
        const target = e.target;
        setValues((prev) => ({
            ...prev,
            [target.name]: target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(selectedUser).length) {
            dispatch(changeUser(values));
            if (selectedUser.id === currentUser.id) {
                dispatch(logout())
            }

        }
        else {
            dispatch(addUser(values));
        }
        if (selectedUser) {
            dispatch({type: "users/selectUser", payload: {}});
        }
        setValues({...initialValues});
    };

    const onClear = (e) => {
        e.preventDefault();
        if (selectedUser) {
            dispatch({type: "users/selectUsers", payload: {}});
        }
        setValues({...initialValues});
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group mb-3">
                <label className="d-block">
                    Login
                    <input
                        onChange={onChange}
                        name = {"login"}
                        value = {values.login}
                        type="text"
                        className="form-control"
                        placeholder="User login"
                    />
                </label>
            </div>
            <div className="form-group mb-3">
                <label className="d-block">
                    Password
                    <input
                        onChange={onChange}
                        name = {"password"}
                        value = {values.password}
                        type="text"
                        className="form-control"
                        placeholder="User password"
                    />
                </label>
            </div>
            <div className="btn-group">
                <button
                    disabled={!(values.login || values.password)}
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={onClear}
                >
                    Reset
                </button>
                <button
                    disabled={!(values.login && values.password)}
                    type="submit"
                    className="btn btn-outline-success"
                >
                    {Object.keys(selectedUser).length ? "Change" : "Add"}
                </button>
            </div>
        </form>
    );
}
const mapStateToProps = (state) => {
    return {
        selectedUser: state.users.selectedUser,
        currentUser: state.users.currentUser,
    };
};

export default connect(mapStateToProps)(AddUser);
