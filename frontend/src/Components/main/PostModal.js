import React, { useEffect } from "react";
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
} from "../../Style/Modal";
import { useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

const PostModal = ({ visible, setVisible }) => {
  const postData = useSelector((state) => state.postReducer.postData);
  const isLoading = useSelector((state) => state.postReducer.isLoading);
  console.log(postData);
  return (
    <>
      <ModalOveraly visible={visible}>
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
              <WriterData>{postData.name}</WriterData>
              <Container>
                <ImageContainer src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg" />
                <PostTitle>{postData.title}</PostTitle>
                <PostContent>
                  contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent
                </PostContent>
                <RepleInput className="file">
                  <input type="file" id="file" accept="audio/*" />
                  <input className="upload" value="a" />
                  <label htmlFor="file">
                    <i class="fas fa-file-audio"></i>
                  </label>
                </RepleInput>
              </Container>
            </>
          )}
        </PostContainer>
      </ModalOveraly>
    </>
  );
};
export default PostModal;
