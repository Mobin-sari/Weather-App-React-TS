import DataUseCurrent from "../data/DataUseCurrent";
import DataUseForecast from "../data/DataUseForecast";

function AvrageTemp() {
  const data = DataUseForecast();

  return (
    <div>
      <p>
        Avrage temp: <span>{data?.forecast.forecastday[0].day.avgtemp_c}</span>
      </p>
    </div>
  );
}

export default AvrageTemp;
