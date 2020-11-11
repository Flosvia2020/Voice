import React, { useState } from "react";
import {
  ModalOveraly,
  ModalWrapper,
  ModalInner,
  TitleInput,
  ContentInput,
  FileInput,
  SubmitButton,
} from "../../Style/WriteModal";
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
    for (var pair of postData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
  };
  return (
    <>
      <ModalOveraly visible={visible} onClick={() => setVisible(false)}>
        <ModalInner>
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
        </ModalInner>
      </ModalOveraly>
    </>
  );
};

export default WriteModal;
