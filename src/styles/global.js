import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;  
  }

  html,body,#root{
    height:100%;
  }

  #root{
    overflow-y:auto;
  }

  body{
    color: #837E9F;
    background: #22212C;
    font-family: "Open Sans", sans-serif;
  }
`;

export default GlobalStyle;
