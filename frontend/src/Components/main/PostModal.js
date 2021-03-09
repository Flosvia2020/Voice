import React, { useState, useEffect } from "react";
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
  RepleSubmitBtn,
} from "../../Style/Modal";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { repleActions } from "../../modules/reple";

const PostModal = ({ setVisible }) => {
  const postData = useSelector((state) => state.postReducer.postData);
  const isLoading = useSelector((state) => state.postReducer.postDetailLoading);
  const userData = useSelector((state) => state.authReducer);
  const [isComment, setIsComment] = useState(false);
  const dispatch = useDispatch();
  const [repleIsLoading, setRepleIsLoading] = useState(false);

  const [audioFile, setAudioFile] = useState("");
  const [audioName, setAudioName] = useState("");

  const [mp3Count, setMp3Count] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsComment(true);
    setRepleIsLoading(true);
    setTimeout(() => {
      setRepleIsLoading(false);
      setMp3Count(mp3Count + 1);
    }, [1500]);

    setAudioFile("");
    setAudioName("");
    // const data = new FormData();
    // data.append("postId", postData.id);
    // data.append("voice", audioFile);
    // data.append("body", "");

    // dispatch(repleActions.createReple(data));
  };

  return (
    <>
      <ModalOveraly>
        <ModalBackground
          onClick={() => {
            setVisible(false);
          }}
        />
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
              <PostTitle>
                {postData.title}
                <WriterData>
                  {postData.name}
                  <span>({postData.userId})</span>
                </WriterData>
              </PostTitle>

              <Container>
                {postData.imgPath !== null && (
                  <ImageContainer src={postData.imgPath}></ImageContainer>
                )}

                <PostContent readOnly>{postData.body}</PostContent>
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
                      <i class="fas fa-upload"></i>
                    </div>
                  </label>
                  <RepleSubmitBtn type="submit" onClick={onSubmit}>
                    작성완료
                  </RepleSubmitBtn>
                </RepleInput>

                <RepleContainer></RepleContainer>
              </Container>
            </>
          )}
        </PostContainer>
      </ModalOveraly>
    </>
  );
};

export default PostModal;
