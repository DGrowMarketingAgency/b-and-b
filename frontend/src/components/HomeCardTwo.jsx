import React, { Fragment } from "react";
import singleConnection from "../assets/SURFACETREATMENT.webp";

const HomeCardTwo = () => {
  return (
    <Fragment>
      <div className="grid md:grid-cols-2  ">
        <div className="width-full flex justify-center items-center">
          <img
            className="w-[80%] md:w-[95%] overflow-hidden rounded"
            src={singleConnection}
            alt=""
          />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <h2 className="text-2xl  font-bold mb-6 uppercase">
            <span className="text-2xl md:text-4xl text-red-700">
              SURFACE TREATMENT{" "}
            </span>{" "}
          </h2>
          <p className="mb-6 text-lg md:text-2xl">
            Two very delicate etching surface treatments bring B&B Dental
            Implant benefits: absolute cleanliness and a uniform surface.
          </p>

          <p className="mb-6 text-lg md:text-xl">
            Argon plasma treatment involves bombarding the surface of the
            implants with the gas argon
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

export default HomeCardTwo;
