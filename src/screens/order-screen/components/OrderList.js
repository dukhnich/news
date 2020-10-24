import React from "react";
import {Link} from "react-router-dom";

const OrderList = ({goods}) => {
    return (
        <ul className="list-group">
            {goods === null ? (
                <h5>There is no goods</h5>
            ) : (
                goods.map((good) => (
                    <li key={good._id} className="list-group-item">
                        <Link
                            to={`/good/${good._id}`}
                            className={"mr-3"}
                        >
                            {good.good.name}
                        </Link>
                        <span>{good.price}</span>
                    </li>
                ))
            )}
        </ul>
    )
}

export default OrderList