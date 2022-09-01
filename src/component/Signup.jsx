/** @jsxImportSource @emotion/react */
import { ReactComponent as DeleteIcon } from "../asset/delete.svg";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useState } from "react";
import { signUp } from "../api/signApi";

const Modal = styled.div`
  background-color: white;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 20rem;
  border-radius: 0.5rem;
  padding: 1rem;
`;

// const FlexContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   --justify-content: center;
//   --align-items: center;
//   min-width: 25rem;
//   --min-height: 10rem;
// `;

const Form = styled.form``;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 2rem;
  border: 1px solid black;
  margin-top: 1.5rem;
  font-size: 1.2rem;
  border-radius: 0.2rem;

  ::placeholder {
    padding: 0.2rem;
    font-size: 0.8rem;
  }

  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  display: block;
  width: 100%;
  max-width: 10rem;
  margin: 0 auto;
  margin-top: 2rem;
  border: 1px solid black;
  border-radius: 0.2rem;

  font-size: 1.5rem;
  background-color: white;
`;

/* eslint-disable no-useless-escape */
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const emailGuide = "올바른 주소를 입력하세요";
const pwGuide = "비번과 일치하지 않습니다";

const Signup = ({ toggle }) => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPw, setIsValidPw] = useState(true);
  const [isFirstInput, setIsFirstInput] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  const onEmailChange = ({ target: { value } }) => {
    if (!isFirstInput) {
      setIsFirstInput(true);
    }
    const result = emailRegex.test(value);
    if (!result) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
    setEmail(value);
  };

  const onPwChange = ({ target: { value } }) => {
    setPw(value);
  };
  const onConfirmPwChange = ({ target: { value } }) => {
    setConfirmPw(value);
    if (pw === value) {
      setIsValidPw(true);
    } else {
      setIsValidPw(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (isValidEmail && isValidPw) {
      const result = await signUp(email, pw);
      console.log(result);
      if (result?.status === 200) {
        alert("회원가입이 정상적으로 완료되었습니다");
      }
      toggle();
    }
  };
  return (
    <Modal>
      <Form onSubmit={onSubmit}>
        <DeleteIcon width="1.5rem" cursor="pointer" onClick={toggle} />
        <Input
          value={email}
          onChange={onEmailChange}
          placeholder="ID를 입력하세요"
          required
          autoFocus
        />
        {isFirstInput && !isValidEmail && (
          <span
            css={css`
              color: red;
              font-size: 0.8rem;
            `}
          >
            {emailGuide}
          </span>
        )}
        <Input
          type="password"
          value={pw}
          onChange={onPwChange}
          placeholder="PW를 입력하세요"
          required
        />
        <Input
          type="password"
          value={confirmPw}
          onChange={onConfirmPwChange}
          placeholder="입력한 PW를 확인"
          required
        />
        {isFirstInput && !isValidPw && (
          <span
            css={css`
              color: red;
              font-size: 0.8rem;
            `}
          >
            {pwGuide}
          </span>
        )}
        <Button>가입 완료</Button>
      </Form>
    </Modal>
  );
};

export default Signup;
