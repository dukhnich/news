import React from "react";
import CategoryList from "./category-list";
import { Link } from "react-router-dom";

const Category = ({ name, image, subCategories, isSubCategory, _id }) => {
  return (
    <div className={`col-sm-12 col-md-${isSubCategory ? 12 : 2} my-1`}>
      <div className={`${isSubCategory === false ? "border" : ""}`}>
        <Link
          to={`/${isSubCategory ? "subcategory" : "category"}/${_id}`}
          className={isSubCategory ? "" : "font-weight-bolder"}
        >
          {name}
        </Link>
        {isSubCategory === false && image !== null ? (
          <img src={image} alt={name} />
        ) : null}

        <CategoryList
          categories={subCategories === null ? [] : subCategories}
          isSubCategory={subCategories !== null}
        />
      </div>
    </div>
  );
};

Category.defaultProps = {
  subCategories: [],
  isSubCategory: false,
  image: null
};

export default Category;
