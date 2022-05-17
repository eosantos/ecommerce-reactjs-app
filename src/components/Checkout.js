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

  const [loading, setLoadingIndex] = useState({ id: null, loading: false });

  /* 
  useEffect(() => {
    if (cart.loading) {
      setProducts(Object.values(cart ?? {}));
    }
  }, [cart]); */

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

  const handleChangeQuantity = (value, productId) => {
    try {
      setLoadingIndex({
        loading: true,
        id: productId,
      });

      let newProducts = [...products];

      const index = newProducts.findIndex((el) => el.product?.id === productId);
      console.log(value);
      if (index !== -1) {
        if (value === 0) {
          newProducts.slice(index, 1);
          console.log();
          setProducts(newProducts);
        }
        products[index].quantity = value;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setLoadingIndex({
          loading: true,
          id: null,
        });
      }, 300);
    }
  };

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
              <h2 className="title-cart">Itens no carrinho de compras</h2>
              <div className="spacing-products">
                {products.map((item, index) => (
                  <>
                    {item.product?.id === loading.id && loading.loading ? (
                      <CircularProgress />
                    ) : (
                      <>
                        <div className="product-cart-checkout">
                          <ProductCart
                            key={index}
                            product={item}
                            onChangeQuantity={handleChangeQuantity}
                          />
                        </div>
                        <Subtotal key={index} product={item} />
                      </>
                    )}
                  </>
                ))}
              </div>
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
      <div className="valueTotal">
        Valor Total <span className="valueTotal-price">{getValueTotal()}</span>
      </div>
    </div>
  );
}

export default Checkout;
