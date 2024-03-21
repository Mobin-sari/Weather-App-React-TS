import DataUseCurrent from "../data/DataUseCurrent";

import { LuWaves } from "react-icons/lu";

import style from "../styles/sections.module.css";

function Pressure() {
  const data = DataUseCurrent();

  return (
    <div className="w-full">
      <div className={style.container}>
        <div>
          <LuWaves fontSize="1.5rem" color="#5484de" />
        </div>
        <div>
          <p className="text-slate-500">Pressure</p>
          <span className="text-2xl font-semibold">
            {data?.current.pressure_mb} Mb
          </span>
        </div>
      </div>
    </div>
  );
}

export default Pressure;
