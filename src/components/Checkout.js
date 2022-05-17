import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal";
import ProductCart from "./ProductCart";
import { getCart } from "./CartContext";

function Checkout() {
  const cart = getCart();

  let products = [];
  // eslint-disable-next-line array-callback-return
  products = Object.values(cart ?? {});

  return (
    <div className="checkout">
      <div className="checkout-left">
        {products.length === 0 ? (
          <div>
            <h2 className="checkout-title">Seu carrinho está vazio. </h2>
            <p>Você não tem itens no seu carrinho. Compre um.</p>
          </div>
        ) : (
          <div className="shopping_cart_tittle">
            <h2>Itens no carrinho de compras</h2>
            {products.map((item) => (
              <ProductCart key={item.product?.id} product={item} />
            ))}
          </div>
        )}
        <div className="checkout-right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
