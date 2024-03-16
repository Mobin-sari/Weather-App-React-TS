import DataUseCurrent from "../data/DataUseCurrent";

function UvIndex() {
  const data = DataUseCurrent();

  return (
    <div>
      <p>UV index: {data?.current.uv}</p>
    </div>
  );
}

export default UvIndex;
