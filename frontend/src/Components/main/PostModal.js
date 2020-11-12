import React, { useEffect } from "react";
import { ModalOveraly, ModalInner, ImageContainer } from "../../Style/Modal";
import { useSelector } from "react-redux";

const PostModal = ({ visible, setVisible }) => {
  const postData = useSelector((state) => state.postReducer.postData);
  return (
    <>
      <ModalOveraly visible={visible} onClick={() => setVisible(false)}>
        <ModalInner>
          <ImageContainer />
        </ModalInner>
      </ModalOveraly>
    </>
  );
};
export default PostModal;
