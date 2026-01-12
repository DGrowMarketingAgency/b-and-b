import React, { Fragment } from "react";
import bgimg from "../assets/digitalsection.png";

import img1 from "../assets/d1.webp";
import img2 from "../assets/d2.webp";
import img3 from "../assets/d3.webp";
import img4 from "../assets/dg-2.webp";
import img5 from "../assets/dg1.webp";
import img6 from "../assets/ds1.webp";
import img7 from "../assets/ds2.webp";
import img8 from "../assets/ds3.webp";
import img9 from "../assets/ds4.webp";
import img10 from "../assets/ds5.webp";
import img11 from "../assets/dg-2.webp";
import img12 from "../assets/dg1.webp";

const Digitalsurgicalguide = () => {
  return (
    <Fragment>
      <div className="w-full min-h-[70vh] md:min-h-[80vh] lg:h-[600px] relative overflow-hidden flex items-center justify-center">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10"></div>

        {/* Background Image */}
        <img
          src={bgimg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content */}
        <div className="relative z-20 px-4 flex flex-col items-center gap-4 md:gap-6 max-w-5xl text-center">
          <h1
            className="font-bold text-white 
      text-2xl sm:text-3xl md:text-4xl lg:text-6xl"
          >
            DIGITAL SURGICAL GUIDE
          </h1>

          <p
            className="text-white 
      text-sm sm:text-base md:text-lg lg:text-2xl 
      max-w-full sm:max-w-xl md:max-w-3xl leading-relaxed"
          >
            A surgical guide is a customised medical device that guides the
            drills and implants in the most suitable area, making the most of
            the available bone according to the patient’s anatomical
            conformation and predisposition.
          </p>
        </div>
      </div>

      <section class="w-full bg-white py-12 md:py-20">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div class="w-full lg:w-1/2 flex justify-center">
              <img
                src={img12}
                alt="Surgical Guide"
                class="w-full max-w-md md:max-w-lg object-contain"
              />
            </div>

            <div class="w-full lg:w-1/2 text-center lg:text-left">
              <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                SURGICAL GUIDE
              </h2>

              <p class="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Dental implant surgery can be done manually, but using a
                surgical guide alongside advanced planning software is gaining
                traction. Digital design allows for quick, precise, and
                cost-effective creation of guides, resembling acrylic stents,
                providing stable support for surgery, enhancing precision, and
                improving patient experience. The popularity of guided implant
                placement has surged recently due to faster computers, better
                software, and more CBCT scanners in dental offices, making it
                more viable and economical.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="w-full bg-gradient-to-b from-[#060b3a] to-[#020626] py-16 md:py-24">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <p class="text-sm tracking-widest text-gray-300 uppercase mb-2">
              Surgical Guide
            </p>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              DIGITAL WORKFLOW
            </h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            <div class="text-center text-white">
              <div class="w-28 h-28 mx-auto rounded-full bg-white flex items-center justify-center mb-6">
                <img src={img6} alt="Diagnosis" class="object-contain" />
              </div>
              <h3 class="font-semibold text-lg mb-4">1. DIAGNOSIS</h3>
              <p class="text-sm leading-relaxed text-gray-300">
                To obtain a precise and usable image from X-rays, impressions,
                and intraoral scans, it’s essential to configure the parameters
                accurately and ensure the proper positioning of the guide STL.
              </p>
            </div>

            <div class="text-center text-white">
              <div class="w-28 h-28 mx-auto rounded-full bg-white flex items-center justify-center mb-6">
                <img
                  src={img7}
                  alt="Radiographic Template"
                  class="object-contain"
                />
              </div>
              <h3 class="font-semibold text-lg mb-4">
                2. RADIOGRAPHIC TEMPLATE
              </h3>
              <p class="text-sm leading-relaxed text-gray-300">
                For edentulous patients or those with significant metal
                restorations, a radiographic template aligns DICOM files and
                models. Verifying bone thickness, spacing, and avoiding metal
                interference is critical.
              </p>
            </div>

            <div class="text-center text-white">
              <div class="w-28 h-28 mx-auto rounded-full bg-white flex flex-col items-center justify-center mb-6">
                <img src={img8} alt="Data Upload" class=" object-contain" />
                <span class="text-xs text-gray-600">Upload</span>
              </div>
              <h3 class="font-semibold text-lg mb-4">3. DATA UPLOAD</h3>
              <p class="text-sm leading-relaxed text-gray-300 mb-6">
                Patient data must be digitised for software comprehension:
                extracting bone structure from DICOM files, capturing soft
                tissues via STL, and establishing precise spatial alignment.
              </p>

              <button class="px-5 py-2 bg-gray-500 hover:bg-gray-400 text-white text-sm rounded transition">
                GO TO ORDER
              </button>
            </div>

            <div class="text-center text-white">
              <div class="w-28 h-28 mx-auto rounded-full bg-white flex items-center justify-center mb-6">
                <img src={img9} alt="Planning" class=" object-contain" />
              </div>
              <h3 class="font-semibold text-lg mb-4">4. PLANNING</h3>
              <p class="text-sm leading-relaxed text-gray-300">
                After acquiring files, seamless software integration enables
                meticulous planning. Aligning collected data ensures precise
                implant placement using advanced planning systems.
              </p>
            </div>

            <div class="text-center text-white">
              <div class="w-28 h-28 mx-auto rounded-full bg-white flex items-center justify-center mb-6">
                <img src={img10} alt="Surgery" class=" object-contain" />
              </div>
              <h3 class="font-semibold text-lg mb-4">
                5. SURGICAL GUIDE AND SURGERY
              </h3>
              <p class="text-sm leading-relaxed text-gray-300">
                The surgical guide is modelled using planning software. Proper
                tolerance evaluation ensures accuracy. Before surgery, guides
                and temporary restorations are shipped safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="w-full bg-white py-16 md:py-24">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-wide">
              TYPES OF SURGICAL GUIDES
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            <div class="text-center">
              <img
                src={img1}
                alt="Dental Support Guide"
                class="mx-auto mb-8 w-full max-w-sm object-contain"
              />

              <h3 class="font-semibold text-lg mb-4 text-gray-900">
                DENTAL SUPPORT GUIDE
              </h3>

              <p class="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                If the patient has a residual dentition, the template can use it
                as a support to achieve stability. If greater stability is
                required, crestal pins should be used. These are inserted after
                using a lance drill and chosen with a diameter consistent with
                the sleeve and implant length.
              </p>
            </div>

            <div class="text-center">
              <img
                src={img3}
                alt="Mucosal Supported Guide"
                class="mx-auto mb-8 w-full max-w-sm object-contain"
              />

              <h3 class="font-semibold text-lg mb-4 text-gray-900">
                MUCOSAL SUPPORTED GUIDE
              </h3>

              <p class="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                When no teeth are present, the template relies exclusively on
                mucosal support. Lateral or crestal pins may be required. After
                drilling with a pin drill, the template is secured with
                silicone. Crestal pins can be used when lateral pins are
                insufficient.
              </p>
            </div>

            <div class="text-center">
              <img
                src={img2}
                alt="Bone Supported Guide"
                class="mx-auto mb-8 w-full max-w-sm object-contain"
              />

              <h3 class="font-semibold text-lg mb-4 text-gray-900">
                BONE SUPPORTED GUIDE
              </h3>

              <p class="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                Bone-supported templates rest directly on bone after soft tissue
                removal and are used when bone anatomy is irregular. These
                guides are fixed using lateral pins after drilling, with
                optional crestal pins to enhance stability.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="w-full bg-white py-16 md:py-24">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div class="text-center lg:text-left">
              <p class="text-xs tracking-widest text-gray-500 uppercase mb-3">
                HOW TO USE THE SURGICAL KIT
              </p>

              <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                GUIDE SURGICAL KIT
              </h2>

              <div class="space-y-6 text-gray-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                <p>
                  Prior to outlining the operative protocol, understanding the
                  surgical kit’s accessories is essential. B&B DENTAL SURGICAL
                  KIT’s instrument design suits guided insertion of SLIM, 3P,
                  and EV line implants. Drill necks ensure precise insertion
                  into guided sleeves, marking a 9 mm distance from the bone’s
                  crestal edge.
                </p>

                <p>
                  Materials comply with Directive 93/42 and Law 46/97, selected
                  for specific intended use. Instruments are non-sterile; codes,
                  descriptions, and lot numbers are labeled on packages. Proper
                  cleaning, disinfection, and sterilization are imperative
                  before use.
                </p>

                <p>
                  Drill wear varies with bone density, particularly harder
                  bones, impacting residual cutting capacity. Regularly assess
                  cutting capacity, especially with initial tools.
                </p>
              </div>

              <div class="mt-10">
                <button class="px-8 py-3 bg-gray-600 text-white text-sm tracking-wide hover:bg-gray-700 transition">
                  LEARN MORE
                </button>
              </div>
            </div>

            <div class="flex justify-center lg:justify-end">
              <img
                src={img11}
                alt="Guide Surgical Kit"
                class="w-full max-w-md md:max-w-lg object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Digitalsurgicalguide;
