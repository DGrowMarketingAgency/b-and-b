import React, { Fragment } from "react";
import bgImage from "../assets/implant-baner.webp";
import conOne from "../assets/con-01.jpg";
import conTwo from "../assets/con-2.webp";
import conThree from "../assets/con-3.webp";
import conFour from "../assets/con-4.webp";
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
          <p className="text-red-500 tracking-[.3rem] font-semibold text-center">
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
      <section className="w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 ">
        <div className="bg-gray-500 ">
          <img className="w-[80% ] m-auto" src={conOne} alt="" />
        </div>
        <div className=" text-black flex flex-col justify-center gap-4  p-4">
          <div className="">
            <p className="text-gray-500 text-xs font-bold">B&B DENTAL</p>
            <h2 className="text-red-600 text-2xl font-bold">
              CONEXA CONNECTION
            </h2>
            <p>
              Implants of lines 3P, EV, Wide, and Pterygo are equipped with a
              single connection called CONEXA to simplify the management of
              components and work in absolute safety.
            </p>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">PROSTHETIC SCREW</h3>
            <ul>
              <li>- For abutment conometric locking </li>
              <li>
                - It is not subjected to loads, eliminating the risk of breakage
                or loosening
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">
              PLATFORM SWITCHING
            </h3>
            <ul>
              <li>- Reduces possible bone loss </li>
              <li>- Provides excellent support for mucous tissues</li>
              <li>
                - Improves the aesthetic profile while preserving the biological
                width
              </li>
              <li>- Allows for greater load distribution </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">
              “MORSE-TYPE" TAPER AT 5° TOTAL{" "}
            </h3>
            <ul>
              <li>- Cold welding </li>
              <li>- Eliminates micro-movements </li>
              <li>- Ensures an excellent bacterial sealing</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">
              INTERNAL HEXAGON{" "}
            </h3>
            <ul>
              <li>
                -It ensures anti-rotation feature for absolute abutment
                positioning precision
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 ">
        <div className=" text-black flex flex-col justify-center gap-4  p-4">
          <div className="">
            <p className="text-gray-500 text-xs font-bold">B&B DENTAL</p>
            <h2 className="text-red-600 text-2xl font-bold">
              keys & drivers tightening
            </h2>
          </div>
          <div className="">
            <h3 className=" text-xl font-bold">
              3P, EV, WIDE, PTERYGO LINES - CONEXA DURA-VITCONNECTION
            </h3>
            <ul>
              <li>PROSTHETIC SCREWDRIVERS: MAXIMUM 25 Ncm </li>
              <li>CONTRA-ANGLE DRIVERS: MAXIMUM 35 Ncm</li>
              <li>RATCHET DRIVERS: MAXIMUM 70 Ncm </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">
              SLIM LINE -SLIM DURA-VIT CONNECTION
            </h3>
            <ul>
              <li>CONTRA-ANGLE DRIVERS: MAXIMUM 35 Ncm </li>
              <li>RATCHET AND MANUAL DRIVERS: MAXIMUM 45 Ncm </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">
              MINI LINE CONNECTION
            </h3>
            <ul>
              <li>RATCHET AND MANUAL DRIVERS: MAXIMUM 50Ncm </li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-500 ">
          <img className="w-[80% ] m-auto" src={conTwo} alt="" />
        </div>
      </section>
      <section className="w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 ">
        <div className="bg-gray-500 ">
          <img className=" m-auto" src={conThree} alt="" />
        </div>
        <div className=" text-black flex flex-col justify-center gap-4  p-4">
          <div className="">
            <p className="text-gray-500 text-xs font-bold">B&B DENTAL</p>
            <h2 className="text-red-600 text-2xl font-bold">
              tightening instructions
            </h2>
          </div>
          <div className="">
            <h3 className=" text-xl font-bold">
              3P, EV, WIDE, PTERYGO LINES - CONEXA DURA-VITCONNECTION
            </h3>
            <ul>
              <li>TRANSFERS AND HEALING COMPONENTS : Finger force</li>
              <li>
                PASSING SCREW ABUTMENTS(titanium, peek, Ti-links, Ti-bases,
                abutments from premilled): 25 Ncm
              </li>
              <li>PILLARS(MUA, spherical, flat, equator): 25 Ncm</li>
              <li>ABUTMENTS FOR MUA(titanium,castable,Ti-link) : 15 Ncm</li>
              <li>ABUTMENTS FOR FLAT(titanium, castable,Ti-link): 20 Ncm</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">
              SLIM LINE -SLIM DURA-VIT CONNECTION
            </h3>
            <ul>
              <li>TRANSFERS AND HEALING COMPONENTS: Finger force </li>
              <li>- Provides excellent support for mucous tissues</li>
              <li>
                PASSING SCREW ABUTMENTS : 20 Ncm (titanium, peek, Ti-links,
                Ti-bases, abutments from premilled)
              </li>
              <li>PILLARS(spherical, flat, equator): 20 Ncm </li>
              <li>ABUTMENTS FOR FLAT(titanium, castable,T i-link): 15 Ncm </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 ">
        <div className=" text-black flex flex-col justify-center gap-4  p-4">
          <div className="">
            <p className="text-gray-500 text-xs font-bold">B&B DENTAL</p>
            <h2 className="text-red-600 text-2xl font-bold">
              keys & drivers tightening
            </h2>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">
              3P, EV, WIDE, PTERYGO LINES - CONEXA DURA-VITCONNECTION
            </h3>
            <ul>
              <li>PROSTHETIC SCREWDRIVERS: MAXIMUM 25 Ncm </li>
              <li>CONTRA-ANGLE DRIVERS: MAXIMUM 35 Ncm</li>
              <li>RATCHET DRIVERS: MAXIMUM 70 Ncm </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">
              SLIM LINE -SLIM DURA-VIT CONNECTION
            </h3>
            <ul>
              <li>CONTRA-ANGLE DRIVERS: MAXIMUM 35 Ncm </li>
              <li>RATCHET AND MANUAL DRIVERS: MAXIMUM 45 Ncm </li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-500 ">
          <img className="w-[80% ] m-auto" src={conFour} alt="" />
        </div>
      </section>
    </Fragment>
  );
};

export default Conexaconnection;
