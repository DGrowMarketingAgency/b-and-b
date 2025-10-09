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
            Our 30-year history of research and development ensures that B&B
            Implant meets the highest European standards by being manufactured
            in the centre of the high-technology district in Italy, Bologna. Now
            B&B is available in more than 40 countries with worldwide
            certifications.
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
