import React, { useEffect, useState } from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import Tooltip from "@mui/material/Tooltip";
import { motion } from "framer-motion";
import "./styles.css";
import { convertNumbers } from "../../../functions/convertNumbers";

function List({ coin, delay }) {
  const [volume, setVolume] = useState(coin.total_volume);

  useEffect(() => {
    if (
      volume &&
      (!volume.toString().includes("B") ||
        !volume.toString().includes("M") ||
        !volume.toString().includes("K"))
    ) {
      setVolume(convertNumbers(volume));
      console.log("convertedd Volume>>>>", convertNumbers(volume));
    }
  }, []);

  return (
    <a href={`/coin?${coin.id}`}>
      <motion.tr
        className="list-wrapper"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          duration: 0.5,
          delay: 0.25 + delay * 0.1,
        }}
      >
        <Tooltip title="Logo">
          <td className="image-td">
            <img src={coin.image} className="list-logo" />
          </td>
        </Tooltip>
        <td className="coin-info ">
          <Tooltip title="Symbol">
            <p className="symbol td-text">{coin.symbol}-USD</p>
          </Tooltip>
          <Tooltip title="Name">
            <p className="name td-text" style={{ marginBottom: 0 }}>
              {coin.name}
            </p>
          </Tooltip>
        </td>
        {coin.price_change_percentage_24h > 0 ? (
          <Tooltip title="Price Change">
            <td className="chip-flex td-chip-flex ">
              <div
                className="chip td-text td-chips"
                style={{
                  color: "var(--green)",
                  borderColor: "var(--green)",
                }}
              >
                {"+" + coin.price_change_percentage_24h.toFixed(2) + " %"}
              </div>
              <TrendingUpRoundedIcon
                className="trending-icon td-icon"
                fontSize="2.5rem"
              />
            </td>
          </Tooltip>
        ) : (
          <td className="chip-flex td-chip-flex">
            <div className="chip red td-text td-chips">
              {coin.price_change_percentage_24h.toFixed(2) + " %"}
            </div>
            <TrendingDownRoundedIcon
              className="trending-icon red td-icon"
              fontSize="2.5rem"
            />
          </td>
        )}
        {coin.price_change_percentage_24h > 0 ? (
          <Tooltip title="Current Price">
            <td className="price td-text" style={{ textAlign: "left" }}>
              ${coin.current_price.toLocaleString()}
            </td>
          </Tooltip>
        ) : (
          <Tooltip title="Current Price">
            <td
              className="price price-red td-text"
              style={{ textAlign: "left" }}
            >
              ${coin.current_price.toLocaleString()}
            </td>
          </Tooltip>
        )}
        <Tooltip title="Total Volume">
          <td className="name2 td-text td-volume">
            ${coin.total_volume.toLocaleString()}
          </td>
        </Tooltip>
        <Tooltip title="Total Volume">
          <td className="name2 td-text td-volume-mobile">${volume}</td>
        </Tooltip>
        <Tooltip title="Market Cap">
          <td className="name2 td-text td-cap">
            ${coin.market_cap.toLocaleString()}
          </td>
        </Tooltip>
      </motion.tr>
    </a>
  );
}

export default List;
