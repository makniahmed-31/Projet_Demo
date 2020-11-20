import React, { useEffect } from "react";
import { Carousel } from "3d-react-carousal";
import imgleft from "../img/img1.png";
import imgright from "../img/img4.png";
import Fade from "react-reveal/Fade";

const Carousel3d = () => {
  let slides = [
    <img
      className="img-caro"
      src="https://themes.g5plus.net/oars/wp-content/uploads/revslider/slider-61/slider-6-1-r.png"
      alt="1"
    />,
    <img
      className="img-caro"
      src="https://221b-dijon.com/wp-content/uploads/2017/10/Mojito-Vierge.png"
      alt="2"
    />,
    <img
      className="img-caro"
      src="https://cdn.pixabay.com/photo/2020/05/07/15/35/fruit-5141977_1280.png"
      alt="3"
    />,
    <img
      className="img-caro"
      src="https://lh3.googleusercontent.com/proxy/11E-DqGiZZ58wiH2Hyy03inS3ZJMT7m7ECuDr4ZafNjuM8fhZUH6BJVlnptbnQpPJ1UgVtAjawArVpjVWW0yUaQ5WWL0HyYq432qK1Fh"
      alt="4"
    />,
    <img
      className="img-caro"
      src="https://webstockreview.net/images/clipart-apple-watercolor-13.png"
      alt="5"
    />,
    <img
      className="img-caro"
      src="https://www.yansfruits.com/wp-content/uploads/sites/27/revslider/slider-61/slider-6-2.png"
      alt="6"
    />,
    <img
      className="img-caro"
      src="https://pngimg.com/uploads/juice/juice_PNG7192.png"
      alt="7"
    />,
    <img
      className="img-caro"
      src="https://fedibio.com/wp-content/uploads/sites/14/2019/01/Tunisie-jus-Juice-Orange-Fedibio.png"
      alt="8"
    />,
  ];

  return (
    <div className="carousel3d">
      <Fade cascade left>
        <div className="side-left">
          <img src={imgleft} alt="" className="left-bar" />
        </div>
      </Fade>
      <Carousel slides={slides} autoplay={true} interval={7000} />
      <Fade cascade right>
        <div className="side-right">
          <img src={imgright} alt="" className="right-bar" />
        </div>
      </Fade>
    </div>
  );
};

export default Carousel3d;
