import {generateUniqid} from "../../shared/helpers/generateID";

export const addNews = (news) => {
    return (dispatch) => {
        dispatch({
            type: "userList/addUser",
            payload: {
                ...news,
                id: generateUniqid()
            },
        });
    };
};