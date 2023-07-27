import React, { useState } from "react";
import "./styles.css";
import Pagination from "@mui/material/Pagination";
function PaginationComponent({ page, handlePageChange }) {
  return (
    <div
      className="pagination-div"
      style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
    >
      <Pagination
        count={10}
        page={page}
        onChange={handlePageChange}
        sx={{
          color: "#fff",
          "& .Mui-selected , .Mui-selected:hover": {
            backgroundColor: "var(--gold) !important",
            color: "#fff !important",
            borderColor: "var(--gold) !important",
          },

          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid #333",
          },
        }}
      />
    </div>
  );
}

export default PaginationComponent;
