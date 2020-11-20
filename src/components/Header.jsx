import React from "react";
import logo from "../logo.gif";
import { FcSearch } from "react-icons/fc";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaSignInAlt } from "react-icons/fa";
import { Link, withRouter } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header-container">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
          <p className="slogant">Le Goût du Paradis</p>
        </Link>
      </div>
      <div className="search">
        <input
          onChange={(el) => props.getKeyword(el.target.value)}
          type="text"
          placeholder="Rechercher"
        />
        <Link to="/Produits">
          <FcSearch className="fc" />
        </Link>
      </div>
      {props.Cxuser !== null && (
        <div className="wlc">Wellcome {props.Cxuser.Nom}</div>
      )}
      <div className="cart-icon">
        <a
          onClick={() =>
            props.Cxuser === null
              ? props.history.push("/Registre")
              : props.logoutFn()
          }
          className="login"
        >
          {" "}
          {props.Cxuser === null ? "Sign Up" : "LogOut"}{" "}
          <FaSignInAlt className="in" />{" "}
        </a>
        <Link to="/Cart">
          <RiShoppingCartLine className="ri" />{" "}
          <p className="qtn">{props.CartItems.length}</p>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Header);
