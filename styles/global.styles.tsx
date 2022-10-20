import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'FontOver';
      src: url('/fonts/font_over/Font-Over.otf');
      src: url('/fonts/font_over/Font-Over.otf');
      font-weight: 400;
      font-style: normal;
    }



  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth !important;
    scroll-snap-type: y proximity;
  }
  body {
    line-height: 1.5;
    font-size: 1.6rem;
    font-family: 'Satoshi', sans-serif;
    line-height: 1.5;
    background-color: #000;
    color: #fff;
    height: auto;
  }


  h1, h2, h3, h4, h5, h6 {
    /* font-family: 'FontOver', sans-serif; */
  }
  
  
  a {
    cursor: pointer;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }
  
  input, button {
    border: none;
    outline: none;
    font-family: inherit;
    &:focus {
      outline: none;
    }
  }

  input {
    font-size: 1.8rem;
  }
`
