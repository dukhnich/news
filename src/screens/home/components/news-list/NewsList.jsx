import React from "react";
import NewsItem from "./NewsItem";
import {connect} from "react-redux";
const NewsList = ({ news }) => {
  return (
    <div>
      {news.map((item) => (
        <NewsItem
          {...item}
          key={item.id}
        />
      ))}
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    news: state.news.news,
  };
};

export default connect(mapStateToProps)(NewsList);
