import React, { Component } from "react";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import { RiShoppingCartLine } from "react-icons/ri";

export default class Produits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  openModal = (product) => {
    this.setState({ product });
  };

  closeModal = () => {
    this.setState({ product: null });
  };
  render() {
    const { product } = this.state;

    return (
      <div className="accueil">
        <div className="accueil1">
          {this.props.ProductsList.filter((el) =>
            el.Name.toUpperCase().includes(this.props.KeyWord.toUpperCase())
          ).map((el) => (
            <div className="mini" key={el.id}>
              <img
                onClick={() => this.openModal(el)}
                src={el.Image1}
                alt={el.Name}
              />
              <h2 onClick={() => this.openModal(el)}>{el.Name}</h2>
              <div>
                <p>
                  {" "}
                  <span> {"TND" + " " + el.Prix + " "}</span> <br />
                </p>
                <div onClick={() => this.props.addToCart(el)}>
                  <button class="button-css">
                    <span>Ajouter au Panier </span>
                    <RiShoppingCartLine className="rii" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {product && (
          <Modal
            isOpen={true}
            onRequestClose={this.closeModal}
            className="modal"
          >
            <Zoom>
              <div className='zoom' >
                <button onClick={this.closeModal}>x</button>
                <div className="css">
                  <img src={product.Image2} alt={product.Name} />

                  <div className="csss">
                    <h2>{product.Name}</h2>
                    <h3>{product.Description}</h3>
                    <p> {"Prix: TND" + " " + product.Prix + " "}</p>
                    <div
                      onClick={() => {
                        this.closeModal();
                        this.props.addToCart(product);
                      }}
                    >
                      <button class="button-css">
                        <span>Ajouter au Panier </span>
                        <RiShoppingCartLine className="rii" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
