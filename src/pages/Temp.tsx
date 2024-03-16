import DataUseCurrent from "../data/DataUseCurrent";

function Temp() {
  const data = DataUseCurrent();

  return (
    <div>
      <div>
        <p>
          Temp: <span>{data?.current.temp_c}</span>
        </p>
        <img
          src={data?.current.condition.icon}
          alt={data?.current.condition.text}
        />
        <p>{data?.current.condition.text}</p>
      </div>
    </div>
  );
}

export default Temp;
