import DataUseForecast from "../data/DataUseForecast";
import Progress from "../helper/Progress";

function ChanceOfRain() {
  const data = DataUseForecast();

  const rainNumber0 = data?.forecast.forecastday[0].hour[0].chance_of_rain;
  const rainNumber6 = data?.forecast.forecastday[0].hour[7].chance_of_rain;
  const rainNumber18 = data?.forecast.forecastday[0].hour[15].chance_of_rain;
  const rainNumber23 = data?.forecast.forecastday[0].hour[20].chance_of_rain;

  return (
    <div>
      <p className="text-xl ml-8">Chance of rain</p>
      <div className="flex mb-1 mt-4">
        <span className="ml-8 mr-4">0:00</span>
        <div className="flex flex-row mb-1">
          <Progress data={rainNumber0} />
          <span className="ml-2 text-xs font-bold mt-1">{rainNumber0}%</span>
        </div>
      </div>
      <div className="flex mb-2">
        <span className="ml-8 mr-4">7:00</span>
        <div className="flex flex-row">
          <Progress data={rainNumber6} />
          <span className="ml-2 text-xs font-bold mt-1">{rainNumber6}%</span>
        </div>
      </div>
      <div className="flex mb-2">
        <span className="ml-8 mr-2">15:00</span>
        <div className="flex flex-row">
          <Progress data={rainNumber18} />
          <span className="ml-2 text-xs font-bold mt-1">{rainNumber18}%</span>
        </div>
      </div>
      <div className="flex mb-2">
        <span className="ml-8 mr-2">20:00</span>
        <div className="flex flex-row">
          <Progress data={rainNumber23} />
          <span className="ml-2 text-xs font-bold mt-1">{rainNumber23}%</span>
        </div>
      </div>
    </div>
  );
}

export default ChanceOfRain;
