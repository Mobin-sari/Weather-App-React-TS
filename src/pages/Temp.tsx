import DataUseCurrent from "../data/DataUseCurrent";

import style from "../styles/highlow.module.css"

function Temp() {
  const data = DataUseCurrent();

  return (
    <div className="mt-8 ml-8">
      <div>
        <img
          src={data?.current.condition.icon}
          alt={data?.current.condition.text}
        />
      </div>
      <div className="flex flex-row mt-2">
        <div>
          <span className="text-4xl">{data?.current.temp_c} °C</span>
        </div>
        <div className="w-8 ml-8">
          <p>{data?.current.condition.text}</p>
        </div>
      </div>
      <div className={style.border}></div>
    </div>
  );
}

export default Temp;
