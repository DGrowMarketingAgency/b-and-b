import React, { Fragment, useEffect } from "react";
import bgImage from "../assets/implant-baner.webp";
import uniONE from "../assets/uni-1.webp";
import uniTwo from "../assets/uni-2.webp";
import uniThree from "../assets/uni-3.webp";
import uniFour from "../assets/uni-4.webp";
import uniFive from "../assets/uni-5.webp";
import uniSix from "../assets/uni-6.webp";
import ProductSlider from "../components/ProductSlider";
import t1 from "../assets/u-t1.webp";
import t2 from "../assets/u-t2.webp";
import t3 from "../assets/u-t3.webp";
import t4 from "../assets/u-t4.webp";
import t5 from "../assets/u-t5.webp";
import t6 from "../assets/u-t6.webp";

const Uniqueimplant = () => {
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <Fragment>
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
          {/* <p className="text-red-500 tracking-[.3rem] font-semibold">
          EV, 3P, WIDE and PTERYGO implants
        </p> */}
          <h1 className="text-white text-2xl md:text-5xl font-bold">
            B&B DENTAL IMPLANT
          </h1>
          <p className="text-white text-center w-[80%] md:w-[60%] lg:w-[55%]">
            All B&B surgical instruments are differentiated and colour-coded,
            making the choice intuitive and quick while offering the highest
            degree of ergonomics and simplicity. <br /> <br />
            3P, EV, Wide, and Pterygo are equipped with a single connection
            called CONEXA to simplify the management of components and work in
            absolute safety.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-6 w-[90%] m-auto grid-cols-2 mt-10 mb-20">
        <img src={t1} alt="" />
        <img src={t2} alt="" />
        <img src={t3} alt="" />
        <img src={t4} alt="" />
        <img src={t5} alt="" />
        <img src={t6} alt="" />
      </div>
      <section
        className="w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 "
        id="design1"
      >
        <div className="flex align-middle justify-center ">
          <img className="w-[80% ] m-auto" src={uniONE} alt="" />
        </div>
        <div className=" text-black flex flex-col justify-center gap-4  p-4">
          <div className="">
            <p className="text-gray-500 text-xs font-bold">CONEXA CONNECTION</p>
            <h2 className="text-red-600 text-2xl font-bold">EV IMPLANT</h2>
          </div>
          <div className="">
            <h3 className=" text-xl font-bold">
              MORSE TAPER & INTERNAL HEXAGON
            </h3>
            <ul>
              <li>• Accurate positioning of prosthetic components </li>
              <li>• Increased mating surface between implant and abutment</li>
              <li>• High stability </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">
              COLLAR WITH REVERSE TAPER AND ANNULAR MICRO SPLINING
            </h3>
            <ul>
              <li>• Excellent support of soft tissues</li>
              <li>• Maximum volume of alveolar bone </li>
              <li>• Minor crestal bone resorption </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">
              SELF-TAPPING, DOUBLE-THREAD SPIRAL
            </h3>
            <ul>
              <li>• Sharp double thread for spiral tap increased depth</li>
              <li>• Ensure easy insertion and osteocondensation </li>
              <li>• Very high primary stability </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">PENETRATING TIP</h3>
            <ul>
              <li>• Allows the implant to penetrate the pre-prepared site</li>
              <li>• Ideal anchoring</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">PROPERTIES </h3>
            <ul>
              <li>• Ideal in spongy bone (D3-D4). </li>
              <li>• Allows condensation. </li>
              <li>• Ideal in post-extraction sites. </li>
              <li>• Grade 4 Titanium. </li>
            </ul>
          </div>
        </div>
      </section>
      <section
        className="w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 "
        id="design2"
      >
        <div className=" text-black flex flex-col justify-center gap-4  p-4">
          <div className="">
            <p className="text-gray-500 text-xs font-bold">CONEXA CONNECTION</p>
            <h2 className="text-red-600 text-2xl font-bold">3P IMPLANT</h2>
          </div>
          <div className="">
            <h3 className=" text-xl font-bold">
              MORSE TAPER & INTERNAL HEXAGON
            </h3>
            <ul>
              <li>• Accurate positioning of prosthetic components </li>
              <li>• Increased mating surface between implant and abutment</li>
              <li> • High stability </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">
              COLLAR MICRO-THREADING
            </h3>
            <ul>
              <li>• Increases primary stability</li>
              <li> • Makes implant placement easier </li>
              <li>• Reduces vertical prosthesis load </li>
              <li> • Helps soft tissue healing </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">
              TRIPLE-THREAD SPIRAL
            </h3>
            <ul>
              <li>• 60° bevelled profile threading </li>
              <li>
                • Increases mating surface with bone to ensure less invasive
                procedures
              </li>
              <li>• Improves osseointegration </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">
              “BONE-FRIENDLY” TIP
            </h3>
            <ul>
              <li>
                • The rounded shape helps lifting the maxillary sinus membrane
              </li>
              <li>• Reduces the risk of perforation </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">PROPERTIES </h3>
            <ul>
              <li>• Excellent in all bone types (especially D1-D2). </li>
              <li>• Ensure high primary stability. </li>
              <li>• Ideal in sites next to sinus or nerve.</li>
              <li>• Grade 4 Titanium. </li>
            </ul>
          </div>
        </div>
        <div className="flex align-middle justify-center ">
          <img className="w-[80% ] m-auto" src={uniTwo} alt="" />
        </div>
      </section>
      <section
        className="w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 "
        id="design3"
      >
        <div className="flex align-middle justify-center ">
          <img className="w-[80% ] m-auto" src={uniThree} alt="" />
        </div>
        <div className=" text-black flex flex-col justify-center gap-4  p-4">
          <div className="">
            <p className="text-gray-500 text-xs font-bold">CONEXA CONNECTION</p>
            <h2 className="text-red-600 text-2xl font-bold">WIDE IMPLANT</h2>
          </div>
          <div className="">
            <h3 className=" text-xl font-bold">
              MORSE TAPER & INTERNAL HEXAGON
            </h3>
            <ul>
              <li>• Accurate positioning of prosthetic components</li>
              <li> • Increased mating surface between implant and abutment </li>
              <li>• High stability </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">
              COLLAR WITH REVERSE TAPER AND ANNULAR MICRO SPLINING
            </h3>
            <ul>
              <li>• Excellent support of soft tissues</li>
              <li>• Maximum volume of alveolar bone </li>
              <li>• Minor crestal bone resorption </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">
              TRIPLE-THREAD SPIRAL
            </h3>
            <ul>
              <li>• 60° bevelled profile threading </li>
              <li>
                • Increases mating surface with bone to ensure less invasive
                procedures
              </li>
              <li>• Improves osseointegration </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">
              “BONE-FRIENDLY” TIP
            </h3>
            <ul>
              <li>
                • The rounded shape helps lifting the maxillary sinus membrane
              </li>
              <li>• Reduces the risk of perforation </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">PROPERTIES </h3>
            <ul>
              <li>
                • Allows placing an implant in a premolar and molar extraction
                site
              </li>
              <li>• Maximises bone preservation </li>
              <li>• Minimises instances of required bone grafting</li>
              <li> • Grade 4 Titanium </li>
            </ul>
          </div>
        </div>
      </section>
      <section
        className="w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 "
        id="design4"
      >
        <div className=" text-black flex flex-col justify-center gap-4  p-4">
          <div className="">
            <p className="text-gray-500 text-xs font-bold">CONEXA CONNECTION</p>
            <h2 className="text-red-600 text-2xl font-bold">PTERYGO IMPLANT</h2>
          </div>
          <div className="">
            <h3 className=" text-xl font-bold">
              MORSE TAPER & INTERNAL HEXAGON
            </h3>
            <ul>
              <li>• Precise positioning of prosthetic components </li>
              <li>
                • Increased contact area between implant surface and abutment
              </li>
              <li>• High stability </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">
              COLLAR WITH MACHINED SURFACE
            </h3>
            <ul>
              <li>• Maximum cleanability </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">
              MODULAR THREADS AND GRADUAL TAPERING
            </h3>
            <ul>
              <li>• Threads suitable for different bone densities </li>
              <li>
                • Ideal for easy insertion along the entire length of the
                implant
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">
              “BONE FRIENDLY” APEX
            </h3>
            <ul>
              <li>
                • The rounded shape helps lifting the maxillary sinus membrane
              </li>
              <li>• Reduces the risk of perforation </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">PROPERTIES </h3>
            <ul>
              <li>
                • Specific implant design for insertion in the pterygoid region
              </li>
              <li>• Maximises bone preservation </li>
              <li>
                • Minimises instances of required bone grafting or sinus lifting
              </li>
              <li>• Grade 4 Titanium. </li>
            </ul>
          </div>
        </div>
        <div className="flex align-middle justify-center ">
          <img className="w-[80% ] m-auto" src={uniFour} alt="" />
        </div>
      </section>
      <section
        className="w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 "
        id="design5"
      >
        <div className="flex align-middle justify-center ">
          <img className="w-[80% ] m-auto" src={uniFive} alt="" />
        </div>
        <div className=" text-black flex flex-col justify-center gap-4  p-4">
          <div className="">
            <p className="text-gray-500 text-xs font-bold">CONEXA CONNECTION</p>
            <h2 className="text-red-600 text-2xl font-bold">
              SLIM IMPLANT Ø3.0
            </h2>
          </div>
          <div className="">
            <h3 className=" text-xl font-bold">COLLAR MICRO-THREADING</h3>
            <ul>
              <li>• Increases primary stability </li>
              <li>• Makes implant placement easier</li>
              <li>
                • Reduces vertical prosthesis load • Helps soft tissue healing
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">
              TRIPLE-THREAD SPIRAL
            </h3>
            <ul>
              <li>• 60° bevelled profile threading </li>
              <li>
                • Increases mating surface with bone to ensure less invasive
                procedures
              </li>
              <li>• Improves osseointegration </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">NARROW TIP</h3>
            <ul>
              <li>
                • Not suitable for sites close to the nerve or sinus membrane.{" "}
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="text-red-500 text-xl font-bold">PROPERTIES </h3>
            <ul>
              <li>• Excellent in all bone types (especially D1-D2). </li>
              <li>• Ensure high primary stability. </li>
              <li>• Not ideal in sites next to sinus or nerve. </li>
              <li>• Grade 5 Titanium. </li>
            </ul>
          </div>
        </div>
      </section>
      <section
        className="w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 "
        id="design6"
      >
        <div className=" text-black flex flex-col justify-center gap-4  p-4">
          <div className="">
            <p className="text-gray-500 text-xs font-bold">REDUCED CONECTION</p>
            <h2 className="text-red-600 text-2xl font-bold">MINI IMPLANT</h2>
          </div>
          <div className="">
            <h3 className=" text-xl font-bold">BALL HEAD</h3>
            <ul>
              <li>
                To allow immediate long-term retention of prostheses with the
                use of retentive caps or o-rings
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">
              STANDARD TRANSMUCOSAL ROUTE
            </h3>
            <ul>
              <li>One standard size </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">
              FINE SPIRAL THREAD
            </h3>
            <ul>
              <li>Suitable for hard bones, easily inserted </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">
              WIDE SPIRED THREAD
            </h3>
            <ul>
              <li>Suitable for spongy bones</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-red-500 text-xl font-bold">PROPERTIES </h3>
            <ul>
              <li>• They allow positioning in areas of limited space. </li>
              <li>
                • Ideal for stabilising removable prostheses and for single
                teeth
              </li>
              <li>• Can be used with immediate load. </li>
              <li>• Grade 5 Titanium.</li>
            </ul>
          </div>
        </div>
        <div className="flex align-middle justify-center ">
          <img className="w-[80% ] m-auto" src={uniSix} alt="" />
        </div>
      </section>
    </Fragment>
  );
};

export default Uniqueimplant;
