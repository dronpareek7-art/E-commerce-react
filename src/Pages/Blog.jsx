import React from "react";
import "./Blog.css";

export const Blog = () => {
  return (
    <section className="blog-section">

      <div className="blog-header">
        <h1>Latest From Our Blog</h1>
        <p>
          Discover shopping tips, fashion trends, and useful guides to
          make your online shopping experience better.
        </p>
      </div>

      <div className="blog-grid">

     
        <div className="blog-feature">
          <img
            src="https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg"
            alt="shopping store"
          />

          <div className="blog-feature-content">
            <span className="blog-category">E-commerce</span>
            <h2>The Future of Online Shopping</h2>
            <p>
              Online shopping is rapidly evolving with technology.
              Customers can now discover products, compare prices,
              and enjoy a seamless shopping experience from anywhere.
            </p>
            <button className="blog-btn">Read Article</button>
          </div>
        </div>

        {/* Small Blogs */}
        <div className="blog-small-container">

          <div className="blog-small">
            <img
              src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
              alt="fashion"
            />

            <div>
              <h3>Latest Fashion Trends</h3>
              <p>
                Minimalist fashion and comfortable styles are trending in 2026.
              </p>
            </div>
          </div>

          <div className="blog-small">
            <img
              src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg"
              alt="online shopping"
            />

            <div>
              <h3>Safe Online Shopping Tips</h3>
              <p>
                Always check reviews, ratings and secure payment options.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};