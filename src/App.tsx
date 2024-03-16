import Home from "./components/Home";
import InputConext from "./context/InputConext";
import WeatherContext from "./context/WeatherContext";

function App() {
  return (
    <>
      <InputConext>
        <WeatherContext>
          <Home />
        </WeatherContext>
      </InputConext>
    </>
  );
}
export default App;
