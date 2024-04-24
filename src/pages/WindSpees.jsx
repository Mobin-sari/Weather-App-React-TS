import DataUseCurrent from "../data/DataUseCurrent";

import { FaWind } from "react-icons/fa6";

import style from "../styles/sections.module.css";

function WindSpees() {
  const data = DataUseCurrent();

  return (
    <div className="w-full">
      <div className={style.container}>
        <div>
          <FaWind fontSize="1.5rem" color="#5484de" />
        </div>
        <div>
          <p className="text-slate-500">Wind Speed</p>
          <span className="text-2xl font-semibold">
            {data?.current.wind_kph} Kph
          </span>
        </div>
      </div>
    </div>
  );
}

export default WindSpees;
