import React from "react";

import CategoryList from "./components/category-list";
import Spinner from "./../../shared/components/spinner";
import {connect} from "react-redux";


const HomeScreen = ({news, status}) => {

  return (
    <div className="mt-3">
      <h1>News</h1>

      {status === "pending" ? (
        <Spinner />
      ) : (
          null
        // <CategoryList categories={news} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    news: state.news.news,
    status: state.news.status,

  };
};

export default connect(mapStateToProps)(HomeScreen);
