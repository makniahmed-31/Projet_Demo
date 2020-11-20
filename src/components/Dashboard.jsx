import React, { useEffect, useState } from "react";
import Axios from "axios";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

const Dashboard = (props) => {
  const [listProduits, setlistProduits] = useState([]);
  const [listCommande, setlistCommande] = useState([]);
  const [totalUsers, setTotalUsers] = useState([]);
  const [morePrdt, setMorePrdt] = useState(7);
  const [product, setProduct] = useState(null);
  const [id, setId] = useState('');
  const [Catégorie, setCatégorie] = useState('');
  const [Name, setName] = useState('');
  const [Image1, setImage1] = useState('');
  const [Image2, setImage2] = useState('');
  const [Image3, setImage3] = useState('');
  const [Description, setDescription] = useState('');
  const [Prix, setPrix] = useState('');

  useEffect(() => {
    Axios.get("http://localhost:4000/Products").then((res) =>
      setlistProduits(res.data)
    );
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:4000/All_Commande").then((res) =>
      setlistCommande(res.data)
    );
  }, listCommande);

  useEffect(() => {
    Axios.get("http://localhost:4000/All_Users").then((res) =>
      setTotalUsers(res.data)
    );
  }, totalUsers);

  const registreNewProduit = () => {
    if (
      id != "" &&
      Catégorie != "" &&
      Name != "" &&
      Image1 != "" &&
      Image2 != "" &&
      Image3 != "" &&
      Description != "" &&
      Prix != "" 
    ) {
      Axios
        .post("http://localhost:4000/Products", {
          id,
          Catégorie,
          Name,
          Image1,
          Image2,
          Image3,
          Description,
          Prix,
          statut: "en attente",
        })
        .then((res) => props.history.push("/Dashboard"));
    } else {
      alert("Nouveau Produit incomplete");
    }
  };


  const openModal = (el) => {
    setProduct(el);
  };
  const closeModal = () => {
    setProduct(null);
  };

  const copyListCommande = listCommande.slice().reverse();

  return (
    <div className="admin-container">
      <h1>Store Dashboard</h1>
      <div className="grid1">
        <div className="a b1">
          <i class="fa fa-shopping-cart fa-3x"></i>
          <div>
            <p>Total Orders</p>
            <p> {listCommande.length} </p>
          </div>
        </div>
        <div className="a b2">
          <i class="fa fa-eur ml-3 fa-3x"></i>
          <div>
            <p>Total Revenues</p>
            <p> TND {listCommande.reduce((a, c) => a + c.total, 0)} </p>
          </div>
        </div>
        <div className="a b3">
          <i class="fa fa-cart-arrow-down fa-3x"></i>
          <div>
            <p>Total Abandoned</p>
            <p>Fn</p>
          </div>
        </div>
        <div className="a b4">
          <i class="fa fa-users fa-3x"></i>
          <div>
            <p>Total Customers</p>
            <p> {totalUsers.filter((el) => el.Category === "User").length} </p>
          </div>
        </div>
        <div className="a b5">
          <i class="fa fa-list fa-3x"></i>
          <div>
            <p>Total Products</p>
            <p> {listProduits.length} </p>
          </div>
        </div>
        <div className="a b6">
          <i class="fa fa-sitemap fa-3x"></i>
          <div>
            <p>Total Categories</p>
            <p>
              {" "}
              {[...new Set(listProduits.map((el) => el.Catégorie))].length}{" "}
            </p>
          </div>
        </div>
        <div className="a b7">
          <i class="fa fa-cube fa-3x"></i>
          <div>
            <p>Total Brands</p>
            <p>Fn</p>
          </div>
        </div>
        <div className="a b8">
          <i class="fa fa-comments fa-3x"></i>
          <div>
            <p>Total Reviews</p>
            <p>Fn</p>
          </div>
        </div>
        <div className="spa1">
          <div>
            <h1>Recent Orders</h1>
            <div className="dtlcmd">
              <thead>
                <tr>
                  <th>N°Cmd</th>
                  <th>Nbr Prdc</th>
                  <th>TTC</th>
                  <th>Statut</th>
                  <th>Dte Cmd</th>
                  <th>Dte Livr</th>
                </tr>
              </thead>

              {copyListCommande.map((el) => (
                <tbody key={el.id}>
                  <tr>
                    <td>
                      {copyListCommande.length - copyListCommande.indexOf(el)}
                    </td>
                    <td> {el.CartItems.length} </td>
                    <td> TND {el.total} </td>
                    <td style={{ backgroundColor: "red" }}> {el.statut} </td>
                    <td> {el.date.substr(0, 24)} </td>
                    <td> ? </td>
                  </tr>
                </tbody>
              ))}
            </div>
          </div>
        </div>
        <div className="spa2">
          <div>
            <h1>Update Products</h1>
            <div className="dtlprdc">
              {listProduits.slice(0, morePrdt).map((el) => (
                <tbody key={el.id}>
                  <tr>
                    <td>
                      <img src={el.Image1} alt={el.Name} />
                    </td>
                    <td>
                      {" "}
                      <p>{el.Name}</p>{" "}
                    </td>
                    <td>
                      {" "}
                      <p>{el.Catégorie}</p>{" "}
                    </td>
                    <td className="ico">
                      <button className="wrench">
                        <i class="fa fa-wrench" aria-hidden="true"></i>
                      </button>
                      <button onClick={() => openModal(el)} className="plus">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                      </button>
                      <button className="trash">
                        <i class="fa fa-trash-o" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
              <p
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() =>
                  morePrdt === 7
                    ? setMorePrdt(listProduits.length)
                    : setMorePrdt(7)
                }
              >
                voir plus <br />{" "}
                <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {product && (
        <Modal isOpen={true} onRequestClose={closeModal} className="modal">
          <Zoom>
            <div className="zoom">
            <button onClick={closeModal}>x</button>
              <form>
                <ul className="form-container2">
                  <li>
                    <label>Id du Produit</label>
                    <input
                      name="id"
                      type="text"
                      required
                      onChange={(e)=>setId(e.target.value)}
                    />
                  </li>
                  <li>
                    <label>Nom du Produit</label>
                    <input
                      name="nom"
                      type="text"
                      required
                      onChange={(e)=>setName(e.target.value)}
                    />
                  </li>
                  <li>
                    <label>Catégorie du Produit</label>
                    <input
                      name="catégorie"
                      type="text"
                      required
                      onChange={(e)=>setCatégorie(e.target.value)}
                    />
                  </li>
                  <li>
                    <label>ImageUrl n°1 du Produit</label>
                    <input
                      name="img"
                      type="text"
                      required
                      onChange={(e)=>setImage1(e.target.value)}
                    />
                  </li>
                  <li>
                    <label>ImageUrl n°2 du Produit</label>
                    <input
                      name="img"
                      type="text"
                      required
                      onChange={(e)=>setImage2(e.target.value)}
                    />
                  </li>
                  <li>
                    <label>ImageUrl n°3 du Produit</label>
                    <input
                      name="img"
                      type="text"
                      required
                      onChange={(e)=>setImage3(e.target.value)}
                    />
                  </li>
                  <li>
                    <label>Description du Produit</label>
                    <input
                      name="text"
                      type="text"
                      required
                      onChange={(e)=>setDescription(e.target.value)}
                    />
                  </li>
                  <li>
                    <label>Prix du Produit</label>
                    <input
                      name="portable"
                      type="text"
                      required
                      onChange={(e)=>setPrix(e.target.value)}
                    />
                  </li>
                  <li>
                    <button
                      type="submit"
                      className="button primary"
                      onClick={registreNewProduit}
                    >
                      Valider
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </Zoom>
        </Modal>
      )}
    </div>
  );
};

export default Dashboard;
