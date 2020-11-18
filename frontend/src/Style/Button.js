import styled from "styled-components";
export const ColorButton = styled.div`
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
  font-family: "TmoneyRoundWindRegular";
  background-color: white;
  color: ${(prop) => prop.color};
  outline: none;
  border: none;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;
