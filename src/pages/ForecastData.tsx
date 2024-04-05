import DataUseForecast from "../data/DataUseForecast";

import moment from "moment";

function ForecastData() {
  const forecastData = DataUseForecast();

  return (
    <div>
      {forecastData?.forecast.forecastday.map((f) => (
        <div className="flex flex-col items-center bg-slate-200 mt-14 ml-12 mb-12 w-28 rounded-md drop-shadow-lg shadow-lg">
          <div>
            <p className="text-xl mt-2 text-cyan-700">
              {moment(f.date).format("ddd")}
            </p>
          </div>
          <div className="mb-2">
            <img src={f.day.condition.icon} alt={f.day.condition.text} />
          </div>
          <div className="flex">
            <div>
              <p className="mr-2 text-neutral-700">{f.day.maxtemp_c}°</p>
            </div>
            <div>
              <p className="text-neutral-400">{f.day.mintemp_c}°</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ForecastData;
