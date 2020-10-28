import React, { useState, useEffect } from "react";
import { Logo, InputLabel, LinkText, RegularFont } from "../../Style/Label";
import { ColorButton } from "../../Style/Button";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import client from "../../api/client";
import { Cookies } from "react-cookie";
import CircularProgress from "@material-ui/core/CircularProgress";
const Container = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LOGIN_URL = "/api/auth/login";

const Login = ({ state, beforeLogin, loading, loginSuccess, loginFail }) => {
  const userToken = new Cookies();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    beforeLogin();
  }, []);

  const callApi = (user) => {
    loading();

    client
      .post(LOGIN_URL, user)
      .then((res) => {
        const { token, refreshToken } = res.data;
        userToken.set("token", token);
        userToken.set("refreshToken", refreshToken);
        loginSuccess();
      })
      .catch((e) => {
        alert("아이디 혹은 비밀번호를 다시 확인해 주세요");
        loginFail();
      });
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
      {state.isSuccess && <Redirect to="/Main" />}
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
      {!state.isLoading ? (
        <ColorButton width="400px" height="50px" onClick={onHandleSubmit}>
          LOG IN
        </ColorButton>
      ) : (
        <CircularProgress style={{ margin: "2rem 0", color: "#00cdc8" }} />
      )}

      <RegularFont> 아직 회원이 아니신가요?</RegularFont>
      <Link to="/Signup">
        <LinkText>SIGN UP하러가기</LinkText>
      </Link>
    </Container>
  );
};

export default Login;
