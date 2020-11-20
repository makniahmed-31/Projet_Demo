import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const Signin = (props) => {
  const [Mdp, setMdp] = useState("");
  const [Email, setEmail] = useState("");
  const [Users, setUsers] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/All_Users")
      .then((res) => setUsers(res.data));
  }, Users);

  const loginFn = () => {
    let x = Users.findIndex((el) => el.Email === Email && el.Mdp === Mdp);
    if (x === -1) {
      setErrMsg("Failed");
    } else if (Users[x].Category === "User") {
      props.getCxuser(Users[x]);
      props.history.push("/");
    } else {
      props.getCxuser(Users[x]);
      props.history.push("/Dashboard/admin");
    }
  };

  return (
    <div className="signin">
      <h1>Login</h1>
      <div className="cart">
        <form action="">
          <ul className="form-container">
            <li>
              <p> {errMsg} </p>
              <label>Email</label>
              <input
                name="email"
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li>
              <label>Mot de pass</label>
              <input
                name="Mot de pass"
                type="password"
                required
                onChange={(e) => setMdp(e.target.value)}
              />
            </li>
            <li>
              <button
                type="submit"
                onClick={loginFn}
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

export default withRouter(Signin);
