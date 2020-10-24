import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "graphql-request";
import useQuery from "./../../shared/hooks/use-query";
import Spinner from "./../../shared/components/spinner";
import CategoryList from "../home/components/category-list";
import GoodList from "../../shared/components/GoodList";

const query = gql`
  query categoryFind($query: String) {
    CategoryFindOne(query: $query) {
      name
      subCategories {
        name
        _id
      }
      goods {
        _id
        price
        name
      }
    }
  }
`;

const CategoryScreen = () => {
  const { id } = useParams();
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
    CategoryFindOne: { goods, subCategories }
  } = data;

  // console.log("g", goods);
  return (
    <div>
      <h1>Category Screen: {id}</h1>

      {status === "pending" ? <Spinner /> : null}
      {subCategories ? <CategoryList categories={subCategories} isSubCategory = {true}/>: null}
      <GoodList goods={goods} />
    </div>
  );
};

export default CategoryScreen;
