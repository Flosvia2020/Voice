import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { HeaderContainer, WriteBtn, Posts, Container } from "../Style/Main";
import Post from "./Post";
import WriteModal from "./WriteModal";
import dummy from "./dummy.json";
const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  padding:0;
}
`;
const Main = ({ setCookie }) => {
  const [writeVisible, setWriteVisible] = useState(false);
  const posts = dummy.post;
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
        <Posts>
          {posts.map((element, i) => (
            <Post
              key={i}
              nickName={element.user_nickname}
              id={element.user_id}
              title={element.title}
              contents={element.contents}
              img={element.img}
            ></Post>
          ))}
        </Posts>
        <WriteBtn onClick={onWriteClick}></WriteBtn>
      </Container>
    </div>
  );
};

export default Main;
