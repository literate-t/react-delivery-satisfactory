import styled from "@emotion/styled";

const DivBackDrop = styled.div`
  position: absolute;
  background-color: #999999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const BackDrop = () => {
  return <DivBackDrop />;
};

export default BackDrop;
