import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import { Link } from "react-router-dom";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import logo from "../assets/img/logoLivenShop.png";
import { useCart } from "./CartContext";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  const cart = useCart();

  const itemsCount = Object.keys(cart.cart).reduce((prev, curr) => {
    return prev + cart.cart[curr].quantity;
  }, 0);

  /*   const history = useHistory();
  const [quantity, setQuantity] = useState(0); */

  /*   useEffect(() => {
    setQuantity(cart?.cart?.length || 0);
    console.log(quantity);
  }, [cart]);
 */
  return (
    <nav className="header">
      <Link
        to="/"
        onClick={() => {
          history.push("/");
          window.location.reload();
        }}
        className="header-link"
      >
        <img className="header-logo" alt="logo" src={logo} />
      </Link>
      <div className="header-search">
        <input type="text" className="header-search" />
        <SearchIcon className="header-searchIcon" />
      </div>
      <Link to="/" className="header-link">
        <div className="header-option">
          <span className="header-optionLineOne">Olá,</span>
          <span className="header-optionLineTwo">Faça seu login</span>
        </div>
      </Link>

      <Link to="/checkout" className="header-link">
        <div
          className="header-optionCart"
          onClick={() => {
            history.push("/checkout");
            window.location.reload();
          }}
        >
          <AddShoppingCartOutlinedIcon />

          {itemsCount && (
            <span className="header-optionLineTwo header-cartCount">
              {itemsCount}
            </span>
          )}
        </div>
      </Link>
    </nav>
  );
}

export default Header;
