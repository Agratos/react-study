import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    width:100%;
    min-height: 100vh;

    margin: 0;
    padding: 0;

    overflow-y: scroll;
    resize: none;
  }
`;

export default GlobalStyle;
