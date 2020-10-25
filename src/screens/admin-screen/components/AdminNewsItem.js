import React from "react";
import {connect} from "react-redux";

const AdminNewsItem = ({newsItem, selectedNews, dispatch}) => {
    const { title, id} = newsItem;
    const onRemoveNews = (e) => {
        e.stopPropagation();
        dispatch({type: "news/removeNews", payload: id});
    };

    const onSelectUser = () => {
        if (selectedNews.id !== id) {
            dispatch({type: "news/selectNews", payload: {...newsItem}});
        }
        else {
            dispatch({type: "news/selectNews", payload: {}});
        }
    };

    return (
        <li
            onClick={onSelectUser}
            className={`list-group-item d-flex cursor justify-content-between text-left ${
                (selectedNews.id === id) ? "active" : ""
            }`}
        >
            <span className={"mr-3"}>{title}</span>
            <button
                onClick={onRemoveNews}
                className="btn btn-sm btn-danger"
            >
                Remove
            </button>
        </li>
    );
};

const mapStateToProps = (state) => {
    return {
        selectedNews: state.news.selectedNews,
    };
};

export default connect(mapStateToProps)(AdminNewsItem);