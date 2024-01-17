import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockList, setStockList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [purchasedStocks, setPurchasedStocks] = useState("")
  const [sortBy, setSortBy] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then(resp => resp.json())
      .then(data => (setStockList(
        data.filter(stock => searchQuery ? stock.type === searchQuery : true)
            .sort((stock1, stock2) => {
              if(sortBy === "Alphabetically"){
                return stock1.name.localeCompare(stock2.name)
              } else if(sortBy === "Price"){
                return stock1.price - stock2.price
              }
            }))))
  }, [searchQuery, sortBy])

  function buyStock(stock){
    setPurchasedStocks([...purchasedStocks, stock])
  }
  
  function sellStock(stock){
    const updatedStocks = purchasedStocks.filter(stockObj => stockObj.id !== stock.id)
    setPurchasedStocks(updatedStocks)
  }

  return (
    <div>
      <SearchBar onSearch={setSearchQuery} sortBy={sortBy} setSortBy={setSortBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stockList} clickHandler={buyStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={purchasedStocks} clickHandler={sellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
