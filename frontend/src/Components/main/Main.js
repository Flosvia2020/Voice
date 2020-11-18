import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { HeaderContainer, WriteBtn, Posts, Container } from "../../Style/Main";
import Post from "./Post";
import WriteModal from "./WriteModal";
import PostModal from "./PostModal";
import { postActions } from "../../modules/post";
import jwt_decode from "jwt-decode";
import CircularProgress from "@material-ui/core/CircularProgress";
const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  padding:0;
}
`;

const Main = () => {
  const [writeVisible, setWriteVisible] = useState(false);
  const [postVisible, setPostVisible] = useState(false);
  const postList = useSelector((state) => state.postReducer.postList);
  const [userData, setUserData] = useState(
    useSelector((state) => state.authReducer.userData)
  );
  const [postData, setPostData] = useState();

  const isLoading = useSelector((state) => state.postReducer.isLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postActions.loadRequest());
    console.log(postList);
    if (!userData) {
      setUserData(jwt_decode(localStorage.getItem("accessToken")).id);
    }
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
      <PostModal visible={postVisible} setVisible={setPostVisible} />
      <WriteModal visible={writeVisible} setVisible={setWriteVisible} />
      <Container>
        {isLoading ? (
          <CircularProgress style={{ color: "#00cdc8", margin: "1rem 0" }} />
        ) : (
          <Posts>
            {postList.map((e, i) => (
              <Post
                key={i}
                postId={e.id}
                userId={userData}
                title={e.title}
                nickName={e.name}
                contents={e.body}
                isMyPost={true}
                setPostVisible={setPostVisible}
              />
            ))}
          </Posts>
        )}

        <WriteBtn onClick={onWriteClick}></WriteBtn>
      </Container>
    </div>
  );
};

export default Main;
