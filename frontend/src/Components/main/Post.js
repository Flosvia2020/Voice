import React, { useState } from "react";
import PostModal from "./PostModal";
import EditModal from "./EditModal";
import { PostContainer, Detail, Sumnail } from "../../Style/Main";
import { TransparentButton } from "../../Style/Button";
import { postActions } from "../../modules/post";
import { useDispatch } from "react-redux";

const Post = ({
  nickName,
  userId,
  title,
  contents,
  image,
  isMyPost,
  postId,
}) => {
  const dispatch = useDispatch();
  const [postVisible, setPostVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);

  const showDetail = () => {
    dispatch(postActions.loadPost(postId));
    setPostVisible(true);
  };
  const deletePost = () => {
    dispatch(postActions.deletePost({ postId: postId }));
  };
  const editPost = () => {
    console.log(postId);
    dispatch(postActions.loadPost(postId));
    setEditVisible(true);
  };
  return (
    <PostContainer>
      {postVisible && <PostModal setVisible={setPostVisible} />}
      {editVisible && <EditModal setVisible={setEditVisible} />}
      <p>
        {nickName}
        <span style={{ color: "rgb(200,200,200)" }}>({userId})</span>
      </p>
      <p className="title">{title}</p>
      {image && <Sumnail src={image[0]}></Sumnail>}
      <div className="content">{contents}</div>
      <Detail onClick={showDetail}>자세히보기</Detail>
      {isMyPost && (
        <>
          <TransparentButton color="red" onClick={deletePost}>
            삭제
          </TransparentButton>
          <TransparentButton onClick={editPost}>수정</TransparentButton>
        </>
      )}
    </PostContainer>
  );
};
export default Post;
