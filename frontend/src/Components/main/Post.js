import React from "react";
import { PostContainer, Detail } from "../../Style/Main";
import { TransparentButton } from "../../Style/Button";
const Post = ({ nickName, userId, title, contents, img, isMyPost, postId }) => {
  return (
    <PostContainer withImg={img !== undefined}>
      <p>
        {nickName}({userId})
      </p>
      <p className="title">{title}</p>
      <img />
      <div className="context">{contents}</div>
      <Detail>자세히보기</Detail>
      {isMyPost && (
        <>
          <TransparentButton color="red">삭제</TransparentButton>
          <TransparentButton>수정</TransparentButton>
        </>
      )}
    </PostContainer>
  );
};
export default Post;
