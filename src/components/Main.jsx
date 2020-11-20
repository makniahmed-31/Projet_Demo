import React, { useState } from "react";
import data from "../data.json";
import Filter from "./Filter";
import Cart from "./Cart";
import Produits from "./Produits";

const Main = (props) => {
  const [Categorie, setCategorie] = useState("");
  const [Sort, setSort] = useState("");
  const [ProductsList, setProductsList] = useState(data.Products);
  const [CartItems, setCartItems] = useState([]);

  const removeFromCart = (product) => {
    setCartItems([...CartItems.filter((x) => x.id !== product)]);
    localStorage.setItem("CartItems", JSON.stringify(CartItems));
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

  return (
    <div className="container-main">
      <Filter
        count={ProductsList.length}
        Categorie={Categorie}
        Sort={Sort}
        filterProducts={filterProducts}
        sortProducts={sortProducts}
      />
      <div className="content">
        <div className="main">
          <Produits
            addToCart={addToCart}
            ProductsList={ProductsList}
            CartItems={CartItems}
          />
        </div>
        <div className="sidebar">
          <Cart removeFromCart={removeFromCart} CartItems={CartItems} />
        </div>
      </div>
    </div>
  );
};

export default Main;
