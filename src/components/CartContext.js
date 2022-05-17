//Preparando a camada de dados
import React, { createContext, useContext, useEffect, useState } from "react";

//Esta é a camada de dados
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  useEffect(() => {
    const cartLocal = window.localStorage.getItem("cart");
    if (cartLocal) {
      setCart(JSON.parse(cartLocal));
    }
  }, []);

  const addToCart = (product) => {
    setCart((old) => {
      console.log(product);
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
      console.log(newcart);

      window.localStorage.setItem("cart", JSON.stringify(newcart));
      return newcart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
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
