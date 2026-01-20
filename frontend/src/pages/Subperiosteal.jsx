import React, { Fragment } from "react";

import sgOne from "../assets/sg-1.webp";
import sgTwo from "../assets/sg-2.webp";
import bgImage from "../assets/implant-baner.webp";

const Subperiosteal = () => {
  return (
    <Fragment>
      <div className="w-full h-[400px] relative overflow-hidden flex items-center justify-center mb-6">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-10"></div>

        {/* Image */}
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover md:object-contain"
        />

        {/* Content on top */}
        <div className="absolute z-20 flex flex-col items-center gap-2 lg:gap-3">
          <p className="text-red-500 tracking-[.3rem] font-semibold">
            FULL digital CUSTOMISED
          </p>
          <h1 className="text-white text-2xl md:text-5xl font-bold text-center">
            SUBPERIOSTEAL IMPLANT 'IUXTA'
          </h1>
          <p className="text-white text-center w-[80%] md:w-[60%] lg:w-[55%]">
            Fully Digitalised and Customised Dental Implants, IUXTA, are
            Produced via Laser Melting and based on the Patient’s Clinical
            Needs.
          </p>
        </div>
      </div>
      <section className="w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 ">
        <div className="flex align-middle justify-center ">
          <img className="w-[80% ] m-auto" src={sgOne} alt="" />
        </div>
        <div className=" text-black flex flex-col justify-center gap-4  p-4 text-center">
          <div className="flex flex-col gap-4">
            <p className="text-gray-500 text-xs font-bold">IUXTA IMPLANTS</p>
            <h2 className="text-red-600 text-2xl font-bold ">
              Subperiosteal Implants
            </h2>
            <p>
              Unlike Classical and More Well-known Endosseous Implants, the
              Iuxta Implants are Positioned Subperiosteally, They are Placed by
              taking Advantage of the Morphology of the Bone Structure and
              Subsequently Fixed to the Bone with the use of Osteosynthesis
              Screws.
            </p>
          </div>
        </div>
      </section>
      <section className="w-[80%] m-auto grid grid-cols-1 md:grid-cols-2  text-center">
        <div className=" text-black flex flex-col justify-center gap-4  p-4">
          <div className="">
            <p className="text-gray-500 text-xs font-bold">
              Subperiosteal Implants
            </p>
            <h2 className="text-red-600 text-2xl font-bold">
              Another Possibility of Implant
            </h2>
            <p style={{ textTransform: "capitalize" }}>
              This suitable solution is considered by the clinician in order to
              resolve rehabilitation cases in patients who suffer from severe
              bone atrophy and who consequently cannot be treated with classical
              implant surgery. Moreover, these patients can rarely undergo such
              extensive and complex regenerative procedures: these operations
              entail very long recovery times and they do not have acceptable
              guarantees of success. screws.
            </p>
          </div>
        </div>
        <div className="flex align-middle justify-center ">
          <img className="w-[80% ] m-auto" src={sgTwo} alt="" />
        </div>
      </section>
    </Fragment>
  );
};

export default Subperiosteal;
