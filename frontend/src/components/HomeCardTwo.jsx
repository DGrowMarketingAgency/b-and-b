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
          <p className="mb-2 text-lg md:text-xl">
            Double Acid Etched - Two very delicate etching surface treatments
            bring B&B Dental Implant benefits .
          </p>
          <p className="mb-2 text-lg md:text-xl">
            Formation of surface oxide on titanium, as well as cleaning even the
            internal part of threads. Bio-Active treatment forms by subtraction
            a micro-controlled surface roughness which helps osteoblasts first
            to anchor on a cellular level and then to integrate into bone
            tissue, thus shortening osseointegration times. In addition, all
            decontamination processes and surface treatments are conducted under
            cleanroom conditions.
          </p>

          {/* <p className="mb-2 text-lg md:text-xl">
            Argon plasma treatment involves bombarding the surface of the
            implants with the gas argon absolute cleanliness and a uniform
            surface.
          </p> */}
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
