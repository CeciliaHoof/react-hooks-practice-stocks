import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, clickHandler}) {
  let displayPortfolio;
  if (stocks.length > 0) {
    displayPortfolio = stocks.map(stock => <Stock key={stock.id} stock={stock} clickHandler={clickHandler}/>)
  }
  return (
    <div>
      <h2>My Portfolio</h2>
      {displayPortfolio} 
    </div>
  );
}

export default PortfolioContainer;
