import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    singleitem();
  }, [id]);

  async function singleitem() {
    setLoading(true);
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const result = await response.json();
    setProduct(result);
    console.log(result);
    setLoading(false);
  }

  if (loading) return <div className="Loadingicon">Loading...</div>;

return (
  <div className="single-product-container">
    
    <div className="product-image">
      <img src={product.image} alt={product.title}/>
    </div>

    <div className="product-details">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3 className="product-price">Price: ${product.price}</h3>
      <button className="add-cart-btn">Add to cart</button>
    </div>

  </div>
);}

export default SingleProduct;
