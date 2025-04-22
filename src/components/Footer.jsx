import React from "react";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-primary pt-10 text-white  [&_a]:border-b-2 
          [&_a]:border-transparent 
          [&_a]:pb-1 
          [&_a]:hover:border-tertiary 
          [&_a]:transition 
          [&_a]:duration-200">
    <div className="flex m-10 justify-between flex-col gap-10 lg:flex-row">
      <div>
        <h1 className="text-2xl font-semibold">Jingle Holiday Bazar</h1>
        <p className="p-4 pl-0">Travel with us from here to any where...</p>
        <p className="flex gap-2 pb-2">
          <FaPhone />
          <a
            href="https://wa.link/9hwu05"
            className="aboutus text-white "
            target="_blank"
            rel="noopener noreferrer"
          >
            +91 8506922777
          </a>
        </p>
        <p className="flex gap-2 pb-2">
          <FaPhone />
          <a
            href="https://wa.link/9hwu05"
            className="aboutus text-white "
            target="_blank"
            rel="noopener noreferrer"
          >
            +91 8506922777
          </a>
        </p>
        <p  className="flex gap-2 items-center pb-2">
          <MdOutgoingMail className="text-2xl" />
          <a
            href="mailto:jingleholidaybazar@gmail.com"
            className="text-white "
          >
            jingleholidaybazar@gmail.com
          </a>
        </p>
        <p  className="flex gap-2 items-center pb-2">
          <MdOutgoingMail className="text-2xl"/>
          <a
            href="mailto:thejingleholidaybazar@gmail.com"
            className="text-white "
          >
            thejingleholidaybazar@gmail.com
          </a>
        </p>
        <p className="pl-8">24/7 customer support</p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold pb-4">Quick Links</h2>

        <ul className="flex flex-col gap-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About us</Link>
          </li>
          <li>
            <Link to="/blog">Blog List</Link>
          </li>
          <li>
            <Link to="/destination">Destination</Link>
          </li>
          <li>
            <Link to="/hotels">Hotels</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold pb-4">Domestic Packages</h2>

        <ul className="flex flex-col gap-2">
          <li>
            <Link to="/">Uttrakhand</Link>
          </li>
          <li>
            <Link to="/aboutus">Laddakh</Link>
          </li>
          <li>
            <Link to="/blog">Meghalaya</Link>
          </li>
          <li>
            <Link to="/destination">North East</Link>
          </li>
          <li>
            <Link to="/hotels">Rajasthan</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold pb-4">Internatinal Packages</h2>

        <ul className="flex flex-col gap-2">
          <li>
            <Link to="/">Maldives</Link>
          </li>
          <li>
            <Link to="/aboutus">Singapore</Link>
          </li>
          <li>
            <Link to="/blog">Switzerland</Link>
          </li>
          <li>
            <Link to="/destination">Saudi Arabia</Link>
          </li>
          <li>
            <Link to="/hotels">Dubai</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold pb-4">Yatra</h2>
        <ul className="flex flex-col gap-2">
          <li>
            <Link to="/">Shirdi</Link>
          </li>
          <li>
            <Link to="/aboutus">Vaisno Devi</Link>
          </li>
          <li>
            <Link to="/blog">Kedarnath</Link>
          </li>
          <li>
            <Link to="/destination">Badrinath Yatra </Link>
          </li>
          <li>
            <Link to="/hotels">Char dham Yatra</Link>
          </li>
          <li>
            <Link to="/hotels">9 Devi Yatra</Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="flex justify-between m-10 mb-0 pb-10 border-t-2 pt-4 border-tertiary">
        <p>Powered By | Namrata Universal | All Rights are Reserved by Jingleholidaybazar</p>
        <p className="flex gap-4">
            <Link to="/https://www.facebook.com/jingleholidaybazar?_rdr"><FaFacebookF className="text-tertiary text-2xl"/></Link>
            <Link to="/https://www.facebook.com/jingleholidaybazar?_rdr"><FaTwitter className="text-tertiary text-2xl"/></Link>
            <Link to="/https://www.facebook.com/jingleholidaybazar?_rdr"><FaSquareInstagram className="text-tertiary text-2xl"/></Link>
            <Link to="/https://www.facebook.com/jingleholidaybazar?_rdr"><FaLinkedin className="text-tertiary text-2xl"/></Link>
        </p>
    </div>
    </div>
  );
};

export default Footer;
