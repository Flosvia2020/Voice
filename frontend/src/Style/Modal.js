import { emphasize } from "@material-ui/core";
import styled from "styled-components";

export const ModalOveraly = styled.div`
  box-sizing: border-box;
  display: ${({ visible }) => (visible ? "block" : "none")};
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const ModalBackground = styled.div`
  box-sizing: border-box;
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const WriteContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 60rem;
  height: 35rem;
  top: 60px;
  margin: 0 22%;
  padding: 4rem 3rem;
  z-index: 999;

  @media screen and (max-width: 1000px) {
    margin: 0;
    width: 30rem;
  }
`;

export const TitleInput = styled.input`
  font-family: "TmoneyRoundWindExtraBold";
  font-size: 2.2rem;
  width: 95%;
  height: 4rem;
  padding: 0 1rem;
  border: none;
  box-shadow: inset 1px 1px 3px 1px rgba(0, 0, 0, 0.1);
  background-color: #f2f2f2;
  outline: none;
`;

export const ContentInput = styled.textarea`
  font-family: "TmoneyRoundWindExtraBold";
  resize: none;
  font-size: 1rem;
  width: 95%;
  height: 18rem;
  margin-top: 1rem;
  padding: 1rem 1rem;
  border: none;
  box-shadow: inset 1px 1px 3px 1px rgba(0, 0, 0, 0.1);
  background-color: #f2f2f2;
  outline: none;
  vertical-align: top;
  text-align: left;

  overflow-wrap: wrap;
`;
export const FileInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
  width: 95%;
  div {
    display: flex;
    align-items: center;
    width: 100%;
  }
  label {
    font-size: 3rem;
    color: #00cdc8;
  }
  input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  .upload {
    width: 50%;
    margin-left: 1rem;
    height: 2rem;
    box-shadow: inset 1px 1px 3px 1px rgba(0, 0, 0, 0.1);
    border: none;
    padding-left: 1rem;
  }
`;
export const SubmitButton = styled.button`
  font-family: "TmoneyRoundWindExtraBold";
  font-size: 1.5rem;
  color: white;
  width: 15rem;
  height: 3rem;
  background-color: #00cdc8;
  outline: none;
  border: none;
`;

export const ImageContainer = styled.img`
  width: 100%;
`;

export const PostContainer = styled.div`
  max-height: 700px;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 40rem;
  top: 60px;
  margin: 0 30%;
  padding: 4rem 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 999;

  text-align: left;
  @media screen and (max-width: 1000px) {
    margin: 0;
    width: 30rem;
  }
`;

export const WriterData = styled.div`
  font-family: "TmoneyRoundWindExtraBold";
  position: absolute;
  color: white;
  left: 5px;
  top: -2rem;

  font-size: 1.5rem;
`;
export const Container = styled.div`
  overflow-y: scroll;

  width: 100%;
  height: 100%;
`;
export const PostTitle = styled.div`
  font-family: "TmoneyRoundWindExtraBold";
  font-size: 2rem;
  width: 100%;
  margin: 1rem 0;
`;
export const PostContent = styled.div`
  font-family: "TmoneyRoundWindRegular";
  font-size: 1.5rem;
  width: 100%;
  overflow-wrap: anywhere;
`;

export const RepleInput = styled.div`
  margin-top: 3rem;
  padding-top: 10px;
  width: 540px;

  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 20rem;
    height: 2rem;
    padding: 0 1rem;
    outline: none;
    border: none;

    background-color: #dcdcdc;
  }
  input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  label {
    font-size: 2rem;
  }
`;
