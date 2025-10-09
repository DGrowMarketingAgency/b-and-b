import { Fragment } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/home-bg.jpg";
import UniqueProduct from "../components/UniqueProduct";
import ScrollCards from "../components/ScrollCards";
import Category from "../components/Category";

const Home = () => {
  return (
    <Fragment>
      {/* Hero Section */}
      <div>
        <div
          className="w-full h-[90vh]  bg-no-repeat bg-center bg-cover flex items-center justify-center flex-col gap-2 lg:gap-6"
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
            All B&B DENTAL IMPLANTS are produced to secure the highest standard
            of cleanliness with double etching surface treatments and
            sterilization with gamma rays.
          </p>
        </div>

        <Category />

        <div className="text-center mt-6 w-[80%] lg:w-[40%] mx-auto flex flex-col gap-2">
          <p className="tracking-[1rem] font-semibold text-red-600">
            IUXTA IMPLANT
          </p>
          <h2 className="text-4xl font-bold">SUBPERIOSTEAL IMPLANTS</h2>
          <p>
            Unlike classical and more well-known endosseous implants, the Iuxta
            implants are positioned subperiosteally, they are placed by taking
            advantage of the morphology of the bone structure and subsequently
            fixed to the bone with the use of osteosynthesis screws. This
            suitable solution is considered by the clinician in order to resolve
            rehabilitation cases in patients who suffer from severe bone atrophy
            and who consequently cannot be treated with classical implant
            surgery.
          </p>
        </div>

        {/* Intro Section */}
        <div className="text-center my-10 px-4 lg:px-0 lg:w-[60%] mx-auto">
          <p>B&B DENTAL</p>
          <h2 className="text-4xl font-bold">UNIQUE IMPLANT DESIGN</h2>
          <p className="mt-4 lg:text-lg">
            6 unique Dura-vit implant lines and discover their potential to help
            you improve your daily clinical practice and the results of your
            work.
          </p>
        </div>

        {/* Product Grid */}
        <UniqueProduct />
        <ScrollCards />
      </div>
    </Fragment>
  );
};

export default Home;
