import DataUseCurrent from "../data/DataUseCurrent";
import Cloud from "../pages/Cloud";
import HighLow from "../pages/HighLow";
import InputSearch from "../pages/InputSearch";
import Pressure from "../pages/Pressure";
import TotalPrecip from "../pages/TotalPrecip";
import UvIndex from "../pages/UvIndex";
import WindSpees from "../pages/WindSpees";

function Information() {
  const UVData = DataUseCurrent();
  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <InputSearch />
      </div>
      <div className="mt-40 ml-5 mr-7">
        <h1 className="font-black text-xl font-mono ml-3">
          Today's Highlights
        </h1>
        <div className="mt-5 grid grid-cols-3 gap-10">
          <div className="w-60 h-28 rounded-lg shadow-lg bg-white">
            <WindSpees />
          </div>
          <div className="w-60 h-28 rounded-lg shadow-lg bg-white">
            <Cloud />
          </div>
          <div className="w-60 h-28 rounded-lg shadow-lg bg-white">
            <Pressure />
          </div>
          <div className="w-60 h-28 rounded-lg shadow-lg bg-white">
            <HighLow />
          </div>
          <div className="w-60 h-28 rounded-lg shadow-lg bg-white">
            <p className="text-slate-500 ml-3 ">
              UV index:{" "}
              <span className="text-2xl text-cyan-600 font-semibold">
                {UVData?.current.uv}
              </span>
            </p>
            <UvIndex />
          </div>
          <div className="w-60 h-28 rounded-lg shadow-lg bg-white">
            <TotalPrecip />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
