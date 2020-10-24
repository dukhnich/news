import { combineReducers } from "redux";
import { authReducer } from "./../services/login";
import {newsReducer} from "../services/news";
import {usersReducer} from "../services/users";

export default combineReducers(
{
            auth: authReducer,
            news: newsReducer,
            users: usersReducer,
        }
);