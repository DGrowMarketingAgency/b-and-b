import { Fragment } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/home-bg.jpg";
import UniqueProduct from "../components/UniqueProduct";

const Home = () => {
  return (
    <Fragment>
      {/* Hero Section */}
      <div
        className="w-full h-[90vh] bg-no-repeat bg-center bg-cover flex items-center justify-center flex-col gap-2 lg:gap-6"
        style={{
          background: `radial-gradient(circle, rgba(0,0,0,0.5), rgba(0,0,0,0)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
      </div>

      {/* Intro Section */}
      <div className="text-center my-10 px-4 lg:px-0 lg:w-[60%] mx-auto">
        <p>B&B DENTAL</p>
        <h2 className="text-4xl font-bold">UNIQUE IMPLANT DESIGN</h2>
        <p className="mt-4 lg:text-lg">
          6 unique Dura-vit implant lines and discover their potential to help
          you improve your daily clinical practice and the results of your work.
        </p>
      </div>

      {/* Product Grid */}
      <UniqueProduct />
    </Fragment>
  );
};

export default Home;
