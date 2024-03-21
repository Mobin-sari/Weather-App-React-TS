import { Percent, ProgressStyled } from "../styles/styled";

function Progress({ data }: number) {
  return (
    <>
      <ProgressStyled>
        <Percent $data={data}></Percent>
      </ProgressStyled>
    </>
  );
}

export default Progress;
