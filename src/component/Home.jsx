import { useEffect } from 'react';
import { checkLoginSession } from '../api/signApi';
import { useSetRecoilState } from 'recoil';
import { signinState } from './../states';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const setSigninState = useSetRecoilState(signinState);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const result = checkLoginSession();
      if (result) {
        setSigninState(true);
      } else {
        setSigninState(false);

        alert('로그인 페이지로 이동합니다');
        navigate('/');
      }
    })();
  });
  return <div>Home</div>;
};

export default Home;
