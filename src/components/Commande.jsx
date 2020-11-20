import Axios from "axios";
import React, { useState, useEffect } from "react";
import logo from "../logo.gif";

const Commande = (props) => {
  const [Commande, setCommande] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/All_Commande").then((res) =>
      setCommande(res.data)
    );
  }, Commande);

  return (
    <div className="commande">
      {Commande.map((el) => (
        <div className="bon" key={el._id}>
          <img
            className="logo"
            style={{ marginTop: "2rem" }}
            src={logo}
            alt=""
          />
          <h2 className="ss">Service de Livraison a Domicile</h2>
          <p>
            <u>Adress</u>: Route Teniour, Sfax 3069
            <br />
            <u>Portable</u>:74 440 295 <u>Email</u>:Jufré@Jufré.com{" "}
          </p>
          <h1>Bon de Commande</h1>
          <p>
            <u>Date de Commande : </u>
            {el.date.substr(0, 24)}
          </p>
          <p>
            <u>Statut :</u>
            {el.statut}
          </p>
          <div className="table">
            <thead>
              <tr>
                <th>Ref Produit</th>
                <th>Nom du Produit</th>
                <th>Qtn</th>
                <th>Prix Uni</th>
                <th>Prix TTC</th>
              </tr>
            </thead>
            {el.CartItems.map((item) => (
              <tbody key={item.id}>
                <tr>
                  <td>{item.id}</td>
                  <td> {item.Name} </td>
                  <td> {item.count} </td>
                  <td> {item.Prix} </td>
                  <td> {item.Prix * item.count} </td>
                </tr>
              </tbody>
            ))}

            <tbody>
              <tr>
                <td colSpan="2"></td>
                <td colSpan="2">Frais de Livraison</td>
                <td> {el.total < 150 ? "TND 7" : "gratuit"}</td>
              </tr>
              <tr>
                <td colSpan="2"></td>
                <td colSpan="2">Montant Total TTC </td>
                <td>
                  {" "}
                  <strong>
                    {" "}
                    TND {el.total < 150 ? el.total + 7 : el.total}{" "}
                  </strong>
                </td>
              </tr>
            </tbody>

            <p>
              {" "}
              <i> Remise de 5% pour les achats superieur a 50dt</i>
            </p>
            <p>
              {" "}
              <i>
                {" "}
                Frais de Livraison Gratuit pour les achats superieur a 150dt
              </i>
            </p>
          </div>

          <div className="client">
            <h2>Infos Client</h2>
            <div className="table">
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <strong> Nom</strong>
                  </td>
                  <td> {el.Client.Nom} </td>
                </tr>
                <tr>
                  <td>
                    <strong>Prénom</strong>
                  </td>
                  <td> {el.Client.Prenom} </td>
                </tr>
                <tr>
                  <td>
                    <strong>Adress</strong>
                  </td>
                  <td> {el.Client.Adress} </td>
                </tr>
                <tr>
                  <td>
                    <strong>Code Postal</strong>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <strong>Portable</strong>
                  </td>
                  <td> {el.Client.Portable} </td>
                </tr>
                <tr>
                  <td>
                    <strong>Email</strong>
                  </td>
                  <td> {el.Client.Email} </td>
                </tr>
              </tbody>
            </div>
          </div>
          <div className="signature">
            Date de Livraison : .. / .. / .... <br />
            Signature <br /> .{" "}
          </div>
          <div className="bas-commande">
            {" "}
            <p className="bas">Jufré... Le Goût du Paradis</p>{" "}
            <p>
              {" "}
              <strong>Commande N° {Commande.indexOf(el) + 1} </strong>{" "}
            </p>{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Commande;
