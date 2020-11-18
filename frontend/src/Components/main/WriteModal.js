import React, { useState } from "react";
import {
  ModalOveraly,
  ModalBackground,
  WriteContainer,
  TitleInput,
  ContentInput,
  FileInput,
  SubmitButton,
} from "../../Style/Modal";
import { postActions } from "../../modules/post";
import { useDispatch } from "react-redux";

const WriteModal = ({ visible, setVisible }) => {
  const [image, setImage] = useState();
  const [imgName, setImageName] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setImage(e.target.files[0]);
    setImageName(e.target.value);
  };
  const onSubmit = (e) => {
    if (title === null || contents === null) {
      alert("내용을 입력해주세요");
    }

    e.preventDefault();
    const postData = new FormData();
    postData.append("title", title);
    postData.append("contents", contents);
    postData.append("img", image);

    dispatch(postActions.creaetPost(postData));
    setVisible(false);
  };
  return (
    <>
      <ModalOveraly visible={visible}>
        <ModalBackground onClick={(e) => setVisible(false)} />
        <WriteContainer>
          <TitleInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <ContentInput
            value={contents}
            onChange={(e) => setContents(e.target.value)}
          />
          <FileInput>
            <div>
              <label htmlFor="file">
                <i className="fas fa-file-image"></i>
              </label>
              <input
                type="file"
                id="file"
                accept="image/*"
                onChange={handleChange}
                value={imgName}
                files={image}
              />
              <input className="upload" value={imgName} />
            </div>

            <SubmitButton type="submit" onClick={onSubmit}>
              게시하기
            </SubmitButton>
          </FileInput>
        </WriteContainer>
      </ModalOveraly>
    </>
  );
};

export default WriteModal;
