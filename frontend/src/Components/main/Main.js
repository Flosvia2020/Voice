import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { HeaderContainer, WriteBtn, Posts, Container } from "../../Style/Main";
import Post from "./Post";
import WriteModal from "./WriteModal";
import EditModal from "./EditModal";
import { useHistory } from "react-router-dom";
import { postActions } from "../../modules/post";
import jwt_decode from "jwt-decode";
import CircularProgress from "@material-ui/core/CircularProgress";
import client from "../../api/client";
const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  padding:0;
}
`;

const Main = () => {
  const [writeVisible, setWriteVisible] = useState(false);

  const postList = useSelector((state) => state.postReducer.postList);
  const [userData, setUserData] = useState(
    useSelector((state) => state.authReducer.userData)
  );
  const [postData, setPostData] = useState();

  const isLoading = useSelector((state) => state.postReducer.isLoading);
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector((state) => state.authReducer.id);

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

  const logout = () => {
    client
      .post("/api/auth/logout", userId)
      .then((res) => {
        localStorage.removeItem("accessToken");
        history.push({ pathname: "/login" });
      })
      .catch(console.log);
  };
  return (
    <div>
      <GlobalStyle />
      <HeaderContainer>
        <div className="title">VOICE</div>
        <div className="logout" onClick={logout}>
          Logout
        </div>
      </HeaderContainer>

      {writeVisible && (
        <WriteModal visible={writeVisible} setVisible={setWriteVisible} />
      )}
      <WriteBtn onClick={onWriteClick}>
        <i class="fas fa-feather"></i>
      </WriteBtn>

      <Container>
        {isLoading ? (
          <CircularProgress style={{ color: "#00cdc8", margin: "1rem 0" }} />
        ) : (
          <Posts>
            {postList.map((e, i) => (
              <Post
                key={i}
                postId={e.id}
                userId={e.userId}
                title={e.title}
                nickName={e.name}
                contents={e.body}
                image={e.imgPath}
                isMyPost={userData === e.userId}
              />
            ))}
          </Posts>
        )}
      </Container>
    </div>
  );
};

export default Main;
