import React, { useState } from "react";
import { Logo, InputLabel, LinkText, RegularFont } from "../Style/Label";
import { ColorButton } from "../Style/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import client from "../api/client";

const Container = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LOGIN_URL = "/api/auth/login";

const Login = ({ setCookie }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const callApi = (user) => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    client
      .post(LOGIN_URL, user, config)
      .then((res) => {
        const { token } = res.data;
        setCookie("user", token);
        console.log(token);
      })
      .catch((e) =>
        alert(
          "로그인에 실패하였습니다. 아이디 혹은 비밀번호를 다시 확인해 주세요."
        )
      );
  };
  const onHandleSubmit = () => {
    if (id === "" || password === "") {
      alert("아이디 혹은 비밀번호를 입력해 주세요.");
      return;
    }
    const user = {
      id: id,
      password: password,
    };
    callApi(user);
  };

  return (
    <Container>
      <Logo>VOICE</Logo>
      <InputLabel
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <InputLabel
        type="password"
        placeholder="PASSWORD"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <ColorButton width="400px" height="50px" onClick={onHandleSubmit}>
        LOG IN
      </ColorButton>
      <RegularFont> 아직 회원이 아니신가요?</RegularFont>
      <Link to="/Signup">
        <LinkText>SIGN UP하러가기</LinkText>
      </Link>
    </Container>
  );
};

export default Login;
