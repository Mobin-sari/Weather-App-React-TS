import axios from "axios";
import { useEffect, useState } from "react";
import { fetchDataCurrent } from "./data";
import { useInput } from "../context/InputConext";

type Data = {
  current: object;
  location: object;
};

function DataUseCurrent() {
  const [dataCurrent, setDataCurrent] = useState<Data>();
  const { search, handleInputChange } = useInput();

  useEffect(() => {
    const controller = new AbortController();
    const fetchCurrent = async () => {
      try {
        const response = await axios.get<Data>(fetchDataCurrent(search), {
          signal: controller.signal,
        });
        setDataCurrent(response.data);
      } catch {
        console.log("error in current axios");
      }
      return () => {
        controller.abort();
      };
    };
    fetchCurrent();
  }, [search]);

  return dataCurrent;
}

export default DataUseCurrent;
