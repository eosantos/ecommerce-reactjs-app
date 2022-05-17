import React from "react";
import { Link } from "react-router-dom";
import "./Navlinks.css";

function Navilinks() {
  return (
    <div className="navilinks">
      <div className="navilinks-outer">
        <div className="navilinks-inner">
          <Link to="/">Bolsas e Malas</Link>
          <Link to="/">Roupas Masculinas</Link>
          <Link to="/">Roupas Femininas</Link>
          <Link to="/">Acessórios</Link>
          <Link to="/">Informática</Link>
        </div>
      </div>
    </div>
  );
}

export default Navilinks;
