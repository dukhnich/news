import {users} from "./initialUsers";

const initialState = {
    users: users,
    selectedUser: {},
    currentUser: {id: localStorage.getItem("token")}
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "users/addUser":
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case "users/removeUser":
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)

            };
        case "users/selectUser": return {
            ...state,
            selectedUser: action.payload
        };
        case "users/changeUser":
            return {
                ...state,
                users: action.payload

            };
        case "users/setCurrentUser": return {
            ...state,
            currentUser: action.payload
        };
        case "users/removeCurrentUser": return {
            ...state,
            currentUser: null
        };
        default:
            return state;
    }
};

export default usersReducer;
