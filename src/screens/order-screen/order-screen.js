import React from "react";
import { gql } from "graphql-request";
import {client} from "./../../shared/hooks/use-query";
import Spinner from "./../../shared/components/spinner";
import ProtectedRoute from "../../shared/components/ProtectedRoute";
import {connect} from "react-redux";
import OrderList from "./components/OrderList";

const query = gql`
  query orderFind($query: String) {
    OrderGoodFind (query: $query) {
        _id
        price
        count
        good {name}
        order {_id}
        total
    }
  }
`;

const OrderScreen = ({currentUser}) => {
    const [result, setResult] = React.useState(null);
    const [status, setStatus] = React.useState("pending");
    const request = JSON.stringify([
        {
            owner: currentUser
        }
    ])
    client
        .request(query, {
            query: request
        })
        .then((d) => {
            setResult(d.OrderGoodFind);
            setStatus(null);
        });
    return (
        <ProtectedRoute
            isAllow = {Object.keys(currentUser).length}
            redirectTo = {"/login"}
        >
            <h1>Order</h1>
            {status === "pending" ? <Spinner /> : null}
            {Array.isArray(result) ?
                result.length === 0 ? (
                    <span>No Data</span>
                ) : (
                    <OrderList goods={result} />
                ) : null}

        </ProtectedRoute>
    );
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.login.currentUser,
    };
};

export default connect(mapStateToProps)(OrderScreen);
