
import Information from "./Information";
import Introduction from "./Introduction";
import Sidebar from "./Sidebar";

// interface WeatherData {
//   useCurrent: object;
//   useForecast: object;
// }

function Home() {
//   const data: WeatherData = useWeather();

  return (
    <div>
      <Information />
      <Introduction />
      <Sidebar />
    </div>
  );
}

export default Home;
