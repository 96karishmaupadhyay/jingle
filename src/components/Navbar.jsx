import React, { useState } from "react";
import logo from "../assets/mainlogo.gif";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const domesticOptions = ["North", "West", "East", "South"];
  const internationalOptions = [
    "Germany",
    "Thailand",
    "Belgium",
    "Canada",
    "Singapore",
    "Iceland",
    "Maldives",
    "Malasia",
  ];
  const placesOptions = ["Destinations", "Hotels", "Gallery"];
  const packagesOptions = ["Domestic Packages", "International Packages"];

  return (
    <div className="bg-primary text-white w-full fixed z-50">
      <div className="flex items-center justify-between px-6 h-16">
       
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="h-24 relative top-8 rounded-full"
          />
        </Link>

        <ul
          className="hidden lg:flex justify-between gap-6 text-lg font-semibold 
          [&_a]:border-b-2 
          [&_a]:border-transparent 
          [&_a]:pb-1 
          [&_a]:hover:border-tertiary 
          [&_a]:transition 
          [&_a]:duration-200"
        >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><DropDown title="Domestic" listData={domesticOptions} /></li>
          <li><DropDown title="Internatinal" listData={internationalOptions} /></li>
          <li><DropDown title="Places" listData={placesOptions} /></li>
          <li><DropDown title="Packages" listData={packagesOptions} /></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <a href="tel:+918010634033" className="flex items-center gap-1">
              <FaPhone /> +91 8010634033
            </a>
          </li>
          <li><Link to="/pay">Pay Now</Link></li>
        </ul>

        <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden px-8 pb-4 pt-20">
          <ul className="flex flex-col gap-4 text-base font-semibold">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><DropDown title="Domestic" listData={domesticOptions} /></li>
            <li><DropDown title="Internatinal" listData={internationalOptions} /></li>
            <li><DropDown title="Places" listData={placesOptions} /></li>
            <li><DropDown title="Packages" listData={packagesOptions} /></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
            <li>
              <a href="tel:+918010634033" className="flex items-center gap-1">
                <FaPhone /> +91 8010634033
              </a>
            </li>
            <li><Link to="/pay" onClick={toggleMenu}>Pay Now</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
