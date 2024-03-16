import axios from "axios";
import { useEffect, useState } from "react";
import { fetchDataCurrent } from "./data";

type Data = {
  current: object;
  location: object;
};

function DataUseCurrent() {
  const [dataCurrent, setDataCurrent] = useState<Data>();

  useEffect(() => {
    const fetchCurrent = async () => {
      try {
        const response = await axios.get<Data>(fetchDataCurrent("london"));
        setDataCurrent(response.data);
      } catch {
        console.log("error in current axios");
      }
    };
    fetchCurrent();
  }, []);

  return dataCurrent;
}

export default DataUseCurrent;
