import React from "react";
import "./ProductCart.css";
import { Rating } from "@material-ui/lab";

function ProductCart({ product }) {
  /*  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  }; */

  console.log(product);

  return (
    <div className="product-cart">
      <img className="product-cart-img" src={product?.product?.image} alt="" />
      <div className="product-cart-info">
        <p className="product-cart-title">{product?.product?.title}</p>
        <p className="product-cart-price">R$ {product?.product?.price}</p>
      </div>

      <div className="product-cart-rating">
        {product?.product?.rating?.rate > 1 && (
          <Rating
            name="half-rating-read"
            defaultValue={product?.product?.rating?.rate}
            precision={
              Number(product?.product?.rating?.rate.toString().split("."))
                ?.length > 1
                ? product?.product?.rating?.rate.toString().split(".")[1]
                : 0.5
            }
            readOnly
          />
        )}
      </div>
      {/* <button onClick={removeItem}>Excluir do carrinho</button>; */}
    </div>
  );
}

export default ProductCart;
