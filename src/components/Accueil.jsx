import React from "react";
import { Link } from "react-router-dom";
import { RiMoreFill } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";

const Accueil = (props) => {
  return (
    <div className="accueil">
      <div className="newest">Nouveauté jufré 2020</div>
      <div className="accueil1">
        {props.ProductsList.slice(0, 4).map((el) => (
          <div className="mini" key={el.id}>
            <img src={el.Image1} alt={el.Name} />
            <h2>{el.Name}</h2>
            <div>
              <p>
                {" "}
                <span> {"TND" + " " + el.Prix + " "}</span> <br />
              </p>
              <div onClick={() => props.addToCart(el)}>
                <button class="button-css">
                  <span>Ajouter au Panier </span>
                  <RiShoppingCartLine className="rii" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="view">
        <Link to="/Produits">
          <p>
            Voir plus <br /> <RiMoreFill className="gr" />
          </p>{" "}
        </Link>
      </div>
      <div className="accueil2">
        <div className="icons-ac">
          <figure>
            <img
              src="https://1001jus.fr/wp-content/uploads/2015/11/1447355412_fit4.png"
              alt=""
              className="img-ac"
            />
            <Link to="/Infos">
              <h1>Purifiez votre corps</h1>
            </Link>
            <br />
            <figcaption>
              Découvrez les bienfaits des jus de fruits pour permettre à votre
              organisme d'éliminer les toxines .
            </figcaption>
          </figure>
          <figure>
            <img
              src="https://1001jus.fr/wp-content/uploads/2015/11/1447356017_fit19.png"
              alt=""
              className="img-ac"
            />
            <Link to="/Infos">
              <h1>Gagnez en énergie</h1>
            </Link>
            <br />
            <figcaption>
              Découvrez les bienfaits des jus de fruits pour gagner en énergie
              et se sentir en pleine forme .
            </figcaption>
          </figure>
          <figure>
            <img
              src="https://1001jus.fr/wp-content/uploads/2015/11/1447355827_fit3.png"
              alt=""
              className="img-ac"
            />
            <Link to="/Infos">
              <h1>Perdez du poids</h1>
            </Link>
            <br />
            <figcaption>
              Découvrez comment une cure detox peut vous aider à perdre du poids
              et maintenir votre ligne toute l'année .
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
