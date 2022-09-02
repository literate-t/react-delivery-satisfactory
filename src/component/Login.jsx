import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signIn } from '../api/signApi';
import BackDrop from './BackDrop';
import Signup from './Signup';
import { checkSinginState } from '../states';
import { useSetRecoilState } from 'recoil';

const DivContainer = styled.div`
  position: relative;
  max-width: 20rem;
  --min-height: 15rem;
  border-radius: 0.5rem;
  background-color: var(--primary);
  padding: 2.5rem;
  padding-bottom: 1.5rem;
  margin: 0 auto;
  transform: translateY(-50%);
  top: 50%;
`;

const FlexContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const Input = styled.input`
  display: block;
  border: none;
  margin-top: 5px;
  width: 100%;
  height: 2rem;
  border-radius: 0.15rem;
`;

const Button = styled.button`
  --width: 5.8rem;
  width: 100%;
  height: 2rem;
  --margin: 0.15rem;
  font-size: 1.2rem;
  background-color: ${(props) => props.color};
  border: none;
  --color: ${(props) => props.color};
  --border-radius: 0.25rem;
`;

const Login = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const setSigninState = useSetRecoilState(checkSinginState);

  const toggleClicked = () => {
    setClicked((clicked) => !clicked);
  };

  const [account, setAccount] = useState({
    id: '',
    password: '',
  });

  const { id, password } = account;

  const onLogin = async () => {
    const result = await signIn(id, password);
    console.log(result);
    if (result?.status === 200) {
      const {
        data: { expiresIn, idToken },
      } = result;

      setSigninState({ expireTime: parseInt(expiresIn), idToken });

      //checkSinginState()
      //setSessionInfo(result, localStorage);
      //localStorage.setItem('test', 'test');

      navigate('/home');
    } else {
      alert('일치하는 계정이 없습니다');
    }
  };

  const onChange = ({ target: { value, name } }) => {
    setAccount({
      ...account,
      [name]: value,
    });
  };

  return (
    <>
      {clicked && <BackDrop />}
      <DivContainer>
        <Input
          type="text"
          onChange={onChange}
          value={id}
          name="id"
          placeholder="ID를 입력하세요"
        />
        <Input
          type="password"
          onChange={onChange}
          value={password}
          name="password"
          placeholder="PW를 입력하세요"
        />
        <FlexContainer>
          <Button onClick={onLogin} color={'#EED7CE'}>
            로그인
          </Button>
          <Button onClick={toggleClicked}>회원가입</Button>
          {clicked && <Signup toggle={toggleClicked} />}
        </FlexContainer>
      </DivContainer>
    </>
  );
};

export default Login;
