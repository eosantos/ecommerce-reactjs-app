import React from "react";
import { Link } from "react-router-dom";
import "./Navlinks.css";

function Navilinks() {
  return (
    <div className="navilinks">
      <div className="navilinks-outer">
        <div className="navilinks-inner">
          <Link>Bolsas e Malas</Link>
          <Link>Roupas Masculinas</Link>
          <Link>Roupas Femininas</Link>
          <Link>Acessórios</Link>
          <Link>Informática</Link>
        </div>
      </div>
    </div>
  );
}

export default Navilinks;
