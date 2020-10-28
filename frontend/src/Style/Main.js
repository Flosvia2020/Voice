import styled from "styled-components";

export const HeaderContainer = styled.div`
  @font-face {
    font-family: "TmoneyRoundWindExtraBold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindExtraBold.woff")
      format("woff");
  }
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
`;

export const WriteBtn = styled.button`
  position: absolute;
  cursor: pointer;
  border: none;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  font-family: "TmoneyRoundWindExtraBold";

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

export const PostContainer = styled.div`
  width: 30rem;
  max-height: 33rem;

  background-color: white;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  img {
    width: 100%;
  }
  p {
    margin-left: 1rem;
  }
  .title {
    font-size: 35px;
  }
  .context {
    margin: 0 1rem;
    max-height: 5rem;
    line-height: 3;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
export const Detail = styled.button`
  font-family: "TmoneyRoundWindExtraBold";
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
