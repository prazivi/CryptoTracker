import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function SelectDays({ days, handleChange }) {
  return (
    <Select
      value={days}
      onChange={handleChange}
      className="select-days"
      sx={{
        height: "2.5rem",
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--white)",
        },
        "& .MuiSvgIcon-root": {
          color: "var(--white)",
        },
        "&:hover": {
          "&& fieldset": {
            borderColor: "#3a80e9",
          },
        },
      }}
    >
      <MenuItem value={7}>7 Days</MenuItem>
      <MenuItem value={30}>30 Days</MenuItem>
      <MenuItem value={60}>60 Days</MenuItem>
      <MenuItem value={90}>90 Days</MenuItem>
    </Select>
  );
}

export default SelectDays;
