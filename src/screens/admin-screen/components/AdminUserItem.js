import React from "react";
import {connect} from "react-redux";

const AdminUserItem = ({user, currentUser, selectedUser, dispatch}) => {
    const { login, id} = user;
    const onRemoveNews = (e) => {
        e.stopPropagation();
        dispatch({type: "users/removeUser", payload: id});
        dispatch({type: "users/selectUser", payload: {}});
    };

    const onSelectUser = () => {
        if (selectedUser.id !== id) {
            dispatch({type: "users/selectUser", payload: {...user}});
        }
        else {
            dispatch({type: "users/selectUser", payload: {}});
        }
    };

    return (
        <li
            onClick={onSelectUser}
            className={`list-group-item d-flex cursor justify-content-between text-left ${
                (selectedUser.id === id) ? "active" : ""
            }`}
        >
            <span className={"mr-3"}>{login}</span>
            {currentUser.id !== id ? (
                <button
                    onClick={onRemoveNews}
                    className="btn btn-sm btn-danger"
                >
                    Remove
                </button>
            ) : null}

        </li>
    );
};

const mapStateToProps = (state) => {
    return {
        selectedUser: state.users.selectedUser,
        currentUser: state.users.currentUser,
    };
};

export default connect(mapStateToProps)(AdminUserItem);