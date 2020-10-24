const initialState = {
    isAuth: !!localStorage.getItem("token"),
    status: "idle",
    error: null
};

const authReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case "login/pending":
            return {
                ...state,
                status: "pending",
                error: null
            };
        case "login/resolved":
            return {
                ...state,
                isAuth: true,
                status: "resolved"
            };
        case "login/rejected":
            return {
                ...state,
                status: "rejected",
                error: action.payload
            };

        case "logout":
            return {
                ...state,
                isAuth: false,
                status: "resolved"
            };

        default:
            return state;
    }
};

export default authReducer;
