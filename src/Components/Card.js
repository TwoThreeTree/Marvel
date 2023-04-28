import React from "react";
import cardPic from "../marvel_img/card.jpg";

const Card = () => {
  return (
    <div className="card">
      <img src={cardPic} alt="" />
      <p>Hulk</p>
    </div>
  );
};

export default Card;
