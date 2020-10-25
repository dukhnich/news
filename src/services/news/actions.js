import {generateUniqid} from "../../shared/helpers/generateID";
import store from "../../store/configure-store";

export const addNews = (news) => {
    return (dispatch) => {
        dispatch({
            type: "news/addNews",
            payload: {
                ...news,
                id: generateUniqid(),
                date: new Date()
            },
        });
    };
};

export const changeNews = (news) => {
    const newState = [...store.getState().news.news];
    for (let i = 0; i < newState.length; i++) {
        if (newState[i].id === news.id) {
            newState[i] = {...news};
            break
        }
    }
    return (dispatch) => {
        dispatch({
            type: "news/changeNews",
            payload: newState,
        });
    };
};