import DataUseCurrent from "../data/DataUseCurrent";

function WindSpees() {
    const data = DataUseCurrent()

    return (
        <div>
            <p>Wind Speed: <span>{data?.current.wind_mph}</span></p>
        </div>
    );
}

export default WindSpees;