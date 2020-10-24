import CategoryList from "../../home/components/category-list";
import React from "react";
import {gql} from "graphql-request";
import {client} from "../../../shared/hooks/use-query";


const createMutation = gql`
  mutation goodAdd {
    OrderGoodUpsert(orderGood:{ good: {_id: "5dc4a7ea5df9d670df48cc77"}, count: 1}) {
      _id
      total
    }
  }
`;

const Good = (props) => {

    const {categories, images, name, description, price, _id} = props.data;
    const good = {
        _id: _id,
        count: 1
    }
    const addGood = (e) => {
        e.preventDefault();
        client.request(createMutation).then(console.log);
    };
    console.log(good)
    return (
        <div className="card">
            <CategoryList categories={categories} />
            <div className="card-header mb-2 d-flex justify-content-between align-items-center">
                <h5 className="card-title m-0">{name}</h5>
                <div className="alert alert-info m-0">{price}</div>
            </div>
            {images.length ?
                <img src={"http://shop-roles.asmer.fs.a-level.com.ua/"+images[0].url} className="card-img-top" alt={name}/>
                : null
            }
            <div className="card-body">
                <p className="card-text text-left">{description}</p>
                <button
                    className="btn btn-primary"
                    onClick={addGood}
                >
                    Buy
                </button>
            </div>
        </div>
    )
}

export default Good