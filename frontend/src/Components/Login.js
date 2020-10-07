import React, { useState } from "react";
import { Logo, InputLabel, LinkText, RegularFont } from "../Style/Label";
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

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const callApi = () => {
    const url = "/api/auth/login";
    const config = {
      method: "post",
      body: {
        id: id,
        password: password,
      },
    };
    axios.post(url, config);
  };
  const onHandleSubmit = () => {
    if (id == "" || password == "") {
      alert("아이디 혹은 비밀번호를 입력해 주세요.");
      return;
    }
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
