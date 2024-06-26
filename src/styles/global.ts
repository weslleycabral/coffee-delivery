import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
        color: ${color => color.theme["base-text"]};
        background-color: ${color => color.theme["background"]};
    }

    body, input, textarea, button {
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        font-weight: 500;
    }
`;