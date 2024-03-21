import axios from "axios";
import { useEffect, useState } from "react";
import { fetchDataForecast } from "./data";
import { useInput } from "../context/InputConext";

export type DataWeather = {
  current: object;
  location: object;
  forecast: object;
};

function DataUseForecast() {
  const [dataForecast, setDataForecast] = useState<DataWeather>();

  const { search, handleInputChange } = useInput();

  useEffect(() => {
    const fetchCurrent = async () => {
      try {
        const response = await axios.get<DataWeather>(fetchDataForecast(search));
        setDataForecast(response.data);
      } catch {
        console.log("error in forecast axios");
      }
    };
    fetchCurrent();
  }, [search]);
  console.log(dataForecast);
  return dataForecast;
}

export default DataUseForecast;