import React, { Fragment, useState } from "react";
import logo from "../assets/Dental_logo_white.png.webp";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingBag, Logs } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartPage = useNavigate();

  return (
    <Fragment>
      {/* Top Navbar */}
      <header className="w-full h-20 bg-black/90 flex items-center justify-between">
        <div className="w-[90%] mx-auto flex items-center justify-between">
          {/* Logo */}
          <img className="w-56" src={logo} alt="Logo" />

          {/* Desktop Menu */}
          <nav className="hidden lg:flex">
            <ul className="text-white/90 flex gap-8 font-semibold">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/conexaconnection">CONEXA CONNECTION</Link>
              </li>
              <li>
                <Link to="/uniqueimplant">6 UNIQUE IMPLANT</Link>
              </li>
              <li>
                <Link to="/surgicalkit">B&B SURGICAL KITS</Link>
              </li>
              <li>
                <Link to="/subperiosteal">SUBPERIOSTEAL IMPLANT</Link>
              </li>
            </ul>
          </nav>

          {/* Right Side Icons */}
          <div className="flex gap-6 text-white/90">
            {/* <button onClick={() => cartPage("/cart")}>
              <ShoppingBag />
            </button> */}
            {/* Mobile Toggle Button */}
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Logs size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/90 absolute w-full top-20 left-0 z-10 border-t border-white/50">
          <nav className="w-[90%] h-[80vh] mx-auto py-4">
            <ul className="text-white/90 flex flex-col gap-10 font-semibold">
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/subperiosteal" onClick={() => setIsOpen(false)}>
                  CONEXA CONNECTION
                </Link>
              </li>
              <li>
                <Link to="/surgicalkit" onClick={() => setIsOpen(false)}>
                  6 UNIQUE IMPLANT
                </Link>
              </li>
              <li>
                <Link to="/surgicalkit" onClick={() => setIsOpen(false)}>
                  B&B SURGICAL KITS
                </Link>
              </li>
              <li>
                <Link to="/subperiosteal" onClick={() => setIsOpen(false)}>
                  SUBPERIOSTEAL IMPLANT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </Fragment>
  );
};

export default Navbar;
