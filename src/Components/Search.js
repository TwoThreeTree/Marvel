import React from "react";
// import { fetchHeroes } from "../Context/fetchHeroes";
import axios from "axios";

const Search = ({
  items,
  setHideShuffle,
  setItem,
  search,
  setSearch,
  results,
  setResults,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    let value = e.target[0].value;

    if (value === "") {
      alert("Please enter a character name");
    } else {
      let url = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=b176c7a6f6a0df334a8cb2b494e91cdc&hash=bb68e82820713f93a4a688a8a52a3b46&nameStartsWith=${value}`;

      try {
        const res = await axios.get(url);
        // let data = await response.json();
        console.log(res.data.data.results);
        setResults(res.data.data.results);
        setHideShuffle(true);
        // return data;
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
