import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
  }

  body {
    background: rgb(40, 40, 40);
    color:#fff;
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  img {
    width:300px;
    height: 300px;
    object-fit: contain;
  }
`;
