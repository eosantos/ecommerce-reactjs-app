import React, { useEffect, useState } from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();

  const [data, setData] = useState();

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
          {data.map((product) => (
            <div key={product.id} className="product">
              <div className="product-info">
                <p>{product.title}</p>
                <p className="product-price">
                  <small>R$</small>
                  <strong>{product.price}</strong>
                </p>
                <p className="product-rating">
                  {Array(product.rating)
                    .fill()
                    .map((_, index) => (
                      <p key={index}>*</p>
                    ))}{" "}
                </p>
              </div>
              <img src={product.image} alt={product.title} />
              <button onClick={addToCart}>Comprar</button>
            </div>
          ))}
        </div>
      );
    }
  }

  //console.log(dispatch);
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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
