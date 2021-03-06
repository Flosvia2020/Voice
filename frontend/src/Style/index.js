import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
body{
    @font-face {
    font-family: "TmoneyRoundWindExtraBold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindExtraBold.woff")
      format("woff");
  } 
   @font-face {
    font-family: "TmoneyRoundWindRegular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindRegular.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
}`;

export default Global;
