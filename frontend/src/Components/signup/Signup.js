import React, { useState } from "react";
import client from "../../api/client";
import {
  Logo,
  InputLabel,
  LinkText,
  RegularFont,
  PasswordComfirm,
  WarnningText,
} from "../../Style/Label";
import { ColorButton } from "../../Style/Button";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { authActions } from "../../modules/auth";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

const Container = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const check_spc = /[~!@#$%^&*()_+|<>?:{}]/;
const check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

const Signup = () => {
  const [nickName, setNickName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassWord] = useState("");
  const [isValid, setIsValid] = useState(true);

  const history = useHistory();
  const isLoading = useSelector((store) => store.authReducer.isLoading);
  const dispatch = useDispatch();

  const callApi = (user) => {
    dispatch(authActions.request());
    client
      .post("/api/auth/register", user)
      .then((res) => {
        dispatch(authActions.success());
        history.push({ pathname: "/login" });
      })
      .catch((error) => {
        dispatch(authActions.fail());
        const { message } = error.response.data;
        alert(message);
      });
  };

  const onHandleSubmit = () => {
    if (
      !isValid ||
      nickName.length < 0 ||
      id.length < 6 ||
      password.length < 8 ||
      check_kor.test(id) ||
      check_spc.test(id)
    ) {
      alert("양식을 다시한번 확인해 주세요");
      return;
    }
    const user = {
      id: id,
      password: password,
      nickname: nickName,
    };

    callApi(user);
  };

  const passwordConfirmChange = (e) => {
    setIsValid(e.target.value === password);
  };

  return (
    <div>
      <Container>
        <Logo>회원가입</Logo>
        <InputLabel
          placeholder="NICKNAME"
          value={nickName}
          data-tip
          data-for="nickName"
          onChange={(e) => setNickName(e.target.value)}
        />
        {nickName.length < 1 ? (
          <ReactTooltip id="nickName" type="error">
            1글자 이상 입력해 주세요
          </ReactTooltip>
        ) : (
          ""
        )}
        <InputLabel
          data-tip
          data-for="id"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value.replace(" ", ""))}
        />
        {id.length < 6 || check_spc.test(id) || check_kor.test(id) ? (
          <ReactTooltip id="id" type="error">
            6글자 이상 입력해 주세요. 공백, 특수 문자 제외.
          </ReactTooltip>
        ) : (
          ""
        )}
        <InputLabel
          data-tip
          data-for="password"
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => {
            setPassWord(e.target.value.replace(" ", ""));
            setIsValid(e.target.value === PasswordComfirm);
          }}
        />
        {password.length < 8 ? (
          <ReactTooltip id="password" type="error">
            8글자 이상 입력해 주세요. 공백 제외.
          </ReactTooltip>
        ) : (
          ""
        )}
        <PasswordComfirm
          type="password"
          placeholder="CONFIRM PASSWORD"
          isValid={isValid}
          onChange={passwordConfirmChange}
        />
        <WarnningText>
          {isValid ? "" : "비밀번호가 일치하지 않습니다"}
        </WarnningText>
        {isLoading ? (
          <CircularProgress style={{ color: "#00cdc8", margin: "1rem 0" }} />
        ) : (
          <ColorButton width="400px" height="50px" onClick={onHandleSubmit}>
            SIGN UP
          </ColorButton>
        )}

        <RegularFont>이미 회원이신가요?</RegularFont>
        <Link to="/Login">
          <LinkText>LOG IN하러가기</LinkText>
        </Link>
      </Container>
    </div>
  );
};

export default Signup;
