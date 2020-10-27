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
import client from "../../api/client";
import { Cookies } from "react-cookie";
const URL = "api/post/upload";
const token = new Cookies().get("token");
const WriteModal = ({ visible, setVisible }) => {
  const [img, setImage] = useState(null);
  const [imgName, setImageName] = useState("");

  const handleChange = (e) => {
    setImage(e.target.files[0]);
    setImageName(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    client
      .post(
        URL,
        {},
        {
          Headers: {
            "access-token": token,
          },
        }
      )
      .get()
      .catch((err) => alert);
    setVisible(false);
  };
  return (
    <>
      <ModalOveraly visible={visible} />
      <ModalWrapper visible={visible}>
        <button className="close" onClick={() => setVisible(false)}>
          x
        </button>
        <ModalInner>
          <TitleInput />
          <ContentInput />
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
                files={img}
              />
              <input className="upload" value={imgName} />
            </div>

            <SubmitButton type="submit" onClick={onSubmit}>
              게시하기
            </SubmitButton>
          </FileInput>
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

export default WriteModal;
