import DataUseCurrent from "../data/DataUseCurrent";

function Humidity() {
  const data = DataUseCurrent();
  return (
    <div>
      <p>
        Humidity: <span>{data?.current.humidity}</span>
      </p>
    </div>
  );
}

export default Humidity;
