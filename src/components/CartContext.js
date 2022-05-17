//Preparando a camada de dados
import React, { createContext, useContext, useEffect, useState } from "react";

//Esta é a camada de dados
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cartLocal = window.localStorage.getItem("cart");
    if (cartLocal) {
      setCart(JSON.parse(cartLocal));
    }
  }, []);

  const addToCart = (product) => {
    setCart((old) => {
      let quantity = 0;
      if (old[product?.id]) {
        quantity = old[product?.id].quantity;
      }

      const newcart = {
        ...old,
        [product?.id]: {
          quantity: quantity + 1,
          product,
        },
      };

      window.localStorage.setItem("cart", JSON.stringify(newcart));
      return newcart;
    });
  };

  const removeOrUpdateCard = (product, quantityParam) => {
    setLoading(true);
    if (quantityParam === 0) {
      let cartLocal = [];
      cartLocal = JSON.parse(localStorage.getItem("cart"));

      console.log(cartLocal);
      if (cartLocal) {
        const cartRemove = Object.values(cartLocal);
        delete cartLocal[product.id];
        console.log(cartLocal);
        setCart(cartLocal);
        window.localStorage.setItem("cart", JSON.stringify(cartRemove));
      }
      setTimeout(() => {
        setLoading(false);
      }, 300);
    } else {
      setCart((old) => {
        const newcart = {
          ...old,
          [product?.id]: {
            quantity: quantityParam,
            product,
          },
        };

        window.localStorage.setItem("cart", JSON.stringify(newcart));
        setTimeout(() => {
          setLoading(false);
        }, 300);
        return newcart;
      });
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeOrUpdateCard, loading }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart() {
  const cart = useContext(CartContext);
  return cart;
}

function getCart() {
  const data = localStorage.getItem("cart");
  return JSON.parse(data);
}

export { useCart, getCart };
