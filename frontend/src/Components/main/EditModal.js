import React, { useState, useEffect } from "react";
import {
  ModalOveraly,
  ModalBackground,
  WriteContainer,
  TitleInput,
  ContentInput,
  FileInput,
  SubmitButton,
  TitleLine,
} from "../../Style/Modal";
import { postActions } from "../../modules/post";
import { useDispatch, useSelector } from "react-redux";

const EditModal = ({ setVisible }) => {
  const postData = useSelector((state) => state.postReducer.postData);
  const [image, setImage] = useState();
  const [imgName, setImageName] = useState("");
  const [title, setTitle] = useState(postData.title);
  const [contents, setContents] = useState(postData.body);
  const [curTextCount, setCurTextCount] = useState();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setImage(e.target.files);
    setImageName(e.target.value);
  };

  const onSubmit = (e) => {
    if (title == null || contents == null) {
      alert("내용을 입력해주세요");
    }

    e.preventDefault();

    const data = {
      postId: postData.id,
      title: title,
      body: contents,
      img: image,
    };
    dispatch(postActions.eidtPost(data));
    setVisible(false);
  };
  return (
    <>
      <ModalOveraly>
        <ModalBackground onClick={(e) => setVisible(false)} />
        <WriteContainer>
          <TitleInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TitleLine />
          <ContentInput
            value={contents}
            onChange={(e) => {
              if (e.target.value.length > 300) return;
              setContents(e.target.value);
              setCurTextCount(e.target.value.length);
            }}
          />
          <div>{curTextCount}/300</div>
          <FileInput>
            <div>
              <label htmlFor="file">
                <i class="far fa-image"></i>
              </label>
              <input
                multiple
                type="file"
                id="file"
                onChange={handleChange}
                value={imgName}
                files={image}
                accept="image/*"
              />
              <input className="upload" value={imgName} readOnly />
            </div>
            <SubmitButton type="submit" onClick={onSubmit}>
              수정하기
            </SubmitButton>
          </FileInput>
        </WriteContainer>
      </ModalOveraly>
    </>
  );
};

export default EditModal;
