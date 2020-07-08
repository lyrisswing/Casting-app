import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        overflow: hidden;
    }

    html {
        font-size: 62.5%;
    }

    body {
        box-sizing: border-box;
        font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
        color: #000;
        background-color: #E7E7E7;
    }
`;

export default GlobalStyle;