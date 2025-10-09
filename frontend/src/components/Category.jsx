import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import categoryImage1 from "../assets/download.webp";
import categoryImage2 from "../assets/download (2).webp";
import categoryImage3 from "../assets/download (3).webp";
import categoryImage4 from "../assets/download (4).webp";
import categoryImage5 from "../assets/download (5).webp";
import categoryImage6 from "../assets/download (6).webp";

const Category = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 lg:gap-6 my-10 px-4 lg:px-0 lg:w-[80%] mx-auto">
        <Link to="/">
          <div className="">
            <img src={categoryImage1} alt="" />
          </div>
        </Link>
        <Link to="/">
          <div className="">
            <img src={categoryImage2} alt="" />
          </div>
        </Link>
        <Link to="/">
          <div className="">
            <img src={categoryImage3} alt="" />
          </div>
        </Link>
        <Link to="/">
          <div className="">
            <img src={categoryImage4} alt="" />
          </div>
        </Link>
        <Link to="/">
          <div className="">
            <img src={categoryImage5} alt="" />
          </div>
        </Link>
        <Link to="/">
          <div className="">
            <img src={categoryImage6} alt="" />
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

export default Category;
