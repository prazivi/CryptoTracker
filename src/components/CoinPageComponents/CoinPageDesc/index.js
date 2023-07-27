import React from "react";

function CoinPageDesc({ name, desc }) {
  return (
    <div className="coin-page-div description">
      <h2>{name}</h2>
      <p dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  );
}

export default CoinPageDesc;
