import DataUseForecast from "../data/DataUseForecast";

function ChanceOfRain() {
  const data = DataUseForecast();

  return (
    <div>
      <p>Chance of rain:</p>
      <div>
        <div>
            <span>{data?.forecast.forecastday[0].hour[0].time}</span>
          <p>{data?.forecast.forecastday[0].hour[0].chance_of_rain}</p>
        </div>
      </div>
      <div>
        <div>
            <span>{data?.forecast.forecastday[0].hour[6].time}</span>
          <p>{data?.forecast.forecastday[0].hour[5].chance_of_rain}</p>
        </div>
      </div>
      <div>
        <div>
            <span>{data?.forecast.forecastday[0].hour[18].time}</span>
          <p>{data?.forecast.forecastday[0].hour[9].chance_of_rain}</p>
        </div>
      </div>
      <div>
        <div>
            <span>{data?.forecast.forecastday[0].hour[23].time}</span>
          <p>{data?.forecast.forecastday[0].hour[12].chance_of_rain}</p>
        </div>
      </div>
    </div>
  );
}

export default ChanceOfRain;
