import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, clickHandler}) {
  const stockDisplay = stocks.map(stock => <Stock key={stock.id} stock={stock} clickHandler={clickHandler}/>)

  return (
    <div>
      <h2>Stocks</h2>
      {stockDisplay}
    </div>
  );
}

export default StockContainer;
