import ApiBaseMethod from "../ApiBaseUrl";

const getSelectedCoinPrice = (selectedCoin) => {
  return ApiBaseMethod.get("/currentprice.json");
};

const CurrentPriceService = {
  getSelectedCoinPrice,
};

export default CurrentPriceService;
