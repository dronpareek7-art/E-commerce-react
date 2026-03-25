import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cartcontext } from "../component/Router";
import Cartqty from "../component/Cartqty";
import { FaShoppingCart } from "react-icons/fa";
import SkeletonCard from "../component/SkeletonCard";

function Ecommerce() {
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const { addtocart, isProductInCart, Currency, convert } =
    useContext(Cartcontext);

  const navigate = useNavigate();

  useEffect(() => {
    Getproduct();
  }, []);
  async function Getproduct() {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    setData(result);
    console.log(result);
    setLoading(false);
  }

  if (Loading) {
    return (
      <>
        <h1 className="products-heading">Products</h1>
        <div className="container">
          {Array(8)
            .fill("")
            .map((_, index) => (
              <SkeletonCard key={index} />
            ))}
        </div>
      </>
    );
  }

  return (
    <>
      <h1 className="products-heading">Products</h1>
      <div className="container">
        {Data.map((product) => {
          return (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt=""
                width={150}
                onClick={() => navigate(`/product/${product.id}`)}
              />
              <h3>{product.title}</h3>
              <p>
                Price: {Currency === "INR" ? "₹" : "$"}
                {convert(product.price)}
              </p>

              {isProductInCart(product) ? (
                <Cartqty product={product} />
              ) : (
                <button
                  onClick={() => addtocart(product)}
                  className="add-cart-btn"
                >
                  Add to cart <FaShoppingCart />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Ecommerce;
