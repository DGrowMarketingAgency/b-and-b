import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        { y: "100%", scale: 0.9, opacity: 0 },
        { y: "5%", scale: 1, opacity: 1, duration: 1, ease: "power1.out" }
      );
    }

    // Third card: smaller, slides in above
    if (cards[2]) {
      tl.fromTo(
        cards[2],
        { y: "120%", scale: 0.8, opacity: 0 },
        { y: "10%", scale: 1, opacity: 1, duration: 1, ease: "power1.out" }
      );
    }

    // Fourth card: slides in from bottom with slight scale
    if (cards[3]) {
      tl.fromTo(
        cards[3],
        { y: "130%", scale: 0.7, opacity: 0 },
        { y: "15%", scale: 1, opacity: 1, duration: 1, ease: "power1.out" }
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="cards-wrapper relative w-full max-w-[80%] h-[80vh]">
        {/* First Card */}
        <div className="card absolute inset-0 bg-red-400 rounded-xl shadow-xl flex items-center justify-center text-white text-2xl z-10">
          Card 1
        </div>
        {/* Second Card */}
        <div className="card absolute inset-0 bg-blue-400 rounded-xl shadow-xl flex items-center justify-center text-white text-2xl z-20">
          Card 2
        </div>
        {/* Third Card */}
        <div className="card absolute inset-0 bg-green-600 rounded-xl shadow-xl flex items-center justify-center text-white text-2xl z-30">
          Card 3
        </div>
        {/* Fourth Card */}
        <div className="card absolute inset-0 bg-purple-500 rounded-xl shadow-xl flex items-center justify-center text-white text-2xl z-40">
          Card 4
        </div>
      </div>
    </div>
  );
};

export default ScrollCards;
