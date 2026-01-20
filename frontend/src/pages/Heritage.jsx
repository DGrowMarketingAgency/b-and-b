import banner from "../assets/imgs/Rectangle 246.png";
import heroImg from "../assets/imgs/Rectangle 247.png";

import acCylinder from "../assets/imgs/Ac Cylinder.jpg";
import acMolar from "../assets/imgs/Ac molar.jpg";
import novocor from "../assets/imgs/Novocor Plus.jpg";
import miniDura from "../assets/imgs/Mini Dura vit.jpg";
import tBarrier from "../assets/imgs/t-barrier.jpg";
import duraVit3p from "../assets/imgs/Dura vit 3p.jpg";
import duraVitInn from "../assets/imgs/Dura vit inn.jpg";
import titanium from "../assets/imgs/titanium-membrane-1.jpg";
import slimEv from "../assets/imgs/Duravit slim & ev.jpg";
import guided from "../assets/imgs/Guided Surgey.jpg";
import milling from "../assets/imgs/Milling.jpg";
import pterygo from "../assets/imgs/Tterygo.jpg";
import mono from "../assets/imgs/Mono implant.jpg";
import novobone from "../assets/imgs/Novobone.jpg";

const Heritage = () => {
  return (
    <div className="bg-black text-white scroll-smooth">
      {/* TOP BANNER */}
      <section
        className="h-[80vh] flex items-end justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: `
          linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 40%, rgba(10,2,2,0.2) 100%),
          url(${banner})`,
        }}
      >
        <h1 className="text-[60px] font-bold mb-[70px] max-md:text-[32px] max-md:mb-[40px]">
          LET’S GROW IMPLANTOLOGY <br />
          <span>TOGETHER</span>
        </h1>
      </section>

      {/* HERO SECTION */}
      <section className="flex gap-[50px] items-center px-[5%] py-[80px] h-screen max-lg:flex-col max-lg:h-auto max-lg:text-center">
        <div>
          <h3 className="text-[60px] font-bold border-b-2 border-red-600 inline-block mb-5 max-lg:text-[44px]">
            The Heritage of B&B Dental
          </h3>
          <h5 className="text-red-600 text-[50px] font-extrabold my-10 max-lg:text-[36px]">
            Our Story Begins in 1991
          </h5>
          <p className="text-[27px] mb-6 max-lg:text-[22px]">
            <b className="text-[30px]">Dr. BANZI CLAUDIO</b> driven by his
            passion decided to create the ideal implant to use on his patients.
          </p>
          <p className="text-[27px] max-lg:text-[22px]">
            Doctor and Scientist, founder of B&B Dental and Investor
          </p>
        </div>

        <img
          src={heroImg}
          alt=""
          className="max-w-[480px] rounded-[20px] bg-white max-lg:max-w-[360px]"
        />
      </section>

      {/* TIMELINE */}
      <section
        className="py-[100px] px-[5%] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.4), rgba(10,2,2,0.2)), url('/assets/imgs/bg-heritage-1.jpeg')",
        }}
      >
        <div className="relative max-w-[1000px] mx-auto">
          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 w-[6px] h-full bg-white -translate-x-1/2 max-md:left-[28px] max-md:translate-x-0" />

          {timelineData.map((item, i) => (
            <div
              key={i}
              className={`relative flex items-center min-h-[180px]
              ${
                item.side === "left"
                  ? "justify-end pr-[50%]"
                  : "justify-start pl-[50%]"
              }
              max-md:justify-start max-md:pl-[80px]`}
            >
              {/* DOT */}
              <span className="absolute left-1/2 w-4 h-4 bg-red-600 rounded-full -translate-x-1/2 animate-pulseRed z-10 max-md:left-[28px]" />

              {/* CONNECTOR */}
              <span
                className={`absolute top-1/2 w-[20px] h-[2px] bg-white
                ${item.side === "left" ? "right-1/2" : "left-1/2"}
                max-md:left-[28px] max-md:w-[28px]`}
              />

              {/* IMAGE */}
              <div className="bg-gray-200 rounded-full flex items-center justify-center mx-[30px] animate-zoomIn">
                <img
                  src={item.img}
                  alt=""
                  className="w-[140px] h-[140px] rounded-full max-md:w-[80px] max-md:h-[80px]"
                />
              </div>

              {/* CONTENT */}
              <div className="text-center min-w-[280px] max-md:text-left">
                <h4 className="text-[30px] font-semibold max-md:text-[18px]">
                  {item.title}
                </h4>
                <span className="text-[26px] font-bold max-md:text-[16px]">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const timelineData = [
  { img: acCylinder, title: "AC Cylindrical", year: "1991", side: "left" },
  { img: acMolar, title: "AC Molar / AC Conical", year: "1991", side: "right" },
  { img: novocor, title: "Novocor Plus", year: "1992", side: "left" },
  { img: miniDura, title: "Mini DURA-VIT", year: "1998", side: "right" },
  { img: tBarrier, title: "T-Barrier Collagene", year: "1998", side: "left" },
  { img: duraVit3p, title: "DURA-VIT Slim & 3P", year: "2004", side: "right" },
  { img: duraVitInn, title: "DURA-VIT INN", year: "2004", side: "left" },
  { img: titanium, title: "T-Barrier Titanium", year: "2010", side: "right" },
  { img: slimEv, title: "DURA-VIT SLIM & EV", year: "2011", side: "left" },
  { img: guided, title: "Guided Surgery", year: "2014", side: "right" },
  { img: milling, title: "Milling Centre", year: "2016", side: "left" },
  { img: pterygo, title: "Pterygo Implant", year: "2018", side: "right" },
  { img: mono, title: "Mono Implant", year: "2022", side: "left" },
  { img: novobone, title: "Novobone", year: "2023", side: "right" },
];
export default Heritage;
