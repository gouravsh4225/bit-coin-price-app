import ApiBaseMethod from "../ApiBaseUrl";

const getSelectedCoinPrice = (selectedCoin) => {
  return ApiBaseMethod.get("/currentprice.json");
};

const getSelectedCoinLineChart = (selectedOption) => {
  let todayDate = new Date();
  let startDate = calculateDateAgoFromNow(selectedOption.id === 1 ? 6 : 30);
  let endDate = `${todayDate.getFullYear()}-${
    todayDate.getMonth() + 1
  }-${todayDate.getDate()}`;
  return ApiBaseMethod.get(
    `/historical/close.json?start=${startDate}&end=${endDate}`
  );
};

const calculateDateAgoFromNow = (daysMinus) => {
  let date = new Date();
  let last = new Date(date.getTime() - daysMinus * 24 * 60 * 60 * 1000);
  let day = last.getDate();
  let month = last.getMonth() + 1;
  let year = last.getFullYear();
  return `${year}-${month}-${day}`;
};

const CurrentPriceService = {
  getSelectedCoinPrice,
  getSelectedCoinLineChart,
};

export default CurrentPriceService;
