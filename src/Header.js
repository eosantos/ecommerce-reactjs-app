import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";

function Header() {
  return (
    <nav className="header">
      <img
        className="header-logo"
        alt="logo"
        src="https://liven.tech/_next/image?url=%2Fimages%2Flogo-2x.png&w=256&q=75"
      />
      <div className="header-search">
        <input type="text" className="header-search" />
        <SearchIcon className="header-searchIcon" />
      </div>
      <Link to="/" className="header-link">
        <div className="header-option">
          <span className="header-optionLineOne">Olá, Usuário</span>
          <span className="header-optionLineTwo">Sign in or Sign Out</span>
        </div>
      </Link>
      <Link to="/checkout" className="header-link">
        <div className="header-optionCart">
          <AddShoppingCartOutlinedIcon />
          <span className="header-optionLineTwo header-cartCount">8</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
