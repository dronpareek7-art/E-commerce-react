import React from "react";
import { FaTruck, FaLock, FaTags, FaHeadset } from "react-icons/fa";
import "./About.css";

export const About = () => {
  return (
    <div className="about">

      <div className="about-header">
        <h1>About Our Store</h1>
        <p>
          We provide high quality products with the best online shopping
          experience. Our goal is to make shopping easy, fast and reliable
          for everyone.
        </p>
      </div>

      <div className="about-cards">

        <div className="about-card">
          <FaTruck className="about-icon"/>
          <h3>Fast Delivery</h3>
          <p>
            We ensure quick and reliable delivery so that your products
            reach you on time.
          </p>
        </div>

        <div className="about-card">
          <FaLock className="about-icon"/>
          <h3>Secure Payment</h3>
          <p>
            Your payments are completely safe and protected with
            secure checkout systems.
          </p>
        </div>

        <div className="about-card">
          <FaTags className="about-icon"/>
          <h3>Best Prices</h3>
          <p>
            We provide the best quality products at affordable
            prices for our customers.
          </p>
        </div>

        <div className="about-card">
          <FaHeadset className="about-icon"/>
          <h3>24/7 Support</h3>
          <p>
            Our support team is always ready to help you with any
            questions or issues.
          </p>
        </div>

      </div>

    </div>
  );
};