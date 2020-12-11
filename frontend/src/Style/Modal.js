import styled from "styled-components";
import ReactAudioPlayer from "react-audio-player";

export const ModalOveraly = styled.div`
  box-sizing: border-box;
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
  width: 40rem;
  height: 30rem;
  top: 60px;
  margin: 3% 30%;
  padding: 2rem 2rem;
  z-index: 999;

  border-radius: 20px;
  @media screen and (max-width: 1000px) {
    margin: 0;
    width: 30rem;
  }
`;

export const TitleInput = styled.input`
  font-family: "TmoneyRoundWindExtraBold";
  font-size: 2.2rem;
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  border: none;
  outline: none;
  box-sizing: border-box;
  margin-bottom: 1rem;
`;
export const TitleLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #00cdc8;
  box-shadow: 0px 1px 5px 1px rgba(0, 205, 200, 0.5);
`;
export const ContentInput = styled.textarea`
  font-family: "TmoneyRoundWindRegular";
  resize: none;
  font-size: 1rem;
  width: 100%;
  height: 15rem;
  margin-top: 1rem;
  box-sizing: border-box;
  padding: 1rem 1rem;
  border: none;
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
    width: 10rem;
    margin-left: 1rem;
    height: 2rem;
    border: none;
    padding-left: 1rem;
  }
`;
export const SubmitButton = styled.button`
  margin-top: 20px;
  font-family: "TmoneyRoundWindExtraBold";
  font-size: 1.5rem;
  color: white;
  width: 100%;
  height: 3rem;
  background-color: #00cdc8;
  border-radius: 30px;
  border: none;
`;

export const ImageContainer = styled.img`
  width: 90%;
  margin: 0 20%;
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
  padding: 2rem 2rem;

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
  font-family: "TmoneyRoundWindRegular";
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

export const RepleInput = styled.form`
  margin-top: 3rem;
  margin-bottom: 1rem;
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
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.5);
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
  .button {
    background-color: white;
    border: none;
    width: 5rem;
    height: 2rem;
    font-size: 1.5rem;
    text-align: center;
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const RepleContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 5px;
  font-family: "TmoneyRoundWindRegular";
`;

export const AudioPlayer = styled(ReactAudioPlayer)`
  width: 100%;
  height: 3rem;
`;

export const RepleLine = styled.div`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  p {
    margin: 10px;
  }
`;
