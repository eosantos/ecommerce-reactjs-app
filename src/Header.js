import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";

function Header() {
  return (
    <nav className="header">
      <img
        className="header__logo"
        alt="logo"
        src="https://liven.tech/_next/image?url=%2Fimages%2Flogo-2x.png&w=256&q=75"
      />
      <div className="header__search">
        <input type="text" className="header__search" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <Link to="/" className="header__link">
        <div className="header__option">
          <span className="header__optionLineOne">Olá, Usuário</span>
          <span className="header__optionLineTwo">Sign in or Sign Out</span>
        </div>
      </Link>
      <Link to="/checkout" className="header__link">
        <div className="header__optionCart">
          <AddShoppingCartOutlinedIcon />
          <span className="header__optionLineTwo header__cartCount">8</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
