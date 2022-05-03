import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home-image"
        src="https://m.media-amazon.com/images/I/61J7RPieVOL._SX1500_.jpg"
        alt=""
      />

      <div className="home-row">
        <Product />
      </div>
    </div>
  );
}

export default Home;
