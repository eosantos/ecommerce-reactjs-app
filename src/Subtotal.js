import React from "react";

function Subtotal({ product }) {
  const totalValue = product.product.price * product.quantity;

  return (
    <div className="subtotal">
      <div>
        <p>Valor total a pagar</p>
        {totalValue.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
}

export default Subtotal;
