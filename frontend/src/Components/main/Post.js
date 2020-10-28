import React from "react";
import { PostContainer, Detail } from "../../Style/Main";
const Post = ({ nickName, id, title, contents, img }) => {
  return (
    <PostContainer withImg={img !== ""}>
      <p>
        {nickName}({id})
      </p>
      <p className="title">{title}</p>
      <img />
      <div className="context">{contents}</div>
      <Detail>자세히보기</Detail>
    </PostContainer>
  );
};
export default Post;
