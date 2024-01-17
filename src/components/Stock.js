import React from "react";

function Stock({ stock, clickHandler }) {
  function handleStocks(){
    clickHandler(stock)
  }

  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={handleStocks}>
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
