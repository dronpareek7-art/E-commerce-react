import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="footer">

    <div className="footer-container"> 


      <div className="links">
        <h2>Quick Links</h2>

        <ul>
          <li>About Us</li>
          <li>Shop</li>
          <li>Locate US</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="support">
        <h2>Customer Support</h2>
        <ul>
          <li>FAQ</li>
          <li>Shipping Info</li>
          <li>Return Policy</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="contact">
        <h2>Contact Us</h2>
        <ul>
          <li><FaLocationDot />jaipur, Rajasthan</li>
          <li><LuPhoneCall />+91 9983736942</li>
          <li><MdEmail />support@example.com</li>
        </ul>
      <div className="social">
        <FaInstagram />
        <FaFacebook />
         <IoLogoTwitter />
      </div>
      </div>
          </div>
    </footer>

  );
};
