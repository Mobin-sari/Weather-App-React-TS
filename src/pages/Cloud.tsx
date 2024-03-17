import DataUseCurrent from "../data/DataUseCurrent";

function Cloud() {
  const data = DataUseCurrent();

  return (
    <div>
      <p>
        Cloud: <span>{data?.current.cloud}</span>
      </p>
    </div>
  );
}

export default Cloud;
