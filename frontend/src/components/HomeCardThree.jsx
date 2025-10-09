import React, { Fragment } from "react";
import singleConnection from "../assets/FULLYDIGITALISED.webp";

const HomeCardThree = () => {
  return (
    <Fragment>
      <div className="grid md:grid-cols-2 md:ml-8">
        <div className="p-6 flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 uppercase text-red-500">
            ARGON PLASMA BOMBING TREATMENT
          </h2>
          <p className="mb-6 text-xl md:text-2xl">
            Argon plasma treatment involves bombarding the surface of the
            implants with the gas argon, which removes any contaminants and
            activates the metal atoms by exciting their atoms, making them more
            receptive to any interaction, such as a 30% increase.
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

export default HomeCardThree;
