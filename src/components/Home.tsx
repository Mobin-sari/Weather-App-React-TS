
import { useWeather } from "../context/WeatherContext";
import Information from "./Information";
import Introduction from "./Introduction";
import Sidebar from "./Sidebar";

function Home() {
    const data = useWeather();
    console.log(data);
    return (
        <div>
            <Information />
            <Introduction />
            <Sidebar />
        </div>
    );
}

export default Home;