import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Cartqty from "../component/Cartqty";
import { Cartcontext } from "../component/Router";
function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { addtocart, isProductInCart } = useContext(Cartcontext);

  useEffect(() => {
    singleitem();
  }, [id]);

  async function singleitem() {
    if (id > 20) {
      setProduct(null);
      return;
    }
    setLoading(true);
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const result = await response.json();
    setProduct(result);
    setLoading(false);
  }

  if (loading) return <div className="Loadingicon">Loading...</div>;
  if (!product) return <h1>404 Product Not Found</h1>;

  return (
    <div className="single-product-container">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-details">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3 className="product-price">Price: ${product.price}</h3>

        {isProductInCart(product) ? (
          <Cartqty product={product} />
        ) : (
          <button onClick={() => addtocart(product)} className="add-cart-btn">
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default SingleProduct;
