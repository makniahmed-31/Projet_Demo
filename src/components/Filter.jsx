import React from "react";

const Filter = (props) => {
  return (
    <div className="filter">
      <div className="filter-result">{props.count} Produits</div>
      <div className="filter-sort">
        {" "}
        Order{" "}
        <select
          value={props.Sort}
          onChange={(e) => props.sortProducts(e.target.value)}
        >
          <option value="Nouveauté">Prix</option>
          <option value="Lowest">Lowest</option>
          <option value="Highest">Highest</option>
        </select>
      </div>
      <div className="filter-categorie">
        Filter{" "}
        <select
          value={props.Categorie}
          onChange={(e) => props.filterProducts(e.target.value)}
        >
          <option value="">All</option>
          <option value="Jus">Nos Jus</option>
          <option value="Cocktail">Nos Cocktail</option>
          <option value="Gaufres">Nos Gaufres</option>
          <option value="Crépes">Nos Crépes</option>
          <option value="Yaourt">Nos Yaourt</option>
          <option value="Glaces">Nos Glaces</option>
          <option value="Salades">Nos Salades</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
