import DataUseForecast from "../data/DataUseForecast";

import { GiHeavyRain } from "react-icons/gi";

import style from "../styles/sections.module.css";

function TotalPrecip() {
  const data = DataUseForecast();

  return (
    <div className="w-full">
      <div className={style.container}>
        <div>
          <GiHeavyRain fontSize="1.5rem" color="#5484de" />
        </div>
        <div>
          <p className="text-slate-500">Total precip</p>
          <span className="text-2xl font-semibold">
            {data?.forecast.forecastday[0].day.totalprecip_mm}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TotalPrecip;
