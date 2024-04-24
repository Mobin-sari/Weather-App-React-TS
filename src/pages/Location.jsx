import DataUseCurrent from "../data/DataUseCurrent";
import useDate from "../helper/useDate";

function Location() {
  const data = DataUseCurrent();
  const date = useDate();

  return (
    <div className="grid grid-rows-1 grid-flow-col gap-4">
      <div className="flex flex-col mt-2 ml-8">
        <div>
          <span>{data?.location.tz_id}</span>
        </div>
        <div>
          <span className="text-slate-400">{data?.location.country}</span>
        </div>
      </div>
      <div className="mt-5">{date.time}</div>
    </div>
  );
}
export default Location;