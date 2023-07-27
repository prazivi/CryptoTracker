import React, { useEffect, useState } from "react";
import { getCoinData } from "../../../functions/getCoinData";
import CoinPageList from "../../CoinPageComponents/CoinPageList";
import Loader from "../../Loader";
import "./styles.css";

function ListFlex({ crypto1, crypto2, setCrypto1Desc, setCrypto2Desc }) {
  const [coin1, setCoin1] = useState({});
  const [coin2, setCoin2] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [crypto1, crypto2]);

  const getData = async () => {
    const crypto1_response = await getCoinData(crypto1);
    const crypto2_response = await getCoinData(crypto2);

    setCoin1({
      id: crypto1_response.id,
      name: crypto1_response.name,
      symbol: crypto1_response.symbol,
      image: crypto1_response.image.large,
      price_change_percentage_24h:
        crypto1_response.market_data.price_change_percentage_24h,
      total_volume: crypto1_response.market_data.total_volume.usd,
      current_price: crypto1_response.market_data.current_price.usd,
      market_cap: crypto1_response.market_data.market_cap.usd,
    });
    setCrypto1Desc(crypto1_response.description.en);

    setCoin2({
      id: crypto2_response.id,
      name: crypto2_response.name,
      symbol: crypto2_response.symbol,
      image: crypto2_response.image.large,
      price_change_percentage_24h:
        crypto2_response.market_data.price_change_percentage_24h,
      total_volume: crypto2_response.market_data.total_volume.usd,
      current_price: crypto2_response.market_data.current_price.usd,
      market_cap: crypto2_response.market_data.market_cap.usd,
    });
    setCrypto2Desc(crypto2_response.description.en);

    setLoading(false);
  };

  return loading ? (
    <Loader />
  ) : (
    <div>
      <CoinPageList coin={coin1} />
      <CoinPageList coin={coin2} delay={2} />
    </div>
  );
}

export default ListFlex;
