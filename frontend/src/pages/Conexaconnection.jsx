import React, { Fragment } from "react";
import bgImage from "../assets/implant-baner.webp";
import Category from "../components/Category";

const Conexaconnection = () => {
  return (
    <Fragment>
      {/* <div
        className="w-full h-[400px] flex items-center justify-center flex-col gap-2 lg:gap-6
             bg-cover md:bg-contain overflow-hidden"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.5), rgba(0,0,0,0)), url(${bgImage})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-white/90 text-5xl text-center lg:text-7xl font-bold">
          B&B DENTAL IMPLANT
        </h1>
        <p className="text-white/90 lg:text-2xl mt-4 lg:w-[60%] text-center">
          All B&B DENTAL IMPLANTS are produced to secure the highest standard of
          cleanliness with double etching surface treatments and sterilization
          with gamma rays.
        </p>
      </div> */}
      <div className="w-full h-[400px] relative overflow-hidden flex items-center justify-center ">
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
            EV, 3P, WIDE and PTERYGO implants
          </p>
          <h1 className="text-white text-2xl md:text-5xl font-bold">
            CONEXA CONNECTION
          </h1>
          <p className="text-white text-center w-[80%] md:w-[60%] lg:w-[55%]">
            This tapered connection prevents rotation and ensures high
            resistance to torsional loads thanks to the internal hexagon. In
            addition, the elimination of possible micro-movements through cold
            welding ensures the stability of hard and soft tissues, prosthetic
            components, and their surrounding tissues while respecting the
            biological width. The CONEXA is common to all lines and diameters,
            making it easier to choose transfers and abutments.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Conexaconnection;
