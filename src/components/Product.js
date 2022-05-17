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

  /*   const Product =({product}) => {
  const cart = useCart()
  const add = (product) => () {
    cart.addToCart(product)
  } */

  function renderLoading() {
    if (data === undefined) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="products">
          {data.map((item, index) => (
            <div key={item.id} className="product">
              <div className="product-info">
                <p>{item.title}</p>
                <p className="product-price">
                  <small>R$ </small>
                  <strong>{item.price}</strong>
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

  /*   const addToCart = (product) => {
    const { id, title, image, price, rating } = product;
    dispatch({
      type: "addToCart",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    history.push("/checkout");
  }; */

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
