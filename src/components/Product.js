import React, { useEffect, useState } from "react";
import "./Product.css";
import { useCart } from "./CartContext";
import { Rating } from "@material-ui/lab";

function Product() {
  const [data, setData] = useState();

  const cart = useCart();

  useEffect(() => {
    async function fetchData() {
      const repsonse = await fetch("https://fakestoreapi.com/products");
      const result = await repsonse.json();
      setData(result);
    }
    fetchData();
  }, []);

  function renderLoading() {
    if (data === undefined) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="products">
          {data.map((item, index) => (
            <div key={item.id} className="product">
              <div className="product-info">
                <p className="text-product-info">{item.title}</p>
                <p className="product-price">
                  {" "}
                  <strong>
                    {item?.price.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </strong>
                </p>
                <p className="product-rating">
                  {item.rating.rate > 1 && (
                    <Rating
                      key={index}
                      name="half-rating-read"
                      defaultValue={item.rating.rate}
                      precision={
                        Number(item.rating?.rate.toString().split("."))
                          ?.length > 1
                          ? item.rating?.rate.toString().split(".")[1]
                          : 0.5
                      }
                      readOnly
                    />
                  )}
                </p>
              </div>
              <img src={item.image} alt={item.title} />
              <button onClick={() => cart.addToCart(item)}>
                Adicionar ao Carrinho
              </button>
            </div>
          ))}
        </div>
      );
    }
  }

  return (
    <div>
      {renderLoading()}
      {/*  <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>R$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>*</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToCart}>Comprar</button> */}
    </div>
  );
}

export default Product;
