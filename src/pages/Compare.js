import React, { useState } from "react";
import CoinPageDesc from "../components/CoinPageComponents/CoinPageDesc";
import CompareGraph from "../components/ComparePageComponents/CompareGraph";
import ListFlex from "../components/ComparePageComponents/ListFlex";
import SelectCoins from "../components/ComparePageComponents/SelectCoins";
import Header from "../components/Header";

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [days, setDays] = useState(30);
  const [crypto1Desc, setCrypto1Desc] = useState("");
  const [crypto2Desc, setCrypto2Desc] = useState("");
  const [type, setType] = useState("prices");
  return (
    <>
      <Header />
      <SelectCoins
        crypto1={crypto1}
        crypto2={crypto2}
        setCrypto1={setCrypto1}
        setCrypto2={setCrypto2}
        days={days}
        setDays={setDays}
      />
      <ListFlex
        crypto1={crypto1}
        crypto2={crypto2}
        setCrypto1Desc={setCrypto1Desc}
        setCrypto2Desc={setCrypto2Desc}
      />
      <CompareGraph
        crypto1={crypto1}
        crypto2={crypto2}
        days={days}
        type={type}
        setType={setType}
      />
      <CoinPageDesc name={crypto1} desc={crypto1Desc} />
      <CoinPageDesc name={crypto2} desc={crypto2Desc} />
    </>
  );
}

export default ComparePage;
