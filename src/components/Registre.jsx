import React, { useState } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

const Registre = (props) => {
  const [Email, setEmail] = useState("");
  const [Nom, setNom] = useState("");
  const [Adress, setAdress] = useState("");
  const [Mdp, setMdp] = useState("");
  const [errMail, seterrMail] = useState("");
  const [errPass, setErrPass] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Portable, setPortable] = useState("");

  const registreUser = () => {
    if (
      Email != "" &&
      Nom != "" &&
      Adress != "" &&
      Mdp != "" &&
      Prenom != "" &&
      Portable != ""
    ) {
      axios
        .post("http://localhost:4000/Users", {
          Email,
          Nom,
          Prenom,
          Adress,
          Portable,
          Mdp,
          Category: "User",
        })
        .then((res) => props.history.push("/Signin"));
    } else {
      alert("votre inscription incomplete");
    }
  };

  const testMail = (e) => {
    let mail = e.target.value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      setEmail(mail);
      seterrMail("");
    } else {
      seterrMail("e-mail non valide ");
    }
  };
  const testPass = (e) => {
    let pass = e.target.value;
    if (pass.length < 6) {
      setErrPass("mot de pass courte");
    } else {
      setMdp(pass);
      setErrPass("");
    }
  };

  return (
    <div className="registre">
      <h1>Subscribe here or</h1>
      <Link to="/Signin">
        {" "}
        <h1> Login</h1>
      </Link>
      <div className="cart">
        <form action="">
          <ul className="form-container">
            <li>
              <label>Email</label>
              <input name="email" type="email" required onChange={testMail} />
              <p> {errMail} </p>
            </li>
            <li>
              <label>Nom</label>
              <input
                name="name"
                type="text"
                required
                onChange={(name) => setNom(name.target.value)}
              />
            </li>
            <li>
              <label>Prénom</label>
              <input
                name="name"
                type="text"
                required
                onChange={(prenom) => setPrenom(prenom.target.value)}
              />
            </li>
            <li>
              <label>Adress</label>
              <input
                name="adress"
                type="text"
                required
                onChange={(adress) => setAdress(adress.target.value)}
              />
            </li>
            <li>
              <label>Portable</label>
              <input
                name="portable"
                type="text"
                required
                onChange={(portable) => setPortable(portable.target.value)}
              />
            </li>
            <li>
              <label>Mot de pass</label>
              <input
                name="Mot de pass"
                type="password"
                required
                onChange={testPass}
              />
              <p> {errPass} </p>
            </li>
            <li>
              <button
                type="submit"
                onClick={registreUser}
                className="button primary"
              >
                Valider
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Registre);
