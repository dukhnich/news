import React from "react";
import { client } from "./../../shared/hooks/use-query";
import Spinner from "../../shared/components/spinner";
import { gql } from "graphql-request";
import CategoryList from "../home/components/category-list";

const query = gql`
  query categoryFind($query: String) {
    CategoryFind(query: $query) {
      name
      _id
        subCategories {
        name
        _id
        image {
          url
        }
      }
    }
  }
`;
const CategorySearch = () => {
    const [result, setResult] = React.useState(null);
    const [status, setStatus] = React.useState(null);


    const onChange =  (text) => {
        if (!text) {
            setResult(null);
            return
        }
        setStatus("pending");
        const request = JSON.stringify([
            {
                name: new RegExp(text).toString()
            }
        ])
        client
            .request(query, {
                query: request
            })
            .then((d) => {
                setResult(d.CategoryFind);
                setStatus(null)
            });
    };
    return (
        <div className={"p-3"}>
            <label>
                Category search
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
                    <CategoryList categories={result} />
                ) : null}
            </div>
        </div>
    );
};

export default CategorySearch;
