import React from "react";
import "./Footer.css";
import logo from "../assets/img/logoLivenShop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-area">
      <div className="footer-areaTop">
        <div className="logoFooter">
          <img className="header-logo" alt="logo" src={logo} />
        </div>
        <div class="social-footer-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>

      <div className="footer-area-links">
        <div className="footer-area-link">
          <a href="/">
            <span>Fale conosco</span>
          </a>
        </div>
        <div className="footer-area-link">
          <a href="/">
            <span>Marketplace</span>
          </a>
        </div>

        <div className="footer-area-link">
          <a href="/">
            <span>Serviços</span>
          </a>
        </div>
        <div className="footer-area-link">
          <a href="/">
            <span>Parcerias</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
