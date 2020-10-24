import {users} from "./initialUsers";

const initialState = {
    users: users,
    selectedUsers: null,
    currentUser: null
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "news/addUser":
            return {
                ...state,
                news: [...state.news, action.payload]
            };
        case "users/removeUser":
            return {
                ...state,
                news: state.news.filter(news => news.id !== action.layload.id)

            };
        case "users/selectUser": return {
            ...state,
            selectedNews: action.payload
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
