import React from "react";
import NewsList from "./components/news-list";
import Spinner from "./../../shared/components/spinner";
import {connect} from "react-redux";
import NavBar from "../../shared/components/NavBar";


const HomeScreen = ({status}) => {

  return (<>
    <NavBar text={"Edit"} goTo = "/admin"/>
    <div className="mt-3">
      <h1 className="mx-2">News</h1>
      {status === "pending" ? (
        <Spinner />
      ) : (
        <NewsList/>
      )}
    </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    status: state.news.status,

  };
};

export default connect(mapStateToProps)(HomeScreen);
