import DataUseCurrent from "../data/DataUseCurrent";
import { FaCloud } from "react-icons/fa";
import style from "../styles/sections.module.css";
function Cloud() {
  const data = DataUseCurrent();

  return (
    <div className="w-full">
      <div className={style.container}>
        <div>
          <FaCloud fontSize="1.5rem" color="#5484de" />
        </div>
        <div>
          <p className="text-slate-500">Cloud</p>
          <span className="text-2xl font-semibold">{data?.current.cloud}</span>
        </div>
      </div>
    </div>
  );
}

export default Cloud;
