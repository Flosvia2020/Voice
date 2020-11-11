import React, { useEffect } from "react";
import { ModalOveraly, ModalWrapper, ModalInner } from "../../Style/WriteModal";
import client from "../../api/client";

const PostModal = ({}) => {
  return (
    <>
      <ModalOveraly>
        <ModalInner></ModalInner>
      </ModalOveraly>
    </>
  );
};
export default PostModal;
