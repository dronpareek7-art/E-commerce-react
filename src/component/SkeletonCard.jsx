import React from "react";
import "./SkeletonCard.css";
function SkeletonCard() {
  return (
    <div className="product-card skeleton">
      <div className="skeleton-img"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text small"></div>
      <div className="skeleton-btn"></div>
    </div>
  );
}

export default SkeletonCard;