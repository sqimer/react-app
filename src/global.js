import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    }
    
    p {
    padding: 0;
    margin: 0;
  }

    a {
    color: #17b0e7;
    text-decoration: none;
  }

  a:hover {
    color: inherit;
  }

 div {
   transition: all .4s ease-in-out;
 }

  body {
    font-size: 16px;
  }
`;
