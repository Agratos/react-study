import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        width: 100vw;
        min-height: 100vh;

        margin: 0;
        padding: 0;

        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 16px;

        resize: none;

        overflow: scroll;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            width: 0;  /* Remove scrollbar space */
            background: transparent;  /* Optional: just make scrollbar invisible */
        }
        /* Optional: show position indicator in red */
        &::-webkit-scrollbar-thumb {
            background: #FF0000;
        }
    }
`;

export default GlobalStyle;
