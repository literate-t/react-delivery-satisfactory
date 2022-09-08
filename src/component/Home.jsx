// import { useEffect } from 'react';
// import { checkLoginSession } from '../api/signApi';
// import { useSetRecoilState } from 'recoil';
// import { signinState } from './../states';
import { useLocation } from "react-router-dom";

import styled from "@emotion/styled";
import { useState } from "react";
import buldings from "../asset/buildings";
import Rooms from "./Rooms";

const FlexContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
`;

const SideBar = styled.div`
  flex-basis: 15rem;
  flex-grow: 1;
  //outline: clamp(0.33rem, 0.39rem + -0.29vw, 0.18rem) dashed;
  --outline: 1px solid;
  padding: 1rem;
`;


const ItemList = styled.li`
  padding: 0.5rem;
  list-style: none;
`;

const welcomeMessage = (user) => `${user}님 환영합니다`;

const Home = () => {
  // const setSigninState = useSetRecoilState(signinState);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   (async () => {
  //     const result = checkLoginSession();
  //     if (result) {
  //       setSigninState(true);
  //     } else {
  //       setSigninState(false);

  //       alert('로그인 페이지로 이동합니다');
  //       navigate('/');
  //     }
  //   })();
  // });

  const {
    state: { email },
  } = useLocation();
  //console.log(email.substring(0, email.indexOf("@")));

  const [user] = useState(email.substring(0, email.indexOf("@")));

  const onClickBuilding = e => {

  }

  return (
    <FlexContainer>
      <SideBar>
        {welcomeMessage(user)}
        <ul>
          {buldings.map((item) => (
            <ItemList key={item.id} onClick={onClickBuilding}>{`${item.number}동`}</ItemList>
          ))}
        </ul>
      </SideBar>
      <Rooms />
    </FlexContainer>
  );
};

export default Home;
