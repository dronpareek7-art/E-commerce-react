import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cartcontext } from "../component/Router";

function Ecommerce() {
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const {addtocart}=useContext(Cartcontext)

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

  if (Loading) return <div className="Loadingicon">Loading...</div>;


  return (
    <>
      <h1 className="products-heading">Products</h1>
      <div className="container">
        {Data.map((product) => {
          return (
            <div key={product.id} >
              <img src={product.image} alt="" width={150} onClick={()=>navigate(`/product/${product.id}`)}/>
              <h3>{product.title}</h3>
              <p>Price = ${product.price}</p>
          <button onClick={()=>addtocart(product) }>Add to cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Ecommerce;
