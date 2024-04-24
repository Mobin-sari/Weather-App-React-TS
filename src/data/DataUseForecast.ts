import axios from "axios";
import { useEffect, useState } from "react";
import { fetchDataForecast } from "./data";
import { useInput } from "../context/InputConext";

function DataUseForecast() {
  const [dataForecast, setDataForecast] = useState();

  const { search, handleInputChange } = useInput();

  useEffect(() => {
    const controller = new AbortController();
    const fetchCurrent = async () => {
      try {
        const response = await axios.get(
          fetchDataForecast(search),
          { signal: controller.signal }
        );
        setDataForecast(response.data);
      } catch {
        console.log("error in forecast axios");
      }
      return () => {
        controller.abort();
      };
    };
    fetchCurrent();
  }, [search]);
  // console.log(dataForecast);
  return dataForecast;
}

export default DataUseForecast;
