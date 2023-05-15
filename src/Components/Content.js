import React, { useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";
import { useState } from "react";
import Navbar from "./Navbar";
const Content = () => {
  const [currentUrl, setCurrentUrl] = useState(
    "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=b176c7a6f6a0df334a8cb2b494e91cdc&hash=bb68e82820713f93a4a688a8a52a3b46"
  );
  const [items, setItem] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [hideShufferle, setHideShuffle] = useState(false);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(currentUrl);
      setTotal(res.data.data.total);
      console.log("requested");
      setItem(res.data.data.results);
    };

    fetchData();
  }, [currentUrl]);
  return (
    <>
      <Navbar
        setSearch={setSearch}
        search={search}
        results={results}
        hideShufferle={hideShufferle}
        setHideShuffle={setHideShuffle}
        total={total}
        items={results}
        setItem={setItem}
        setResults={setResults}
        setCurrentUrl={setCurrentUrl}
        currentUrl={currentUrl}
      />

      <div className="content">
        {/* <Cards
          items={items.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase());
          })}
        /> */}
        {results.length > 0 ? (
          <>
            <Cards items={results} />
          </>
        ) : (
          <Cards items={items} />
        )}
      </div>
    </>
  );
};

export default Content;
