import { createGlobalStyle } from "styled-components";

export const theme = {
  darkPurple: "#1A253C",
  lightPurple: "#303F60",
  lightBlue: "#EDF6FF",
  skyBlue: "#43AFFF",
  outlinedBtnBackground: "#43AFFF33",
};

export const GlobalStyle = createGlobalStyle`
 html {
      box-sizing: border-box;
      scroll-behavior:smooth;
    }

    body {
      margin: 0;
    }

    *,
    *::before,
    *::after {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

`;
