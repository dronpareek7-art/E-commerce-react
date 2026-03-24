import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      
      <h1 className="notfound-title">404</h1>

      <h2 className="notfound-subtitle">Oops! Page Not Found</h2>

      <p className="notfound-text">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <button
        className="notfound-btn"
        onClick={() => navigate("/")}
      >
        Go Back Home
      </button>

      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
    </div>
  );
};

export default NotFound;