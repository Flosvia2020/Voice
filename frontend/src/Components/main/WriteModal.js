import React, { useState, useMemo } from "react";
import {
  ModalOveraly,
  ModalBackground,
  WriteContainer,
  TitleInput,
  TitleLine,
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
  const curTextCount = useMemo(() => {
    if (typeof contents === "string") return contents.length;
    else return 0;
  }, [contents]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log(e.target.files[0]);
    if (e === undefined) return;
    setImage(e.target.files[0]);
    setImageName(e.target.value);
  };
  const onSubmit = (e) => {
    if (title == null || contents == null) {
      alert("내용을 입력해주세요");
    }
    setContents(contents.replace(/\n/g, "<br/>"));

    e.preventDefault();
    const postData = new FormData();
    postData.append("title", title);
    postData.append("body", contents);
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
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TitleLine />
          <ContentInput
            placeholder="내용"
            value={contents}
            onChange={(e) => {
              if (e.target.value.length > 300) return;
              setContents(e.target.value);
            }}
          />
          <div className="textCounter">{curTextCount}/300</div>
          <FileInput>
            <div>
              <label htmlFor="file">
                <i class="far fa-image"></i>
              </label>

              <input
                multiple
                type="file"
                id="file"
                value={imgName}
                files={image}
                accept="image/*"
                onChange={handleChange}
              />
              <input className="upload" value={imgName} readOnly />
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
