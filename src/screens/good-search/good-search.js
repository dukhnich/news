import React from "react";
import { client } from "./../../shared/hooks/use-query";
import Spinner from "../../shared/components/spinner";
import { gql } from "graphql-request";
import GoodList from "../../shared/components/GoodList";

const query = gql`
  query goodFind($query: String) {
    GoodFind(query: $query) {
      _id
      name
    }
  }
`;
const GoodSearch = () => {
    const [result, setResult] = React.useState(null);
    const [status, setStatus] = React.useState(null);


    const onChange =  (text) => {
        if (!text) {
            setResult(null);
            return
        }
        setStatus("pending");
        const reg = new RegExp(text).toString();
        const request = JSON.stringify([
            {
                $or: [{ name: reg }, { description: reg }]
            }
        ])
        client
            .request(query, {
                query: request
            })
            .then((d) => {
                setResult(d.GoodFind);
                setStatus(null)
            });
    };
    return (
        <div className={"p-3"}>
            <label>
                Good search
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
                        <GoodList goods={result} />
                    ) : null}
            </div>
        </div>
    );
};

export default GoodSearch;
