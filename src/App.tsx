import Home from "./components/Home";
import WeatherContext from "./context/WeatherContext";

function App() {
  return (
    <>
      <WeatherContext>
        <Home />
      </WeatherContext>
    </>
  );
}
export default App;
