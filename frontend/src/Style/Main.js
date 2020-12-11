import styled from "styled-components";

export const HeaderContainer = styled.div`
  font-family: "TmoneyRoundWindExtraBold";
  width: 100%;
  height: 5rem;
  background-color: #ffffff;
  color: #00cdc8;
  font-size: 40px;
  box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;

  position: relative;

  .logout {
    position: absolute;
    right: 1rem;
    font-size: 1rem;
    padding: 1rem;
    background-color: #00cdc8;
    color: #ffffff;
    border-radius: 1rem;
  }
`;

export const WriteBtn = styled.button`
  position: absolute;
  cursor: pointer;
  border: none;
  width: 100px;
  height: 100px;
  border-radius: 100%;

  font-size: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00cdc8;
  color: #ffffff;
  margin: 50px 50px;
  right: 0;
  bottom: 0;

  &:active,
  &:focus {
    outline: none;
  }

  z-index: 999;
`;

export const Posts = styled.div`
  cursor: default;
  font-family: "TmoneyRoundWindExtraBold";
  width: 30rem;
  height: 100vh;

  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

export const Sumnail = styled.img`
  width: 28rem;
  margin: auto;
  max-height: 50rem;
  object-fit: cover;
`;
export const PostContainer = styled.div`
  width: 30rem;
  max-height: 50rem;
  background-color: white;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  p,
  img {
    margin-left: 1rem;
  }
  .title {
    margin: 0;
    margin-left: 1rem;
    font-size: 35px;
  }
  .content {
    font-family: TmoneyRoundWindRegular;
    margin: 0 1rem;
    max-height: 5rem;
    line-height: 3;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
export const Detail = styled.button`
  font-family: "TmoneyRoundWindRegular";
  background-color: #ffffff;
  border: none;
  width: 30rem;
  padding: 1rem 0;
  position: relative;
  bottom: 0px;
  &:active,
  &:focus {
    outline: none;
  }
`;
export const Container = styled.main`
  margin: auto;
  margin-top: 2rem;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  width: 30rem;
  height: 80vh;
  @media screen and (max-width: 768px) {
    width: 25rem;
  }
  &::-webkit-scrollbar {
    width: 1rem;

    border-radius: 3rem;
    background: #d7d7d7;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #00cdc8;
    border-radius: 6px;
  }
`;
