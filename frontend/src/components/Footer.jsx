import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import cartBgOne from "../assets/wave.jpeg";
import { Globe, Mail, Phone, Smartphone } from "lucide-react";
import marklogo from "../assets/marksbio.webp";
import dentLogo from "../assets/Dental_logo_white.png.webp";

const Footer = () => {
  return (
    <Fragment>
      <footer
        className="w-[100%]  "
        style={{
          background: `radial-gradient(circle, rgba(0,0,0,1), rgba(0,0,0,.5)), url(${cartBgOne})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
        }}
      >
        <div className="p-6 md:px-24 md:pt-24 md:pb-2 grid md:grid-cols-4 text-white gap-8 mt-20 ">
          <div className="flex flex-col items-start justify-start gap-6">
            <img className="w-[70%]" src={dentLogo} alt="" />
            <img className="w-[70%]" src={marklogo} alt="" />
          </div>
          <div>
            <h3 className="text-2xl text-red-500 font-bold mb-3">
              To Know More in INDIA
            </h3>
            <ul>
              <li className="mb-2 flex items-center gap-2 ">
                <Mail />
                <a href="#">Email: info@marksbiotech.com</a>
              </li>
              <li className="mb-2 flex items-center gap-2">
                <Phone />
                <a href="#">Tel: +91 48593250</a>
              </li>
              <li className="mb-2 flex items-center gap-2">
                <Smartphone />
                <a href="#">Phone: +91 98198 93250</a>
              </li>
              <li className="mb-2 flex items-center gap-2">
                <Globe />
                <a href="#">WebSite: www.marksbiotech.com</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl text-red-500 font-bold mb-3">
              B&B DENTAL SHOP
            </h3>
            <div className=" flex flex-col gap-2">
              <Link to="/subperiosteal">B&B Dental Implants</Link>
              <Link to="/subperiosteal">B&B Restoration Components</Link>
              <Link to="/subperiosteal">B&B Surgical Kits</Link>
              <Link to="/subperiosteal">Subperiosteal implants</Link>
            </div>
          </div>
          <div className="">
            <h3 className="text-2xl text-red-500 font-bold mb-3">CATALOGS</h3>
            <div className=" flex flex-col gap-2">
              <Link to="/subperiosteal">B&B Dental Implant Catalog </Link>
              <Link to="/subperiosteal">B&B IUXTA Catalog </Link>
              <Link to="/subperiosteal">B&B Guide Surgery </Link>
              <Link to="/subperiosteal">B&B Regeneration Materials </Link>
              <Link to="/subperiosteal">B&B Drilling Sequence Chart</Link>
            </div>
          </div>
        </div>
        <hr />
        <div className=" text-gray-300 py-8 mt-6 ">
          <div className="container mx-auto px-6 text-center flex align-middle justify-center">
            <p className="text-sm">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white">MarksBioTech</span>.
              All rights reserved.
            </p>
            <p className="text-xs mt-1">
              Designed & Developed by{" "}
              <span className="text-blue-400 font-medium">
                D-Grow Marketing Agency
              </span>
              .
            </p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
