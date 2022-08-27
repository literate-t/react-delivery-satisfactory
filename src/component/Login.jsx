import styled from "@emotion/styled";

const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FlexContainer = styled.div`
  display: flex;
  margin-top: 0.25rem;
`;

const Input = styled.input`
  border: none;
  margin-top: 5px;
  width: 12rem;
  height: 2rem;
  border-radius: 0.15rem;
`;

const Button = styled.button`
  width: 6rem;
  height: 2rem;
  margin: 0.15rem;
  font-size: 1.2rem;
  background-color: white;
  border: none;
  border-radius: 0.25rem;
`;

const Login = () => {
  return (
    <FlexColumnContainer>
      <Input type="text" placeholder="ID를 입력하세요" />
      <Input type="text" placeholder="PW를 입력하세요" />
      <FlexContainer>
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </FlexContainer>
    </FlexColumnContainer>
  );
};

export default Login;
