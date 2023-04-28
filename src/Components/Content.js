import React, { useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import { useState } from "react";
import Navbar from "./Navbar";
const Content = () => {
  const [currentUrl, setCurrentUrl] = useState(
    "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=b176c7a6f6a0df334a8cb2b494e91cdc&hash=bb68e82820713f93a4a688a8a52a3b46"
  );
  const [items, setItem] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(currentUrl);

      setItem(res.data.data.results);
    };

    fetchData();
  }, [currentUrl]);
  return (
    <>
      <Navbar search={search} setSearch={setSearch} />

      <div className="content">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Content;
