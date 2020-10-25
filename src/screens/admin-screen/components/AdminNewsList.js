import React from "react";
import { connect } from "react-redux";
import AdminNewsItem from "./AdminNewsItem";


const AdminNewsList = ({news}) => {

    return (
        <ul className="list-group mt-5">
            {news.map((newsItem) => {
                return( <AdminNewsItem
                    key={newsItem.id}
                    newsItem = {newsItem}
                />)
            })}
        </ul>
    );
}

const mapStateToProps = (state) => {
    return {
        news: state.news.news,
    };
};

export default connect(mapStateToProps)(AdminNewsList);
