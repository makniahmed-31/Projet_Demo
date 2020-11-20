import Axios from "axios";
import React from "react";
import Bounce from "react-reveal/Bounce";
import { withRouter } from "react-router-dom";

const Cart = (props) => {
  const CartItems = props.CartItems;

  const total = CartItems.reduce(
    (a, c) =>
      a + c.Prix * c.count >= 50
        ? Math.round(((a + c.Prix * c.count) * 0.95 * 10) / 10)
        : Math.round(a + c.Prix * c.count) >= 150
        ? Math.round(((a + c.Prix * c.count) * 0.9 * 10) / 10)
        : a + c.Prix * c.count,
    0
  );

  const registreCommande = () => {
    if (props.Cxuser) {
      let Client = props.Cxuser;

      if (CartItems != "" && total != "") {
        Axios.post("http://localhost:4000/Commande", {
          Client,
          CartItems,
          total,
          date: Date(),
          statut: "en attente",
        });
        props.history.push("/Commande");
        props.refreshFn();
      }
    } else {
      props.history.push("/Registre");
    }
  };

  return (
    <div>
      {CartItems.length === 0 ? (
        <div className="cart cart-header">Pannier Vide</div>
      ) : (
        <div className="cart-header">
          <p className="remise">You have {CartItems.length} in the Cart </p>
          <Bounce>
            {" "}
            <p className="remise">
              Bénéficier de nos réductions a partir de 50 dinars
            </p>
          </Bounce>
        </div>
      )}
      <div>
        <div className="cart">
          <ul className="cart-items">
            {CartItems.map((el) => (
              <li key={el.id}>
                <div className="pico">
                  <img src={el.Image1} alt={el.Name} />
                </div>
                <div className="name-product">{el.Name}</div>
                <p className="incr">
                  <strong onClick={() => props.IncreDecre(el, 1)}>+</strong>
                  {el.count}
                  <strong onClick={() => props.IncreDecre(el, -1)}>-</strong>
                </p>{" "}
                <p className="cart-prix"> {" x " + "TND" + " " + el.Prix} </p>
                <p className="sub-total">
                  {" "}
                  {"Prix:" + " " + "TND" + " " + el.Prix * el.count}{" "}
                </p>
                <button
                  className="button delet"
                  onClick={() => props.removeFromCart(el.id)}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {CartItems.length !== 0 && (
            <div className="cart-pay">
              {/* <div className="total"> {total>=50 && <p>aprés Remise</p>}</div> */}
              <div className="total">
                Net a Payer :{" "}
                {"TND" +
                  " " +
                  CartItems.reduce(
                    (a, c) =>
                      a + c.Prix * c.count >= 50
                        ? Math.round(((a + c.Prix * c.count) * 0.95 * 10) / 10)
                        : Math.round(a + c.Prix * c.count) >= 150
                        ? Math.round(((a + c.Prix * c.count) * 0.9 * 10) / 10)
                        : a + c.Prix * c.count,
                    0
                  )}
              </div>
              <div className="button-css" onClick={registreCommande}>
                {props.Cxuser === null ? "Sign Up" : "Commander"}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Cart);
