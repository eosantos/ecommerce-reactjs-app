import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <div>
          <h2 className="checkout-title">Seu carrinho está vazio. </h2>
          <p>Você não tem itens no seu carrinho. Compre um.</p>
        </div>
        <div className="checkout-right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
