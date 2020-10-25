import React from "react";
import { Link } from "react-router-dom";
import {createTime} from "../../../../shared/helpers/createTime";

const NewsItem = ({ title, lead, id, date }) => {

  return (
    <div className={`text-left border p-2`}>
      <p className={"small text-muted text-right"}>
        {createTime(date)}
      </p>
      <h5
          className={"font-weight-bolder mb-3"}
      >
        <Link
        to={`/news/${id}`}
      >
        {title}
      </Link>
      </h5>
      <p>{lead}</p>
    </div>
  );
};

export default NewsItem;
