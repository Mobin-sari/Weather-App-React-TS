import { Percent, ProgressStyled } from "../styles/styled";

function Progress({ data }) {
  return (
    <>
      <ProgressStyled>
        <Percent $data={data}></Percent>
      </ProgressStyled>
    </>
  );
}

export default Progress;
