import React, { Fragment } from "react";
import singleConnection from "../assets/single connection.webp";

const HomeCardOne = () => {
  return (
    <Fragment>
      <div className="grid md:grid-cols-2 md:ml-8 ">
        <div className="p-6 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase">
            <span className="text-2xl md:text-7xl text-red-700">6 unique </span>{" "}
            <br /> designs but single connection
          </h2>
          <p className="mb-6 text-xl md:text-2xl">
            All of Dura-Vit implants have the potential to manage any
            possibilities in daily practice. Conexa single connection simplifies
            the management of prosthetics and works in absolute safety.
          </p>
          <button
            className="bg-red-600 w-fit px-12 py-2 text-lg
            text-white font-semibold rounded hover:bg-red-700 transition uppercase"
          >
            Find more
          </button>
        </div>
        <div className="">
          <img className="w-[80%] md:w-[100%]" src={singleConnection} alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default HomeCardOne;
