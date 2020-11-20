import React, { useState } from "react";
import img11 from "../img/menu11.jpg";
import img22 from "../img/menu22.jpg";


const Valeur = () => {

  const [zoomImg1, setzoomImg1] = useState("sml-img");
  const [zoomImg2, setzoomImg2] = useState("sml-img");

  const zoomChangesImg1 = ()=>{
     zoomImg1 === "sml-img"?setzoomImg1('big-img'):setzoomImg1("sml-img")
  }
  const zoomChangesImg2 = ()=>{
    zoomImg2 === "sml-img"?setzoomImg2('big-img'):setzoomImg2("sml-img")
  }


  return (
    <div className="valeur">
      <p>☆Positionnement haut de gamme, selon 3 axes : la qualité, la santé et l’originalité. </p>
      <img onClick={zoomChangesImg1} className={zoomImg1} src={img11} alt="" />
      <p>
      ☆notre caractère nous permet d’anticiper les tendances avant nos concurrents, et de développer sans relâche de nouveaux plaisirs.{" "}
      </p>
      <img onClick={zoomChangesImg2} className={zoomImg2} src={img22} alt="" />
    </div>
  );
};

export default Valeur;
