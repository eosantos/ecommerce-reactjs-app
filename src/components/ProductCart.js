import React from "react";
import "./ProductCart.css";
import { Rating } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useCart } from "./CartContext";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function ProductCart({ product, onChangeQuantity = () => {} }) {
  const classes = useStyles();
  const [qtd, setQtd] = React.useState(product?.quantity);

  const cart = useCart();

  const handleChange = (event) => {
    setQtd(event.target.value);
    onChangeQuantity(event.target.value, product?.product?.id);
    /*  cart.removeOrUpdateCard(product?.product, event.target.value); */
  };

  return (
    <div className="product-cart">
      {cart.loading ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        <>
          <img
            className="product-cart-img"
            src={product?.product?.image}
            alt=""
          />
          <div className="product-cart-info">
            <p className="product-cart-title">{product?.product?.title}</p>
            <p className="product-cart-price">
              {" "}
              {product?.product?.price?.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
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
            <div className="product-cart-formQtd">
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Qtd</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={qtd}
                  onChange={handleChange}
                >
                  <MenuItem value={0}>0 (Excluir)</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductCart;
