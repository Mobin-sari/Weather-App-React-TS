import DataUseForecast from "../data/DataUseForecast";

import { FaTemperatureHalf } from "react-icons/fa6";

import style from "../styles/sections.module.css";

function AvgTemp() {
  const data = DataUseForecast();

  return (
    <div className="w-full">
      <div className={style.container}>
        <div>
          <FaTemperatureHalf fontSize="1.5rem" color="#5484de" />
        </div>
        <div>
          <p className="text-slate-500">Avrarage temp</p>
          <span className="text-2xl font-semibold">
            {data?.forecast.forecastday[0].day.avgtemp_c} °C
          </span>
        </div>
      </div>
    </div>
  );
}

export default AvgTemp;
