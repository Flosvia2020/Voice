import React, { useState } from "react";
import {
  ModalOveraly,
  ModalWrapper,
  ModalInner,
  TitleInput,
  ContentInput,
  FileInput,
  SubmitButton,
} from "../Style/WriteModal";
const WriteModal = ({ visible, setVisible }) => {
  const [img, setImage] = useState(null);
  const [imgName, setImageName] = useState("");

  const handleChange = (e) => {
    setImage(e.target.files[0]);
    setImageName(e.target.value);
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

            <SubmitButton />
          </FileInput>
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

export default WriteModal;
