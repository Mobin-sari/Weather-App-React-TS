import ChanceOfRain from "../pages/ChanceOfRain";
import InformationSun from "../pages/InformationSun";
import Location from "../pages/Location";
import Temp from "../pages/Temp";

function Sidebar() {
    return (
        <div>
            <Location />
            <Temp />
            <ChanceOfRain />
            <InformationSun />
        </div>
    );
}

export default Sidebar;