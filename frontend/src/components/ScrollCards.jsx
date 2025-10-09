import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeCardOne from "./HomeCardOne";
import HomeCardTwo from "./HomeCardTwo";
import cartBgOne from "../assets/wave.jpeg";
import cartBgThree from "../assets/wave3.jpeg";
import HomeCardThree from "./HomeCardThree";
import HomeCardFour from "./HomeCardFour";

gsap.registerPlugin(ScrollTrigger);

const ScrollCards = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".card");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%",
        scrub: true,
        pin: true,
        // markers: true,
      },
    });

    // First card stays pinned
    if (cards[0]) {
      tl.to(cards[0], { scale: 1, duration: 0.5 });
    }

    // Second card comes from bottom to overlap
    if (cards[1]) {
      tl.fromTo(
        cards[1],
        { y: "120%", scale: 0.9, opacity: 1 },
        { y: "0%", scale: 1, opacity: 1, duration: 1, ease: "power1.out" }
      );
    }

    // Third card: smaller, slides in above
    if (cards[2]) {
      tl.fromTo(
        cards[2],
        { y: "120%", scale: 0.8, opacity: 1 },
        { y: "0%", scale: 1, opacity: 1, duration: 1, ease: "power1.out" }
      );
    }

    // Fourth card: slides in from bottom with slight scale
    if (cards[3]) {
      tl.fromTo(
        cards[3],
        { y: "130%", scale: 0.7, opacity: 1 },
        { y: "0%", scale: 1, opacity: 1, duration: 1, ease: "power1.out" }
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen flex items-center justify-center py-20"
    >
      <div className="cards-wrapper relative  h-[95vh] w-[95%] md:w-[80%] md:h-[80vh]">
        {/* First Card */}
        <div
          className=" card absolute inset-0  rounded-xl shadow-xl flex items-center justify-center text-white text-2xl z-10  "
          style={{
            background: `radial-gradient(circle, rgba(0,0,0,1), rgba(0,0,0,.5)), url(${cartBgOne})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          }}
        >
          <HomeCardOne />
        </div>
        {/* Second Card */}
        <div
          className="card absolute inset-0 bg-blue-400 rounded-xl shadow-xl flex items-center justify-center text-white text-2xl z-20"
          style={{
            background: `radial-gradient(circle, rgba(0,0,0,1), rgba(0,0,0,.5)), url(${cartBgThree})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          }}
        >
          <HomeCardTwo />
        </div>
        {/* Third Card */}
        <div
          className="card absolute inset-0 bg-green-600 rounded-xl shadow-xl flex items-center justify-center text-white text-2xl z-30"
          style={{
            background: `radial-gradient(circle, rgba(0,0,0,1), rgba(0,0,0,.5)), url(${cartBgOne})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          }}
        >
          <HomeCardThree />
        </div>
        {/* Fourth Card */}
        <div
          className="card absolute inset-0 bg-purple-500 rounded-xl shadow-xl flex items-center justify-center text-white text-2xl z-40"
          style={{
            background: `radial-gradient(circle, rgba(0,0,0,1), rgba(0,0,0,.5)), url(${cartBgThree})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          }}
        >
          <HomeCardFour />
        </div>
      </div>
    </div>
  );
};

export default ScrollCards;
