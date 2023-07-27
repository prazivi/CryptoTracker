import React from "react";
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
function Search({ handleChange }) {
  return (
    <div className="search-wrapper">
      <div className="search-input">
        <SearchRoundedIcon sx={{ color: "var(--grey)" }} />
        <input type="text" placeholder="Search" onChange={handleChange} />
      </div>
    </div>
  );
}

export default Search;
