import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        width: calc(100vw - 17px);
        max-width: calc(100vw - 17px);
        
        min-height: 100vh;

        margin: 0;
        padding: 0;

        overflow-y: scroll;
        resize: none;
    }
`;

export default GlobalStyle;
