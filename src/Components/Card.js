import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  let navigate = useNavigate();

  return (
    <div className="card" key={item.id} onClick={() => navigate(`/${item.id}`)}>
      <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
      <p>{item.name}</p>
    </div>
  );
};

export default Card;
