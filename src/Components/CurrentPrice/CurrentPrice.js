import React, { useState, useEffect, Fragment } from "react";

// import Material UI Components
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import CurrentPriceService from "../../Services/CurrentPriceService/CurrentPriceService";
import LineCharts from "../Charts/LineChart/LineChart";
import "./CurrentPrice.css";
import ChartFilters from "../Charts/ChartFilters/ChartFilters";

function CurrentPrice() {
  const [allBitCoinsDetails, setAllBitCoinsDetails] = useState([]);
  const [selectedCoinData, setSelectCoinData] = useState({});
  const [selectedCoin, setSelectedCoin] = useState({
    value: "EUR",
  });
  const [bitCoinsLists] = useState([
    { value: "EUR" },
    { value: "GBP" },
    { value: "USD" },
  ]);
  const [filterList] = useState([
    {
      name: "Last Week",
      id: 1,
    },
    {
      id: 2,
      name: "Last month",
    },
  ]);
  const [selectFilterOption, setSelectFilterOption] = useState({
    name: "Last Week",
    id: 1,
  });
  useEffect(() => {
    CurrentPriceService.getSelectedCoinPrice(1)
      .then((response) => {
        let {
          data: { bpi },
        } = response;
        setAllBitCoinsDetails(bpi);
        setSelectCoinData(bpi[selectedCoin.value]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onChangeBitCoin = (e) => {
    const {
      target: { value },
    } = e;

    setSelectCoinData(allBitCoinsDetails[value]);
    setSelectedCoin(e.target);
  };

  const onFilterChange = (changedvalue) => {
    console.log(changedvalue, "changedvalue");
  };

  return (
    <Fragment>
      <section className="coin-name">{selectedCoin.value}</section>
      <section className="coin__info">
        <div className="coin-info__list">
          <div className="coin-info-title">Price</div>
          <div className="coin-info-value">
            {selectedCoin?.value === "EUR" && (
              <span className="coin-info-symbol">€</span>
            )}
            {selectedCoin?.value === "GBP" && (
              <span className="coin-info-symbol">£</span>
            )}
            {selectedCoin?.value === "USD" && (
              <span className="coin-info-symbol">$</span>
            )}
            {selectedCoinData?.rate_float?.toFixed(2)}
          </div>
        </div>
        <div className="coin-info__list">
          <div className="coin-info-title">Description</div>
          <div className="coin-info-value">{selectedCoinData?.description}</div>
        </div>
        <section className="coin-dropdown">
          <Select
            label="Select you coin"
            className="coin-select"
            value={selectedCoin.value}
            onChange={(e) => onChangeBitCoin(e)}
          >
            {bitCoinsLists.map((item, ix) => (
              <MenuItem value={item.value} key={ix}>
                {item.value}
              </MenuItem>
            ))}
          </Select>
        </section>
      </section>
      <section className="coin-chart">
        <section className="coin-filter">
          <ChartFilters
            filterList={filterList}
            selectOption={selectFilterOption}
            onChange={onFilterChange}
          />
        </section>
        <LineCharts />
      </section>
    </Fragment>
  );
}
export default CurrentPrice;
