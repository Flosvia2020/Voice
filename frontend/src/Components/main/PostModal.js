import React, { useState } from "react";
import {
  ModalOveraly,
  ModalBackground,
  ImageContainer,
  PostContainer,
  WriterData,
  PostTitle,
  PostContent,
  Container,
  RepleInput,
  RepleContainer,
  AudioPlayer,
  RepleLine,
} from "../../Style/Modal";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { postActions } from "../../modules/post";

const PostModal = ({ setVisible }) => {
  const postData = useSelector((state) => state.postReducer.postData);
  const isLoading = useSelector((state) => state.postReducer.isLoading);
  const dispatch = useDispatch();

  const [audioFile, setAudioFile] = useState("");
  const [audioName, setAudioName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("postId", postData.id);
    data.append("voice", audioFile);

    dispatch(postActions.createReple(data));
  };

  return (
    <>
      <ModalOveraly>
        <ModalBackground onClick={() => setVisible(false)} />
        <PostContainer>
          {isLoading ? (
            <CircularProgress
              style={{
                color: "#00cdc8",
                margin: "auto",
                width: "5rem",
                height: "5rem",
              }}
            />
          ) : (
            <>
              <WriterData>
                {postData.name}
                <span style={{ color: "rgb(200,200,200)" }}>
                  ({postData.userId})
                </span>
              </WriterData>
              <Container>
                {postData.imgPath !== null && (
                  <ImageContainer src={postData.imgPath}></ImageContainer>
                )}
                <PostTitle>{postData.title}</PostTitle>
                <PostContent>{postData.body}</PostContent>
                <RepleInput className="file">
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => {
                      setAudioFile(e.target.files[0]);
                      setAudioName(e.target.value);
                    }}
                    value={audioName}
                    files={audioFile}
                    accept=".mp3"
                  />
                  <input className="upload" value={audioName} readOnly />
                  <label htmlFor="file">
                    <div className="button">
                      <i class="fas fa-file-audio"></i>
                    </div>
                  </label>
                  <button className="button" type="submit" onClick={onSubmit}>
                    <i class="fas fa-upload"></i>
                  </button>
                </RepleInput>
                <RepleContainer>
                  <Reple
                    userData={[
                      { name: "sample", id: "id123" },
                      { name: "sample2", id: "sample_123" },
                      { name: "test1234", id: "test1234" },
                    ]}
                  />
                </RepleContainer>
              </Container>
            </>
          )}
        </PostContainer>
      </ModalOveraly>
    </>
  );
};

const Reple = ({ userData }) => {
  return (
    <>
      {userData.map((e, i) => (
        <RepleLine>
          <p>
            {e.name}({e.id})
          </p>
          <AudioPlayer
            controls
            src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
          />
        </RepleLine>
      ))}
    </>
  );
};
export default PostModal;
