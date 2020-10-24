import {news} from "./initialNews";

const initialState = {
    news: news,
    selectedNews: null
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "news/addNews":
            return {
                ...state,
                news: [...state.news, action.payload]
            };
        case "news/removeNews":
            return {
                ...state,
                news: state.news.filter(news => news.id !== action.layload.id)

            };
        case "news/selectNews": return {
            ...state,
            selectedNews: action.payload
        };
        default:
            return state;
    }
};

export default newsReducer;
