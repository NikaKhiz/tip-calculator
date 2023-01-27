import { createGlobalStyle, css } from "styled-components";
import logo from "../assets/images/logo.svg";
import dollar from "../assets/images/icon-dollar.svg";
import person from "../assets/images/icon-person.svg";

export const GlobalStyles = createGlobalStyle`${css`
  :root {
    /* Font Weights */
    --fw-normal: 400;
    --fw-bold: 700;
    /* colors */
    --clr-primary-cyan: hsl(172, 67%, 45%);
    --clr-dark-cyan: hsl(183, 100%, 15%);
    --clr-lighter-dark-cyan: #0d686d;
    --clr-dark-grayish: hsl(186, 14%, 43%);
    --clr-grayish: hsl(184, 14%, 56%);
    --clr-light-grayish: hsl(185, 41%, 84%);
    --clr-lighter-grayish: hsl(189, 41%, 97%);
    --clr-primary-white: hsl(0, 0%, 100%);
    /* transition */
    --tr-primary: all 0.3s ease-in-out;
  }
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Space Mono", monospace;
    font-size: 16px;
    line-height: 24px;
  }
  /* outer container */
  .container {
    background-color: var(--clr-light-grayish);
    width: 100%;
    min-height: 100vh;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  /* application container */
  .app {
    background-color: var(--clr-primary-white);
    width: min(100%, 950px);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 30px;
    @media screen and (min-width: 1024px) {
      flex-direction: row;
    }
    & > * {
      flex: 1;
    }
    /* tips container */
    .tips {
      padding: 30px;
      border-radius: 15px;
      text-transform: capitalize;
      form {
        display: flex;
        flex-direction: column;
        gap: 30px;
        color: var(--clr-dark-grayish);
        font-weight: var(--fw-bold);
        .input-cont {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .tips-btns-cont {
          display: flex;
          flex-direction: column;
          gap: 10px;
          .tips-btns {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            @media screen and (min-width: 1024px) {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 15px;
            }
            & > * {
              font-size: 23px;
              width: 100%;
              padding: 15px;
              cursor: pointer;
              border-radius: 5px;
            }
            button {
              border: none;
              outline: none;
              background-color: var(--clr-dark-cyan);
              color: var(--clr-primary-white);
              font-weight: var(--fw-bold);
              transition: var(--tr-primary);
              &:hover {
                background-color: var(--clr-primary-cyan);
                color: var(--clr-dark-cyan);
              }
            }
            /* input for custom % of tips */
            .customBtn {
              border: 2px solid transparent;
              outline: none;
              background-color: var(--clr-lighter-grayish);
              color: var(--clr-dark-cyan);
              font-weight: var(--fw-bold);
              text-align: end;
              transition: var(--tr-primary);
              caret-color: var(--clr-primary-cyan);
              &:focus {
                border: 2px solid var(--clr-primary-cyan);
              }
              &::placeholder {
                color: var(--clr-grayish);
              }
            }
          }
        }

        /* primary inputs  */
        input:not(.customBtn) {
          padding: 15px 20px;
          border: 2px solid transparent;
          border-radius: 5px;
          width: 100%;
          outline: none;
          background-color: var(--clr-lighter-grayish);
          font-size: 23px;
          text-transform: capitalize;
          color: var(--clr-dark-cyan);
          font-weight: var(--fw-bold);
          text-align: end;
          transition: var(--tr-primary);

          &:focus {
            border: 2px solid var(--clr-primary-cyan);
          }
          &::placeholder {
            color: var(--clr-grayish);
          }
        }
        /* images for inputs  */
        .dollarImg {
          position: relative;
        }
        .dollarImg::before {
          content: url("${dollar}");
          color: red;
          z-index: 100;
          position: absolute;
          top: 50%;
          left: 5%;
          transform: translate(-5%, -50%);
        }
        .personImg {
          position: relative;
        }
        .personImg::before {
          content: url("${person}");
          color: red;
          z-index: 100;
          position: absolute;
          top: 50%;
          left: 5%;
          transform: translate(-5%, -50%);
        }
      }
    }
    /* totals container */
    .totals {
      padding: 30px;
      background-color: var(--clr-dark-cyan);
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 30px;
      .totalsInnerCont {
        display: flex;
        flex-direction: column;
        gap: 35px;
        @media screen and(min-width:1024px) {
          gap: 70px;
        }

        .tipAmountCont,
        .totalsPriceCont {
          display: flex;
          justify-content: space-between;
          align-content: center;
          .totalsHeading {
            text-transform: capitalize;
            font-weight: var(--fw-bold);
            color: var(--clr-primary-white);
          }
          .totalsSubHeading {
            color: var(--clr-grayish);
          }
          .total {
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--clr-grayish);
            font-weight: var(--fw-bold);
            .price {
              font-size: 30px;
              @media screen and (min-width: 1024px) {
                font-size: 45px;
              }
            }

            .dollarImgCont {
              width: 30px;
              height: 30px;
              @media screen and (min-width: 1024px) {
                width: 45px;
                height: 45px;
              }
              img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }
          }
        }
      }

      .resetBtn {
        border: none;
        border-radius: 5px;
        padding: 19px;
        background-color: var(--clr-lighter-dark-cyan);
        font-size: 20px;
        text-transform: uppercase;
        color: var(--clr-dark-cyan);
        font-weight: var(--fw-bold);
        cursor: pointer;
      }

      /* splitter img */

      &::before {
        content: url("${logo}");
        position: absolute;
        top: -20%;
        left: 50%;
        transform: translate(-50%, 20%);
      }
    }
  }
`}
`;
