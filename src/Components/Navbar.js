import React from "react";
import Search from "./Search";

const Navbar = ({
  search,
  hideShufferle,
  setHideShuffle,
  setSearch,
  results,
  setResults,
  total,
  items,
  setItem,
  setCurrentUrl,
}) => {
  const handleUrl = () => {
    const offset = Math.floor(Math.random() * total - 20);
    console.log(offset);
    setCurrentUrl(
      `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=b176c7a6f6a0df334a8cb2b494e91cdc&hash=bb68e82820713f93a4a688a8a52a3b46&offset=${offset}`
    );
  };

  return (
    <nav className="SearchAndButtons">
      <Search
        search={search}
        setSearch={setSearch}
        results={results}
        setHideShuffle={setHideShuffle}
        items={items}
        setItem={setItem}
        setResults={setResults}
      />
      {!hideShufferle ? (
        <button className="btn" onClick={() => handleUrl()}>
          Shuffle
        </button>
      ) : null}
    </nav>
  );
};

export default Navbar;
