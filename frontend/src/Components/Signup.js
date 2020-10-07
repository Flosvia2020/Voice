import React, { useState } from "react";
import {
  Logo,
  InputLabel,
  LinkText,
  RegularFont,
  PasswordComfirm,
  WarnningText,
} from "../Style/Label";
import { ColorButton } from "../Style/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  margin: 70px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Signup = () => {
  const [nickName, setNickName] = useState("");
  const [id, setId] = useState("");
  const [passWord, setPassWord] = useState("");
  const [isValid, setIsValid] = useState(true);

  const onHandleSubmit = () => {
    if (!isValid || nickName == "" || id.length <= 8) {
      alert("오류!");
      return;
    }
  };
  const passwordConfirmChange = (e) => {
    e.target.value != passWord ? setIsValid(false) : setIsValid(true);
  };

  return (
    <Container>
      <Logo>VOICE</Logo>
      <InputLabel
        placeholder="NICKNAME"
        value={nickName}
        onChange={(e) => setNickName(e.target.value)}
      />
      <InputLabel
        placeholder="ID"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <InputLabel
        placeholder="PASSWORD"
        value={passWord}
        onChange={(e) => setPassWord(e.target.value)}
      />
      <PasswordComfirm
        placeholder="CONFIRM PASSWORD"
        isValid={isValid}
        onChange={passwordConfirmChange}
      />
      <WarnningText>
        {isValid ? "" : "비밀번호가 일치하지 않습니다"}
      </WarnningText>
      <ColorButton width="400px" height="50px" onClick={onHandleSubmit}>
        SIGN UP
      </ColorButton>
      <RegularFont>이미 회원이신가요?</RegularFont>
      <Link to="/Login">
        <LinkText>LOG IN하러가기</LinkText>
      </Link>
    </Container>
  );
};

export default Signup;
