import React, { Fragment } from "react";
import bgImage from "../assets/implant-baner.webp";
import s1 from "../assets/s1.webp";
import s2 from "../assets/s2.webp";
import s3 from "../assets/s3.webp";
import s4 from "../assets/s4.webp";
import s5 from "../assets/s5.webp";
import s6 from "../assets/s6.webp";
import s7 from "../assets/s7.webp";
import s8 from "../assets/s8.webp";
import s9 from "../assets/s9.webp";
import s10 from "../assets/s10.webp";
import s11 from "../assets/s11.webp";
import s12 from "../assets/s12.webp";
import s13 from "../assets/s13.webp";
import s14 from "../assets/s14.webp";
import t1 from "../assets/s-t1.webp";
import t2 from "../assets/s-t2.webp";
import t3 from "../assets/s-t3.webp";
import t4 from "../assets/s-t4.webp";
import t5 from "../assets/s-t5.webp";
import t6 from "../assets/s-t6.webp";

const Surgicalkit = () => {
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
          {/* <p className="text-red-500 tracking-[.3rem] font-semibold">
            FULL digital CUSTOMISED
          </p> */}
          <h1 className="text-white text-2xl md:text-5xl font-bold">
            B&B SURGICAL KITS
          </h1>
          <p className="text-white text-center w-[80%] md:w-[60%] lg:w-[55%]">
            The study and care put into the production of implants are also
            applied to the design of surgical instruments. Although they are{" "}
            also sold separately, B&B Dental has prepared pre-set surgical kits
            dedicated to the main techniques of the DURA-VIT line to guarantee
            that the clinician always has the necessary instruments at the right
            time.
          </p>
          <p className="text-white text-center w-[80%] md:w-[60%] lg:w-[55%]">
            Please note that surgical instruments must be stored with care,
            tested for proper operation and wear, and periodically evaluated for
            replacement to keep them in optimal working order and ensure they
            are safe.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-6 w-[90%] m-auto grid-cols-2 mb-20">
        <img src={t1} alt="" />
        <img src={t2} alt="" />
        <img src={t3} alt="" />
        <img src={t4} alt="" />
        <img src={t5} alt="" />
        <img src={t6} alt="" />
      </div>

      <div className="flex flex-col align-middle justify-center text-center">
        <p className="text-gray-500 text-xs font-bold">3P-000925C</p>
        <h2 className="text-red-600 text-2xl font-bold">
          COMPLETE SURGICAL KIT
        </h2>
        <div className="grid md:grid-cols-2 w-[80%] m-auto gap-4 my-10  ">
          <img src={s1} alt="" />
          <img src={s2} alt="" />
        </div>
      </div>
      <div className="flex flex-col align-middle justify-center text-center">
        <p className="text-gray-500 text-xs font-bold">3D-00093SC</p>
        <h2 className="text-red-600 text-2xl font-bold">GUIDED SURGICAL KIT</h2>
        <div className="grid md:grid-cols-3 w-[90%] m-auto gap-4 my-10  ">
          <img src={s3} alt="" />
          <img src={s4} alt="" />
          <img src={s5} alt="" />
        </div>
      </div>
      <div className="flex flex-col align-middle justify-center text-center">
        <p className="text-gray-500 text-xs font-bold">3P-00095SC</p>
        <h2 className="text-red-600 text-2xl font-bold">
          Reduced simple surgical kit
        </h2>
        <div className="grid md:grid-cols-3 w-[90%] m-auto gap-4 my-10  ">
          <img src={s6} alt="" />
          <img src={s7} alt="" />
          <img src={s8} alt="" />
        </div>
      </div>
      <div className="flex flex-col align-middle justify-center text-center">
        {/* <p className="text-gray-500 text-xs font-bold">3P-00095SC</p> */}
        <h2 className="text-red-600 text-2xl font-bold">
          Reduced simple surgical kit
        </h2>
        <div className="grid md:grid-cols-3 w-[90%] m-auto gap-4 my-10  ">
          <img src={s9} alt="" />
          <img src={s10} alt="" />
          <img src={s11} alt="" />
        </div>
      </div>
      <div className="flex flex-col align-middle justify-center text-center">
        <p className="text-gray-500 text-xs font-bold">OTHER</p>
        <h2 className="text-red-600 text-2xl font-bold">SURGICAL KITS</h2>
        <div className="grid md:grid-cols-3 w-[90%] m-auto gap-4 my-10  ">
          <img src={s12} alt="" />
          <img src={s13} alt="" />
          <img src={s14} alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default Surgicalkit;
