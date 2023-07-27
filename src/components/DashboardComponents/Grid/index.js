import React from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { motion } from "framer-motion";

function Grid({ coin, delay }) {
  return (
    <motion.div
      className={coin.price_change_percentage_24h > 0 ? "coin-box" : "box-red"}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 1, delay: 0.25 + delay * 0.1 }}
    >
      <a href={`/coin?${coin.id}`}>
        <div className="logo-div">
          <img src={coin.image} className="logo" />
          <div className="coin-info">
            <p className="symbol">{coin.symbol}-USD</p>
            <p className="name">{coin.name}</p>
          </div>
        </div>
        <div className="data-div">
          {coin.price_change_percentage_24h > 0 ? (
            <div className="chip-flex">
              <div
                className="chip"
                style={{
                  color: "var(--green)",
                  borderColor: "var(--green)",
                }}
              >
                {"+" + coin.price_change_percentage_24h.toFixed(2) + " %"}
              </div>
              <TrendingUpRoundedIcon
                className="trending-icon"
                fontSize="2.5rem"
              />
            </div>
          ) : (
            <div className="chip-flex">
              <div className="chip red">
                {coin.price_change_percentage_24h.toFixed(2) + " %"}
              </div>
              <TrendingDownRoundedIcon
                className="trending-icon red"
                fontSize="2.5rem"
              />
            </div>
          )}
          {coin.price_change_percentage_24h > 0 ? (
            <p className="price">${coin.current_price.toLocaleString()}</p>
          ) : (
            <p className="price price-red">
              ${coin.current_price.toLocaleString()}
            </p>
          )}
          <p className="name">
            <span className="sub-heading">Total Volume : </span>$
            {coin.total_volume.toLocaleString()}
          </p>
          <p className="name">
            <span className="sub-heading">Market Cap : </span> $
            {coin.market_cap.toLocaleString()}
          </p>
        </div>
      </a>
    </motion.div>
  );
}

export default Grid;
