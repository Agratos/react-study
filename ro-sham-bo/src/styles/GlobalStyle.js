import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        width: 100vw;
        height: 100vh;

        margin: 0;
        padding: 0;

        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;

        resize: none;
    }
`;

export default GlobalStyle;
