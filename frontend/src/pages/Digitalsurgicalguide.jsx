import React, { Fragment } from "react";
import bgimg from "../assets/digitalsection.png";

const Digitalsurgicalguide = () => {
  return (
    <Fragment>
      <div className="w-full h-[600px] relative overflow-hidden flex items-center justify-center ">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-10"></div>

        {/* Image */}
        <img
          src={bgimg}
          alt="Background"
          className="w-full  object-cover md:object-cover"
        />

        {/* Content on top */}
        <div className="absolute z-20 flex flex-col items-center gap-2 lg:gap-3">
          <h1 className="text-center font-bold text-6xl text-white">
            DIGITAL SURGICAL GUIDE
          </h1>
          <p className="text-center w-[60%] mx-auto text-white md:text-2xl">
            A surgical guide is a customised medical device that guides the
            drills and implants in the most suitable area, making the most of
            the available bone according to the patient’s anatomical
            conformation and predisposition.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Digitalsurgicalguide;
