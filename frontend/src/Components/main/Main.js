import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { HeaderContainer, WriteBtn, Posts, Container } from "../../Style/Main";
import Post from "./Post";
import WriteModal from "./WriteModal";
import { postActions } from "../../modules/post";

const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  padding:0;
}
`;

const Main = () => {
  const [writeVisible, setWriteVisible] = useState(false);
  const posts = useSelector((state) => state.postReducer.postList);
  const userData = useSelector((state) => state.authReducer.userData);
  console.log(userData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postActions.loadRequest());
    console.log(posts);
  }, []);

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
          {posts.map((e, i) => (
            <Post
              key={i}
              postId={e._id}
              userId={e.id}
              title={e.title}
              nickName={e.name}
              contents={e.body}
              isMyPost={true}
            />
          ))}
        </Posts>
        <WriteBtn onClick={onWriteClick}></WriteBtn>
      </Container>
    </div>
  );
};

export default Main;
