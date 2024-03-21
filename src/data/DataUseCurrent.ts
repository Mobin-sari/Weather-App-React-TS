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
    const fetchCurrent = async () => {
      try {
        const response = await axios.get<Data>(fetchDataCurrent(search));
        setDataCurrent(response.data);
      } catch {
        console.log("error in current axios");
      }
    };
    fetchCurrent();
  }, [search]);
  
  return dataCurrent;
}

export default DataUseCurrent;
