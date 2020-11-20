import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header.jsx";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Nav from "./components/Nav";
import data from "./data.json";
import Cart from "./components/Cart";
import Produits from "./components/Produits";
import Filter from "./components/Filter";
import Carousel3d from "./components/Carousel3d";
import Accueil from "./components/Accueil";
import Valeur from "./components/Valeur";
import Infos from "./components/Infos";
import Registre from "./components/Registre";
import Signin from "./components/Signin";
import axios from "axios";
import Commande from "./components/Commande";
import Dashboard from "./components/Dashboard";

function App(props) {
  const [InCart, setInCart] = useState(0);
  const [ProductsList, setProductsList] = useState([]);
  const [CartItems, setCartItems] = useState([]);
  const [Categorie, setCategorie] = useState("");
  const [Sort, setSort] = useState("");
  const [KeyWord, setKeyWord] = useState("");
  const [Cxuser, setCxuser] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/Products")
      .then((res) => setProductsList(res.data));
    setCartItems(
      JSON.parse(localStorage.getItem("CartItems"))
        ? JSON.parse(localStorage.getItem("CartItems"))
        : []
    );
    setCxuser(JSON.parse(localStorage.getItem("Users")));
  }, []);

  const refreshFn = () => {
    localStorage.setItem("CartItems", JSON.stringify([]));
    setCartItems([]);
  };

  const getCxuser = (x) => {
    setCxuser(x);
    localStorage.setItem("Users", JSON.stringify(x));
  };

  const logoutFn = () => {
    setCxuser(null);
    localStorage.removeItem("Users");
  };

  const getKeyword = (x) => {
    setKeyWord(x);
  };

  const IncreDecre = (el, nb) => {
    const cartItems = CartItems.slice();
    if (CartItems[CartItems.indexOf(el)].count + nb > 0) {
      cartItems.forEach((item) => {
        if (item.id === el.id) {
          item.count = item.count + nb;
        }
      });
    }
    setCartItems(cartItems);
    localStorage.setItem("CartItems", JSON.stringify(CartItems));
  };

  const sortProducts = (event) => {
    setSort(event);
    setProductsList(
      ProductsList.slice().sort((a, b) =>
        Sort === "Lowest"
          ? a.Prix < b.Prix
            ? 1
            : -1
          : Sort === "Highest"
          ? a.Prix > b.Prix
            ? 1
            : -1
          : a.id > b.id
          ? 1
          : -1
      )
    );
  };
  const filterProducts = (event) => {
    if (event === "") {
      setProductsList(data.Products);
      setCategorie(event);
    } else {
      setCategorie(event);
      setProductsList(data.Products.filter((el) => el.Catégorie == event));
    }
  };

  const removeFromCart = (product) => {
    setCartItems([...CartItems.filter((x) => x.id !== product)]);
    localStorage.setItem(
      "CartItems",
      JSON.stringify([...CartItems.filter((x) => x.id !== product)])
    );
  };

  const addToCart = (el) => {
    const cartItems = CartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === el.id) {
        item.count++;
        alreadyInCart = true;
      }
    });

    if (!alreadyInCart) {
      cartItems.push({ ...el, count: 1 });
    }
    setCartItems(cartItems);
    localStorage.setItem("CartItems", JSON.stringify(cartItems));
  };

  const inCartFn = (x) => {
    setInCart(x);
  };

  return (
    <Router>
      <div className="grid-container">
        <header>
          <div className="Header">
            <Header
              getKeyword={getKeyword}
              CartItems={CartItems}
              Cxuser={Cxuser}
              logoutFn={logoutFn}
            />
            <Nav />
          </div>
        </header>
        <main>
          <Route path="/" exact component={() => <Carousel3d />} />
          <Route path="/Registre" component={() => <Registre />} />
          <Route
            path="/Signin"
            component={(props) => <Signin {...props} getCxuser={getCxuser} />}
          />
          <Route
            path="/"
            exact
            component={(props) => (
              <Accueil
                {...props}
                ProductsList={ProductsList}
                addToCart={addToCart}
              />
            )}
          />
          <Route
            path="/Produits"
            component={(props) => (
              <Filter
                {...props}
                count={ProductsList.length}
                Categorie={Categorie}
                Sort={Sort}
                filterProducts={filterProducts}
                sortProducts={sortProducts}
              />
            )}
          />
          <Route
            path="/Produits"
            component={(props) => (
              <Produits
                {...props}
                KeyWord={KeyWord}
                inCartFn={inCartFn}
                addToCart={addToCart}
                ProductsList={ProductsList}
                CartItems={CartItems}
              />
            )}
          />
          <Route path="/Dashboard/admin" component={(props) => <Dashboard />} />
          <Route
            path="/Cart"
            component={(props) => (
              <Cart
                {...props}
                refreshFn={refreshFn}
                Cxuser={Cxuser}
                IncreDecre={IncreDecre}
                removeFromCart={removeFromCart}
                CartItems={CartItems}
              />
            )}
          />

          <Route path="/Commande" component={() => <Commande />} />
          <Route path="/Infos" component={() => <Infos />} />
          <Route path="/Valeur" component={() => <Valeur />} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
