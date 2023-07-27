import React, { useEffect, useState } from "react";
import { convertNumbers } from "../../../functions/convertNumbers";
import { getDaysArray } from "../../../functions/getDaysArray";
import { getPrices } from "../../../functions/getPrices";
import ColorToggleButton from "../../CoinPageComponents/Toggle";
import LineChart from "../../DashboardComponents/LineChart";
import "./styles.css";
function CompareGraph({ crypto1, crypto2, days, type, setType }) {
  const [prices1, setPrices1] = useState([]);
  const [prices2, setPrices2] = useState([]);

  const today = new Date();
  const priorDate = new Date(new Date().setDate(today.getDate() - days));

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: `Comparison betweeen ${crypto1} and ${crypto2}`,
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
        ticks:
          type == "market_caps"
            ? {
                callback: function (value) {
                  return "$" + convertNumbers(value);
                },
              }
            : type == "total_volumes"
            ? {
                callback: function (value) {
                  return convertNumbers(value);
                },
              }
            : {
                callback: function (value, index, ticks) {
                  return "$" + value.toLocaleString();
                },
              },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
        ticks:
          type == "market_caps"
            ? {
                callback: function (value) {
                  return "$" + convertNumbers(value);
                },
              }
            : type == "total_volumes"
            ? {
                callback: function (value) {
                  return convertNumbers(value);
                },
              }
            : {
                callback: function (value, index, ticks) {
                  return "$" + value.toLocaleString();
                },
              },
      },
    },
  };

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getData();
  }, [crypto1, crypto2, days]);

  const getData = async () => {
    const prices_data1 = await getPrices(crypto1, days, type);
    setPrices1(prices_data1);
    const prices_data2 = await getPrices(crypto2, days, type);
    setPrices2(prices_data2);
    var dates = getDaysArray(priorDate, today);
    setChartData({
      labels: dates,
      datasets: [
        {
          label: crypto1,
          data: prices_data1?.map((data) => data[1]),
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          backgroundColor: "transparent",
          borderColor: "#3a80e9",
          pointRadius: 0,
          yAxisID: "y",
        },
        {
          label: crypto2,
          data: prices_data2?.map((data) => data[1]),
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          backgroundColor: "transparent",
          borderColor: "#61c96f",
          pointRadius: 0,
          yAxisID: "y1",
        },
      ],
    });
  };
  return (
    <div className="coin-page-div">
      <div className="toggle-flex">
        <ColorToggleButton
          type={type}
          setType={setType}
          days={days}
          chartData={chartData}
          setChartData={setChartData}
          id={crypto1}
          id2={crypto2}
        />
      </div>
      <LineChart chartData={chartData} options={options} />
    </div>
  );
}

export default CompareGraph;
