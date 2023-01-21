import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`${css`
  :root {
    /* Font Weights */
    --fw-normal: 400;
    --fw-bold: 700;
    /* colors */
    --clr-primary-cyan: hsl(172, 67%, 45%);
    --clr-dark-cyan: hsl(183, 100%, 15%);
    --clr-dark-grayish: hsl(186, 14%, 43%);
    --clr-grayish: hsl(184, 14%, 56%);
    --clr-light-grayish: hsl(185, 41%, 84%);
    --clr-lighter-grayish: hsl(189, 41%, 97%);
    --clr-primary-white: hsl(0, 0%, 100%);
  }
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 24px;
    font-family: "Space Mono", monospace;
  }
`}
`;
