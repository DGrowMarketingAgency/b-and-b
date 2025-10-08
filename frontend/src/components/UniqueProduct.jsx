import React, { Fragment } from "react";
import products from "../dataProduct/ProductData";
import ProductSlider from "./ProductSlider";

const UniqueProduct = () => {
  return (
    <Fragment>
      <div className="my-12 w-[90%] mx-auto">
        <ProductSlider products={products} />
      </div>
    </Fragment>
  );
};

export default UniqueProduct;
