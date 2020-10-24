import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "graphql-request";
import useQuery from "./../../shared/hooks/use-query";
import Spinner from "./../../shared/components/spinner";
import { Link } from "react-router-dom";
import Category from "../home/components/category-list/category";
import GoodList from "../../shared/components/GoodList";


const query = gql`
  query categoryFind($query: String) {
    CategoryFindOne(query: $query) {
      name
      parent {
        _id
        name
      }
      goods {
        _id
        price
        name
      }
    }
  }
`;

const SubcategoryScreen = () => {
    const { id } = useParams();
    console.log(id)
    const { data, status } = useQuery({
        initialState: { CategoryFindOne: { goods: [] } },
        query,
        variables: {
            query: JSON.stringify([
                {
                    _id: id
                }
            ])
        }
    });

    const {
        CategoryFindOne: { goods, name, parent }
    } = data;

    return (
        <div>
            {status === "pending" ? <Spinner /> : null}

            {parent ? <Category {...parent} /> : null}
            <h1>Category Screen: {name}</h1>

            <GoodList goods={goods} />
        </div>
    );
};

export default SubcategoryScreen;
