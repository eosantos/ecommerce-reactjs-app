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
        <Product
          id="12345"
          title="Amazfit gtr 3"
          price={1360.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61h2jznRbyL._AC_SL1500_.jpg"
        />
        <Product
          id="12346"
          title="Ticwatch E3 Smart Watch"
          price={1098.0}
          rating={3}
          image="https://m.media-amazon.com/images/I/61p3TcCeRUS._AC_SX522_.jpg"
        />
        <Product
          id="12347"
          title="Relógio Smartwatch Amazfit GTS 2"
          price={579.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/61hmDN6921L._AC_SL1500_.jpg"
        />
      </div>

      <div className="home-row">
        <Product
          id="12345"
          title="Amazfit gtr 3"
          price={1360.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61h2jznRbyL._AC_SL1500_.jpg"
        />
        <Product
          id="12346"
          title="Ticwatch E3 Smart Watch"
          price={1098.0}
          rating={3}
          image="https://m.media-amazon.com/images/I/61p3TcCeRUS._AC_SX522_.jpg"
        />
        <Product
          id="12347"
          title="Relógio Smartwatch Amazfit GTS 2"
          price={579.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/61hmDN6921L._AC_SL1500_.jpg"
        />
        <Product
          id="12345"
          title="Amazfit gtr 3"
          price={1360.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61h2jznRbyL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="12346"
          title="Ticwatch E3 Smart Watch"
          price={1098.0}
          rating={3}
          image="https://m.media-amazon.com/images/I/61p3TcCeRUS._AC_SX522_.jpg"
        />
        <Product
          id="12347"
          title="Relógio Smartwatch Amazfit GTS 2"
          price={579.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/61hmDN6921L._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
