import Information from "./Information";
import Introduction from "./Introduction";
import Sidebar from "./Sidebar";

import { Wrapper, WrapperIntroduction, WrapperSecond } from "../styles/styled";

function Home() {
  return (
    <div className="flex flex-row h-screen">
      <WrapperIntroduction>
        <div>
          <Introduction />
        </div>
      </WrapperIntroduction>
      <Wrapper>
        <div>
          <Information />
        </div>
      </Wrapper>
      <WrapperSecond>
        <div>
          <Sidebar />
        </div>
      </WrapperSecond>
    </div>
  );
}

export default Home;
