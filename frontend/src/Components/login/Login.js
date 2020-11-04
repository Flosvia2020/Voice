import React, { useState, useEffect } from "react";
import { Logo, InputLabel, LinkText, RegularFont } from "../../Style/Label";
import { ColorButton } from "../../Style/Button";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { Cookies } from "react-cookie";
import CircularProgress from "@material-ui/core/CircularProgress";
const Container = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LOGIN_URL = "/api/auth/login";

const Login = ({ isLoading, token, refreshToken, loginRequest }) => {
  const userToken = new Cookies();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  console.log(token);

  const onHandleSubmit = () => {
    if (id === "" || password === "") {
      alert("아이디 혹은 비밀번호를 입력해 주세요.");
      return;
    }
    const user = {
      id: id,
      password: password,
    };
    //loginRequest(user);
  };
  return (
    <Container>
      {/* {state.isSuccess && <Redirect to="/Main" />} */}
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
