import DataUseCurrent from "../data/DataUseCurrent";

function LastUpdate() {
    const data = DataUseCurrent()

    return (
        <div>
            <p>Last updated: <span>{data?.current.last_updated}</span></p>
        </div>
    );
}

export default LastUpdate;