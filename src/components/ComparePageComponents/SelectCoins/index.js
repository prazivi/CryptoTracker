import axios from "axios";
import React, { useEffect, useState } from "react";
import SelectComponent from "../Select";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./styles.css";
import SelectDays from "../../CoinPageComponents/SelectDays";
import { COIN_GECKO_URL } from "../../../constants";

function SelectCoins({
  crypto1,
  crypto2,
  setCrypto1,
  setCrypto2,
  days,
  setDays,
}) {
  const API_URL =
    COIN_GECKO_URL +
    "markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const [data, setData] = useState([]);

  const handleChange1 = (e) => {
    setCrypto1(e.target.value);
  };

  const handleChange2 = (e) => {
    setCrypto2(e.target.value);
  };

  const handleChange3 = (e) => {
    setDays(e.target.value);
  };

  useEffect(() => {
    axios.get(API_URL, { crossDomain: true }).then((response) => {
      if (response.data) {
        console.log(response.data);
        setData(response.data);
      } else {
        console.log("error");
      }
    });
  }, []);

  return (
    <div className="select-flex">
      <div className="text-select">
        <p>Crypto 1</p>
        <SelectComponent 
          value={crypto1}
          handleChange={handleChange1}
          data={data}
          filter={crypto2}
        />
      </div>
      <div className="text-select">
        <p>Crypto 2</p>
        <SelectComponent
          value={crypto2}
          handleChange={handleChange2}
          data={data}
          filter={crypto1}
        />
      </div>
      <div className="text-select inverse">
        <SelectDays days={days} handleChange={handleChange3} />
      </div>
    </div>
  );
}

export default SelectCoins;
