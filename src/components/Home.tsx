import Information from "./Information";
import Introduction from "./Introduction";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div className="flex flex-row h-screen">
      <div className="basis-1/6">
        <Introduction />
      </div>
      <div className="basis-1/2 bg-indigo-50">
        <Information />
      </div>
      <div className="basis-1/3">
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
