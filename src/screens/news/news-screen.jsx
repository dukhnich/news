import React from "react";
import { useParams } from "react-router-dom";
import {connect} from "react-redux";
import NavBar from "../../shared/components/NavBar";
import NewsItemFull from "./components/NewsItemFull";

const NewsScreen = ({news}) => {
  const { id } = useParams();
  let newsItem;
  for (let item of news) {
    if (item.id === id) {
      newsItem = item;
      break
    }
  }

  if (!newsItem) {
    return (
      <h1>Новость не найдена</h1>
    )
  }

  return (
    <>
      <NavBar text={"Home"} goTo = "/"/>
      <div className={"m-4"}>
        {newsItem ? (
                <NewsItemFull {...newsItem}/>
            ) : (
            <h1>Новость не найдена</h1>
        )}

      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    news: state.news.news,
  };
};

export default connect(mapStateToProps)(NewsScreen);