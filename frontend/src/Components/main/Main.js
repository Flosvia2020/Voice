import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { HeaderContainer, WriteBtn, Posts, Container } from "../../Style/Main";
import Post from "./Post";
import WriteModal from "./WriteModal";
import client from "../../api/client";
import { Cookies } from "react-cookie";
import jwt_decode from "jwt-decode";
const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  padding:0;
}
`;

const Main = () => {
  const [writeVisible, setWriteVisible] = useState(false);
  const posts = [];

  const LIST_URL = "api/post/list";
  const CHECK_URL = "api/auth/check";
  const LOGOUT_URL = "api/auth/logout";

  const cookie = new Cookies();
  const EXP = jwt_decode(cookie.get("token")).exp;

  if (EXP * 1000 < Date.now()) {
    cookie.remove("token");
    client
      .get(CHECK_URL, {
        Headers: {
          "access-token": cookie.get("token"),
          "refresh-token": cookie.get("refreshToken"),
        },
      })
      .then((res) => cookie.set("token", res.info));
  }

  const callApi = async () => {
    client
      .get(LIST_URL)
      .then((res) => posts.push(res.data))
      .then(
        posts.map((element, i) => (
          <Post
            key={i}
            nickName={element.user_nickname}
            id={element.user_id}
            title={element.title}
            contents={element.contents}
            img={element.img}
          ></Post>
        ))
      );
  };

  const onWriteClick = () => {
    setWriteVisible(true);
  };

  return (
    <div>
      <GlobalStyle />
      <HeaderContainer>
        <div className="title">VOICE</div>
      </HeaderContainer>
      <WriteModal visible={writeVisible} setVisible={setWriteVisible} />
      <Container>
        <Posts></Posts>
        <WriteBtn onClick={onWriteClick}></WriteBtn>
      </Container>
    </div>
  );
};

export default Main;
