import React from "react";
import "./Footer.css";
import logo from "../assets/img/logoLivenShop.png";

function Footer() {
  return (
    <div className="footer-area">
      <footer class="social-footer">
        <div class="social-footer-icons">
          <ul class="menu simple">
            <li>
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon="fa-brands fa-facebook-square" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/?hl=en">
                <i class="fa fa-instagram" aria-hidden="true">
                  2
                </i>
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/">
                <i class="fa fa-pinterest-p" aria-hidden="true">
                  3
                </i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/?lang=en">
                <i class="fa-twitter" aria-hidden="true">
                  4
                </i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="footer-area-links">
        <div className="footer-area-link">
          <span>Fale conosco</span>
        </div>
        <div className="footer-area-link">
          <span>Marketplace</span>
        </div>
        <div className="footer-area-link">
          <span>Serviços</span>
        </div>
        <div className="footer-area-link">
          <span>Parcerias</span>
        </div>
      </div>
      <div className="footer-areaTop">
        <img className="header-logo" alt="logo" src={logo} />
      </div>
    </div>
  );
}

export default Footer;
