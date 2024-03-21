import Information from "./Information";
import Introduction from "./Introduction";
import Sidebar from "./Sidebar";

import { Wrapper, WrapperSecond } from "../styles/styled";

function Home() {
  return (
    <div className="flex flex-row h-screen">
      <WrapperSecond>
        <div className="">
          <Introduction />
        </div>
      </WrapperSecond>
      <Wrapper>
        <div className="">
          <Information />
        </div>
      </Wrapper>
      <WrapperSecond>
        <div className="">
          <Sidebar />
        </div>
      </WrapperSecond>
    </div>
  );
}

export default Home;
