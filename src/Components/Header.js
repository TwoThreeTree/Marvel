import React from "react";
import headerPic from "../marvel_img/header.jpg";

const Header = () => {
  return (
    <header className="header">
      <img src={headerPic} alt="Marvel" />
    </header>
  );
};

export default Header;
