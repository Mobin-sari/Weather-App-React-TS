import DataUseCurrent from "../data/DataUseCurrent";
import Menu from "../pages/Menu";
import UvIndex from "../pages/UvIndex";

function Introduction() {
  const dataUV = DataUseCurrent();

  return (
    <div>
      <div>
        <Menu />
      </div>
      <div className="w-52 h-32 ml-7 mt-10 mb-24 rounded-lg shadow-lg bg-slate-100">
        <p className="text-slate-500 ml-3 mt-3">
          UV Index:
          <span className="text-xl font-semibold"> {dataUV?.current.uv}</span>
        </p>
        <UvIndex />
      </div>
    </div>
  );
}

export default Introduction;
