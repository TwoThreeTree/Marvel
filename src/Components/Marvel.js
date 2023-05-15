import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Marvel = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=b176c7a6f6a0df334a8cb2b494e91cdc&hash=bb68e82820713f93a4a688a8a52a3b46`
      );
      setItem(res.data.data.results[0]);
      setShowContent(true);
      console.log(res.data.data.results[0]);
    };

    fetch();
  }, [id]);

  function goback() {
    window.history.back(-1);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showContent && (
        <div className="marvel">
          <img
            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            alt=""
          />
          <div className="marvelInfo">
            <button className="BackBtn" onClick={goback}>
              Back
            </button>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            {item.description === "" && <p>No description available</p>}
            <div className="marvelButtons">
              {/* <button className="btn">Detail</button>
              <button className="btn">Wiki</button>
              <button className="btn">Comic</button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Marvel;
