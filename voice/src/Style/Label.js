import styled from "styled-components";

const BoldFont = styled.div`
  @font-face {
    font-family: "TmoneyRoundWindExtraBold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindExtraBold.woff")
      format("woff");
  }
  font-family: "TmoneyRoundWindExtraBold";
`;
export const RegularFont = styled.div`
  @font-face {
    font-family: "TmoneyRoundWindRegular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindRegular.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "TmoneyRoundWindRegular";
`;
export const Logo = styled(BoldFont)`
  width: 100%;
  font-size: 50px;
  text-align: center;
  font-weight: bold;
  color: #00cdc8;
  margin-bottom: 40px;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
`;
export const InputLabel = styled.input`
  @font-face {
    font-family: "TmoneyRoundWindRegular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindRegular.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "TmoneyRoundWindExtraBold";
  font-size: 15px;
  width: 400px;
  margin: 5px 0;
  height: 50px;
  border-radius: 20px;
  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.5);
  border: none;
  padding: 3px 30px;
  font-size: 15px;
  &:focus {
    outline: none;
  }
`;

export const LinkText = styled(BoldFont)`
  color: #00cdc8;
  text-decoration: underline;
  cursor: pointer;
`;

export const PasswordComfirm = styled(InputLabel)`
  &:focus {
    border: 1px solid green;
    border-color: ${(prop) => (prop.isValid ? "green" : "red")};
  }
`;

export const WarnningText = styled.div`
  color: red;
`;
