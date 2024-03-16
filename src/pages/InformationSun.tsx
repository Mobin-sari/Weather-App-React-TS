import DataUseForecast from "../data/DataUseForecast";

function InformationSun() {
    const data = DataUseForecast()

    return (
        <div>
            <p>Sunrise & Sunset:</p>
            <div>
                <p>sunrise:</p>
                <span>{data?.forecast.forecastday[0].astro.sunrise}</span>
            </div>
            <div>
                <p>sunset:</p>
                <span>{data?.forecast.forecastday[0].astro.sunset}</span>
            </div>
        </div>
    );
}

export default InformationSun;