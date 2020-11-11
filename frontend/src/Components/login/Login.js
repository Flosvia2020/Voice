import React, { useState } from "react";
import { Logo, InputLabel, LinkText, RegularFont } from "../../Style/Label";
import { ColorButton } from "../../Style/Button";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../modules/auth";
import client from "../../api/client";

const Container = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const isLoading = useSelector((store) => store.authReducer.isLoading);
  const dispatch = useDispatch();
  const history = useHistory();

  const callApi = (userData) => {
    return client
      .post("/api/auth/login", userData)
      .then((res) => {
        const { token, refreshToken } = res.data;
        localStorage.setItem("accessToken", token);
        localStorage.setItem("refreshToken", refreshToken);
        dispatch(authActions.success({ id: id }));
        history.push({ pathname: "/main" });
      })
      .catch((error) => {
        const { message } = error.response.data;
        alert(message);
        dispatch(authActions.fail());
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
    dispatch(authActions.request());
    callApi(user);
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
      {isLoading ? (
        <CircularProgress style={{ color: "#00cdc8", margin: "1rem 0" }} />
      ) : (
        <ColorButton width="400px" height="50px" onClick={onHandleSubmit}>
          LOG IN
        </ColorButton>
      )}

      <RegularFont> 아직 회원이 아니신가요?</RegularFont>
      <Link to="/Signup">
        <LinkText>SIGN UP하러가기</LinkText>
      </Link>
    </Container>
  );
};

export default Login;
