import ChanceOfRain from "../pages/ChanceOfRain";
import InformationSun from "../pages/InformationSun";
import Location from "../pages/Location";
import Temp from "../pages/Temp";
import { WrapperSidebar } from "../styles/styled";

function Sidebar() {
  return (
    <WrapperSidebar>
      <Location />
      <Temp />
      <ChanceOfRain />
      <InformationSun />
    </WrapperSidebar>
  );
}

export default Sidebar;
