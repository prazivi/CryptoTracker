import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Loader from "../components/Loader";
import DashboardWrapper from "../components/DashboardComponents/DashboardWrapper";
import Search from "../components/DashboardComponents/Search";
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";
import PaginationComponent from "../components/DashboardComponents/PaginationComponent";

function Dashboard() {
  const API_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filteredCoins, setFilteredCoins] = useState([]);

  useEffect(() => {
    if (search) {
      setFilteredCoins(
        data?.filter(
          (coin) =>
            coin.name.toLowerCase().includes(search.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredCoins(data.slice((page - 1) * 10, (page - 1) * 10 + 10));
    }
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePageChange = (e, value) => {
    setPage(value);
    console.log("valueee", value);
    setFilteredCoins(data.slice((value - 1) * 10, (value - 1) * 10 + 10));
    console.log("filteredCoins", filteredCoins);
    topFunction();
  };

  useEffect(() => {
    axios.get(API_URL, { crossDomain: true }).then((response) => {
      if (response.data) {
        console.log(response.data);
        setData(response.data);
        setFilteredCoins(
          response.data.slice((page - 1) * 10, (page - 1) * 10 + 10)
        );
        setLoading(false);
      } else {
        console.log("error");
      }
    });
  }, []);

  let mybutton = document.getElementById("top-button");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Search handleChange={handleChange} />
          <DashboardWrapper data={filteredCoins} />
          {!search && (
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
          <NorthRoundedIcon
            className="top-button"
            id="top-button"
            onClick={() => {
              topFunction();
            }}
          />
        </>
      )}
    </>
  );
}

export default Dashboard;
