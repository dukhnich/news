import React from "react";
import {createTime} from "../../../shared/helpers/createTime";

const NewsItemFull = ({ title, lead, text, date }) => {

    return (
        <>
            <p className={"small text-muted"}>
                {createTime(date)}
            </p>
            <h1 className={"mb-4"}>{title}</h1>
            <h4 className={"mb-4 text-secondary"}>{lead}</h4>
            <p className={"article-text"}>{text}</p>
        </>
    );
};

export default NewsItemFull;
