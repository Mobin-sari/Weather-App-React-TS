import DataUseCurrent from "../data/DataUseCurrent";

function Location() {
  const data = DataUseCurrent();

  return (
    <div>
      <div>
        <p>
          location: <span>{data?.location.country}</span>
        </p>
      </div>
      <div>
        <p>
          location: <span>{data?.location.tz_id}</span>
        </p>
      </div>
    </div>
  );
}

export default Location;
