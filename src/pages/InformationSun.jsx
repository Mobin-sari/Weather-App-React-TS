import DataUseForecast from "../data/DataUseForecast";

import { TbSunset2 } from "react-icons/tb";
import { IoSunnyOutline } from "react-icons/io5";

import { WrapperSun } from "../styles/styled";

function InformationSun() {
  const data = DataUseForecast();

  return (
    <div>
      <p className="ml-8 text-lg">Sunrise & Sunset</p>
      <div>
        <WrapperSun>
          <div className="flex flex-row ml-8">
            <div className="mr-5 mt-3">
              <IoSunnyOutline fontSize="1.8rem" color="#fff" />
            </div>
            <div>
              <p>sunrise</p>
              <span>{data?.forecast.forecastday[0].astro.sunrise}</span>
            </div>
          </div>
        </WrapperSun>
        <WrapperSun>
          <div>
            <div className="flex flex-row ml-8">
              <div className="mr-5 mt-3">
                <TbSunset2 fontSize="1.8rem" color="#fff" />
              </div>
              <div>
                <p>sunset</p>
                <span>{data?.forecast.forecastday[0].astro.sunset}</span>
              </div>
            </div>
          </div>
        </WrapperSun>
      </div>
    </div>
  );
}

export default InformationSun;
