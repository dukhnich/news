import {generateUniqid} from "../../shared/helpers/generateID";
import store from "../../store/configure-store";

export const addUser = (user) => {
    return (dispatch) => {
        dispatch({
            type: "users/addUser",
            payload: {
                ...user,
                id: generateUniqid()
            },
        });
    };
};

export const changeUser = (user) => {
    const newState = [...store.getState().users.users];
    for (let i = 0; i < newState.length; i++) {
        if (newState[i].id === user.id) {
            newState[i] = {...user};
            break
        }
    }
    return (dispatch) => {
        dispatch({
            type: "users/changeUser",
            payload: newState,
        });
    };
};