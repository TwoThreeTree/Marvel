import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
      <p>{item.name}</p>
    </div>
  );
};

export default Card;
