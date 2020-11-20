import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar-container">
      <ul className="navbar">
        <Link to="/" className="link1">
          {" "}
          <li>ACCUEIL</li>{" "}
        </Link>
        <Link to="/Produits" className="link2" href="">
          {" "}
          <li>NOS PRODUITS</li>
        </Link>
        <a className="link3" href="">
          {" "}
          <li>POINTS DE VENTE</li>{" "}
        </a>
        <Link to="/Valeur" className="link4">
          <li>NOS VALEUR</li>
        </Link>
        <Link to="/Infos" className="link5">
          {" "}
          <li>INFOS</li>{" "}
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
