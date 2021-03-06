import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

*, *::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none;
}

html {
    font-size: 62.5%;
    cursor: none;
}

body {
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
}

/* .cursor {
    position: absolute;
    width: 6px;
    height: 6px;
    transform: translate(-50%,-50%);
    border: 1px solid black;
    border-radius: 50%;
    background-color: white;
    backface-visibility: hidden;
    // mix-blend-mode: screen;
  /*   transition: transform 0.2s ease-out; */
    z-index: 1000;
    pointer-events: none;
  
  }
  
  .cursor2 {
    position: absolute;
    width: 50px;
    height: 50px;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    background-color: rgba(255,255,255,.8);
    backface-visibility: hidden;
  /*   transition: transform 0.2s ease-out; */
      transition-duration: 200ms;
      transition-timing-function: ease-out;
    mix-blend-mode: overlay;
    -webkit-box-shadow: 0px 0px 25px 20px rgba(255,255,255,.8);
    -moz-box-shadow:0px 0px 25px 20px rgba(255,255,255,.8);
    box-shadow: 0px 0px 25px 20px rgba(255,255,255,.8);
    z-index: 1000;
    pointer-events: none;
  }
  
  .anim{
        animation: border .5s forwards;
  }
  
  @keyframes border {
      0% {
          transform: scale(1) translate(-50%,-50%);
      }
      50% {
          transform: scale(3);
      }
      100% {
          transform: scale(1) translate(-50%,-50%);
          opacity: 0;
      }
  } */
`;


export default GlobalStyle;