// custom fetch

import MD5 from "crypto-js/md5";

const API_URL = process.env.REACT_APP_BASE_URL;

const getHash = (ts, apikey, privatekey) => {
  return MD5(ts + privatekey + apikey).toString();
};

const fetchHeroes = async (value) => {
  let heroUrl = `${API_URL}//v1/public/characters`;

  let ts = new Date().toString();
  let apikey = process.env.REACT_APP_PUBLIC_KEY;
  let privatekey = process.env.REACT_APP_PRIVATE_KEY;

  let hash = getHash(ts, apikey, privatekey);

  let url = `${heroUrl}?ts=${ts}&apikey=${apikey}&hash=${hash}&nameStartsWith=${value}`;

  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchHeroes };
