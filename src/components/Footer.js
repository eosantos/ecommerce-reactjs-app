import React from "react";
import "./Footer.css";
import logo from "../assets/img/logoLivenShop.png";

function Footer() {
  return (
    <div className="footer-area">
      <div className="footer-areaTop">
        <img className="header-logo" alt="logo" src={logo} />
      </div>
    </div>
  );
}

export default Footer;
