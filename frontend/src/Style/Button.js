import styled from "styled-components";
export const ColorButton = styled.div`
  @font-face {
    font-family: "TmoneyRoundWindExtraBold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindExtraBold.woff")
      format("woff");
  }
  font-family: "TmoneyRoundWindExtraBold";
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(prop) => prop.width};
  height: ${(prop) => prop.height};
  margin: 5px 0;
  padding: 0 30px;
  height: 50px;
  background-color: #00cdc8;
  color: white;
  border-radius: 20px;
  &:active {
    background-color: #06a191;
  }
`;

export const TransparentButton = styled.button`
  @font-face {
    font-family: "TmoneyRoundWindRegular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindRegular.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "TmoneyRoundWindRegular";
  background-color: white;
  color: ${(prop) => prop.color};
  outline: none;
  border: none;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;
