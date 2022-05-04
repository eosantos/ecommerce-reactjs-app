import React from "react";
import Product from "./Product";
import "./Home.css";
import Banner from "../assets/img/BannerLivenShop.png";

function Home() {
  return (
    <div className="home">
      <img className="home-image" src={Banner} alt="" />

      <div className="home-row">
        <Product />
      </div>
    </div>
  );
}

export default Home;
