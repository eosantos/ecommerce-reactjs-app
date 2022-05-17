import React, { useEffect, useState } from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal";
import ProductCart from "./ProductCart";
import { getCart } from "./CartContext";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

function Checkout() {
  const cart = getCart();
  const history = useHistory();

  const [products, setProducts] = useState(Object.values(cart ?? {}) ?? []);

  useEffect(() => {
    if (cart.loading) {
      setProducts(Object.values(cart ?? {}));
    }
  }, [cart]);

  function getValueTotal() {
    let totalValue = 0;
    if (products) {
      totalValue = products.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue?.product.price * currentValue.quantity,
        0
      );
    }
    return totalValue.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <div className="checkout">
      {cart.loading ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        <div className="checkout-left">
          {products.length === 0 ? (
            <div>
              <h2 className="checkout-title">Seu carrinho está vazio. </h2>
              <p>Você não tem itens no seu carrinho. Compre um.</p>
            </div>
          ) : (
            <div className="shopping_cart_tittle">
              <h2>Itens no carrinho de compras</h2>
              {products.map((item, index) => (
                <>
                  <ProductCart key={index} product={item} />

                  <Subtotal key={index} product={item} />
                </>
              ))}
              <button
                onClick={() => {
                  history.push("/");
                  window.location.reload();
                }}
              >
                Adicionar Produtos
              </button>
            </div>
          )}
        </div>
      )}
      <div>
        Valor Total <span className="valueTotal">{getValueTotal()}</span>
      </div>
    </div>
  );
}

export default Checkout;
