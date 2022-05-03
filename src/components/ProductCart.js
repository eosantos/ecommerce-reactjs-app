import React from "react";
import "./ProductCart.css";
import { useStateValue } from "../StateProvider";

function ProductCart({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();

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
      <button onClick={removeItem}>Excluir do carrinho</button>
    </div>
  );
}

export default ProductCart;
