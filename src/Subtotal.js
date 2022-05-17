import React from "react";
import "./Subtotal.css";

function Subtotal({ product }) {
  const totalValue = product.product.price * product.quantity;

  return (
    <div>
      <div>
        <p className="subtotal-text">Subtotal ({product.quantity}) itens</p>
        <span className="subtotal-price">
          {totalValue.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
    </div>
  );
}

export default Subtotal;
