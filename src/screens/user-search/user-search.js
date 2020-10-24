import React from "react";
import { client } from "./../../shared/hooks/use-query";


import Spinner from "../../shared/components/spinner";
import { gql } from "graphql-request";
import UserList from "./components/UserList";
import ProtectedRoute from "../../shared/components/ProtectedRoute";
import {connect} from "react-redux";



const query = gql`
  query userFind($query: String) {
    UserFind(query: $query) {
      nick
      _id
      avatar {
        url
        text
      }
    }
  }
`;


const UserSearch = ({currentUser}) => {
    const [result, setResult] = React.useState(null);
    const [status, setStatus] = React.useState(null);


    const onChange =  (text) => {
        if (!text) {
            setResult(null);
            return
        }
        setStatus("pending");
        const reg = new RegExp(text).toString()
        const request = JSON.stringify([
            {
                nick: reg
            }
        ])
        client
            .request(query, {
                query: request
            })
            .then((d) => {
                setResult(d.UserFind);
                setStatus(null);
            });
    };
    return (
        <ProtectedRoute
            isAllow = {Object.keys(currentUser).length}
            redirectTo = {"/login"}
        >
            <div className={"p-3"}>
                <label>
                    Users search
                    <input
                        className={"form-control"}
                        type="search"
                        onChange={(e)=>onChange(e.target.value)}
                    />
                </label>
                <div>
                    {status === null ? null : <Spinner /> }
                    {Array.isArray(result) ?
                        result.length === 0 ? (
                            <span>No Data</span>
                        ) : (
                            <UserList users={result} />
                        ) : null}
                </div>
            </div>
        </ProtectedRoute>
    );
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.login.currentUser,
    };
};

export default connect(mapStateToProps)(UserSearch);
