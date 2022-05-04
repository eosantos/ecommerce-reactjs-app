import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import logo from "../assets/img/logoLivenShop.png";
/*import { useStateValue } from "./StateProvider";*/

function Header() {
  /*const [{ cart }] = useStateValue();*/

  return (
    <nav className="header">
      <img className="header-logo" alt="logo" src={logo} />
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
        <div className="header-optionCart">
          <AddShoppingCartOutlinedIcon />
          <span className="header-optionLineTwo header-cartCount">
            {/*cart?.length*/}1
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
