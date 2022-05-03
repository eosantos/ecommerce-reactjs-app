import React from "react";
import "./Checkout.css";
import { useStateValue } from "../StateProvider";
import Subtotal from "../Subtotal";
import ProductCart from "./ProductCart";

function Checkout() {
  const [{ cart }] = useStateValue;

  return (
    <div className="checkout">
      <div className="checkout-left">
        {cart.length === 0 ? (
          <div>
            <h2 className="checkout-title">Seu carrinho está vazio. </h2>
            <p>Você não tem itens no seu carrinho. Compre um.</p>
          </div>
        ) : (
          <div className="shopping_cart_tittle">
            <h2>Itens no carrinho de compras</h2>
            {cart.map((item) => (
              <ProductCart
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
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
