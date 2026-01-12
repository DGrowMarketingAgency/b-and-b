import React, { Fragment } from "react";
import singleConnection from "../assets/Europeanstandards.webp";

const HomeCardFour = () => {
  return (
    <Fragment>
      <div className="grid md:grid-cols-2 ">
        <div className="width-full flex justify-center items-center">
          <img
            className="w-[80%] md:w-[95%] rounded"
            src={singleConnection}
            alt=""
          />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 uppercase text-red-500">
            European standards
          </h2>
          <p className="mb-6 text-xl md:text-2xl">
            Our 30 Years <span className="md:text-4xl">+</span> History of
            Research and Development Ensures that B&B Implant meets the Highest
            European Standards by being Manufactured in the centre of the
            High-Technology District in Italy, Bologna. Now B&B is available in
            more than <br /> 50<span className="md:text-4xl">+</span> countries
            with Worldwide Certifications.
          </p>
          <button
            className="bg-red-600 w-fit px-12 py-2 text-lg
            text-white font-semibold rounded hover:bg-red-700 transition uppercase"
          >
            Find more
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeCardFour;
