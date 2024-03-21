const fetchDataCurrent = (city) => {
  const KEY = "a8690c8a05dd497cb91113136241503&q";
  const BASE_URL_CURRENT = `http://api.weatherapi.com/v1/current.json?key=${KEY}=${city}&aqi=no`;
  return BASE_URL_CURRENT;
};

const fetchDataForecast = (city) => {
  const KEY = "a8690c8a05dd497cb91113136241503&q";
  const BASE_URL_FORECAST = `http://api.weatherapi.com/v1/forecast.json?key=${KEY}=${city}&days=7&aqi=no&alerts=no`;
  return BASE_URL_FORECAST;
};

export { fetchDataCurrent, fetchDataForecast };
