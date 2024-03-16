import Humidity from "../pages/Humidity";
import LastUpdate from "../pages/LastUpdate";
import UvIndex from "../pages/UvIndex";

function Introduction() {
    return (
        <div>
            <Humidity />
            <UvIndex />
            <LastUpdate />
        </div>
    );
}

export default Introduction;