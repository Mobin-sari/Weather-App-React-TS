import { createContext, useContext } from "react";
import DataUseCurrent from "../data/DataUseCurrent";

export const weatherContextData = createContext({});

function WeatherContext({ children }: JSX.ElementChildrenAttribute) {
  const useCurrent = DataUseCurrent();
  return (
    <weatherContextData.Provider value={useCurrent}>
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
