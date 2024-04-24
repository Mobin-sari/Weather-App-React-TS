import { createContext, useContext } from "react";
import DataUseCurrent from "../data/DataUseCurrent";
import DataUseForecast from "../data/DataUseForecast";

export const weatherContextData = createContext({});

function WeatherContext({ children }) {
  const useCurrent = DataUseCurrent();
  const useForecast = DataUseForecast();
  return (
    <weatherContextData.Provider value={{useCurrent, useForecast}}>
      {children}
    </weatherContextData.Provider>
  );
}

const useWeather = () => {
  const data = useContext(weatherContextData);
  return data;
};

export { useWeather };
export default WeatherContext;
