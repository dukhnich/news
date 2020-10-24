import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "graphql-request";
import useQuery from "./../../shared/hooks/use-query";
import Spinner from "./../../shared/components/spinner";
import ProtectedRoute from "../../shared/components/ProtectedRoute";
import {connect} from "react-redux";
import Good from "./components/Good";

const query = gql`
  query goodFind($query: String) {
    GoodFindOne (query: $query) {
      _id
      name
      description
      price
      categories {
        name
        _id
      }
      images{
      url
      }
    }
  }
`;



const GoodScreen = ({currentUser}) => {
    const { id } = useParams();
    const { data, status } = useQuery({
        initialState: { GoodFindOne: {  } },
        query,
        variables: {
            query: JSON.stringify([
                {
                    _id: id
                }
            ])
        }
    });

    return (
        <ProtectedRoute
            isAllow = {Object.keys(currentUser).length}
            redirectTo = {"/login"}
        >
            <h1>Good</h1>
            {status === "pending" ? <Spinner /> : null}
            {Object.keys(data.GoodFindOne).length ? <Good data={data.GoodFindOne}/> : null}
        </ProtectedRoute>
    );
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.login.currentUser,
    };
};

export default connect(mapStateToProps)(GoodScreen);

