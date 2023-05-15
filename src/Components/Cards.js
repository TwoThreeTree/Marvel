import React from "react";
import Card from "./Card";

const Cards = ({ items, setItem, results }) => {
  return (
    <div className="cards">
      {items.map((item) => (
        <Card item={item} key={item.id} results={results} />
      ))}
    </div>
  );
};

export default Cards;
