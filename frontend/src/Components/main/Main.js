import React, { useState, useEffect, useRef } from "react";
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
  const [userData, setUserData] = useState(
    useSelector((state) => state.authReducer.userData)
  );
  const [itemCnt, setItemCnt] = useState(5);
  const [preItemCnt, setPreItemCnt] = useState(0);
  //const [postList, setPostList] = useState([]);

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.postReducer.isLoading);
  const history = useHistory();
  const userId = useSelector((state) => state.authReducer.id);
  const postList = useSelector((state) => state.postReducer.postList);

  const scroll = useRef();

  useEffect(() => {
    scroll.current.scrollTop = scroll.current.scrollHeight;
    //setUserData(jwt_decode(localStorage.getItem("accessToken")).id);
    //dispatch(postActions.loadRequest());
    console.log(postList);
  }, []);

  const onWriteClick = () => {
    setWriteVisible(true);
  };

  const scrollEvent = (e) => {
    const { scrollTop, scrollHeight } = scroll.current;
    if (scrollHeight - scrollTop < 600) {
      setItemCnt(itemCnt + 5);
    }
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
      {/* <svg style={{ position: "absolute", width: "100vw", height: "100vh" }}>
        <path
          d="M-100 70 C 200 600, 500 180 600 200 S800 600 1500 0"
          fill=" #00cdc8"
          opacity="0.5"
        />
      </svg> */}
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
          <Posts ref={scroll} onScroll={scrollEvent} className="scroll">
            {postList.slice(preItemCnt, itemCnt).map((e, i) => (
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
