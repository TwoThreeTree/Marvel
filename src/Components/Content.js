import React from "react";
import Card from "./Card";

const Content = () => {
  return (
    <>
      <div className="inputButtons">
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
        <button className="btn">Shuffle</button>
      </div>
      <div className="content">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Content;
