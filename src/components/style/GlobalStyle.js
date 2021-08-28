import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import bg from 'assets/images/meteowrite-bk-img.svg';

export const GlobalStyle = createGlobalStyle`
${normalize}

* {
    box-sizing: border-box;
}

html {
    height: 100%;
    font-size: 16px;
}

body {
    font-family: 'Roboto', sans-serif;
    height: 100%;
    width: 100%;
    background: url(${bg});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}
`;
