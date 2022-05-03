import React, { useEffect, useState } from "react";
import "./ProductCart.css";
import { useStateValue } from "../StateProvider";

function ProductCart({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();

  const [, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const repsonse = await fetch("https://fakestoreapi.com/products");
      const result = await repsonse.json();
      setData(result);
    }
    fetchData();
  });

  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="product-cart">
      <img className="product-cart-img" src={image} alt="" />
      <div className="product-cart-info">
        <p className="product-cart-title">{title}</p>
        <p className="product-cart-price">R${price}</p>
      </div>
      <div className="product-cart-rating">
        {Array(rating)
          .fill()
          .map((_, index) => (
            <span key={index}>*</span>
          ))}
      </div>
      <button onClick={removeItem}>Excluir do carrinho</button>;
    </div>
  );
}

export default ProductCart;
