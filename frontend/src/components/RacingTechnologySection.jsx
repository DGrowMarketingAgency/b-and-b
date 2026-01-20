import racingVideo from "../assets/videos/v1.mp4";

import ferrari from "../assets/logos/ferrari.png";
import lamborghini from "../assets/logos/lambo.png";
import ducati from "../assets/logos/ducati.png";
import maserate from "../assets/logos/maserate.png";

const RacingTechnologySection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-gray-300 mb-4 md:text-4xl">
            Morse Tapered Technology are used in wheels of Formula Racing Cars,
            to ensure precision fit of carwheels and the body.
          </p>

          <p className="text-gray-200 md:text-4xl">
            B&B Dental Implants Italy uses this Unique Technology in Implant
            Connection{" "}
            <span className="text-red-700 font-semibold">over30+ Years.</span>
          </p>
        </div>

        {/* RIGHT VIDEO */}
        <div>
          {/* LOGOS */}
          <div className="flex justify-center gap-6 mb-4">
            <img src={ferrari} alt="ferrari" className="h-16" />
            <img src={lamborghini} alt="Lamborghini" className="h-16" />
            <img src={ducati} alt="Ducati" className="h-16" />
            <img src={maserate} alt="Maserate" className="h-16" />
          </div>

          {/* VIDEO */}
          <div className="rounded-xl overflow-hidden border border-red-800">
            <video
              src={racingVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[280px] lg:h-[360px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RacingTechnologySection;
