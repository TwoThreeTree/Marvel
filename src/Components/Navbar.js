import React from "react";

const Navbar = ({ search, setSearch }) => {
  return (
    <nav className="SearchAndButtons">
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <button className="btn">Shuffle</button>
      <button className="btn">Fight</button>
    </nav>
  );
};

export default Navbar;
