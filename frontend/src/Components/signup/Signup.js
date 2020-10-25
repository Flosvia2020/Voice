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
import { Link, Redirect } from "react-router-dom";
import ReactTooltip from "react-tooltip";
const Container = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const check_spc = /[~!@#$%^&*()_+|<>?:{}]/;
const check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
const SIGNUP_URL = "/api/auth/register";

const Signup = () => {
  const [nickName, setNickName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassWord] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [success, setSuccess] = useState(false);
  const callApi = (user) => {
    const url = SIGNUP_URL;
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    client
      .post(url, user, config)
      .then(() => {
        setSuccess(true);
        console.log("success");
      })
      .catch((e) => {
        alert("이미 사용중인 아이디입니다");
        setSuccess(false);
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
    console.log(user);
    callApi(user);
  };

  const passwordConfirmChange = (e) => {
    setIsValid(e.target.value === password);
  };

  return (
    <div>
      {success ? <Redirect to="/Login" /> : ""}
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
        <ColorButton width="400px" height="50px" onClick={onHandleSubmit}>
          SIGN UP
        </ColorButton>

        <RegularFont>이미 회원이신가요?</RegularFont>
        <Link to="/Login">
          <LinkText>LOG IN하러가기</LinkText>
        </Link>
      </Container>
    </div>
  );
};

export default Signup;
