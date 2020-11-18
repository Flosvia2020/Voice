import styled from "styled-components";

export const Logo = styled.div`
  font-family: "TmoneyRoundWindExtraBold";
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
  font-family: "TmoneyRoundWindRegular";
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

export const LinkText = styled.div`
  font-family: "TmoneyRoundWindExtraBold";
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
