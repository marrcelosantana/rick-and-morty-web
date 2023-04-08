import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  :focus{
    outline:0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.TEXT_DEFAULT};
  }

  body{
    background-color: ${({ theme }) => theme.SCREEN_BACKGROUND};
    color: ${({ theme }) => theme.TEXT_DEFAULT};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button{
    font: 400 1rem Roboto, sans-serif;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  button{
    cursor: pointer;

    transition: opacity 0.2s;

    &:hover{
      opacity: 0.8;
    }
  }

  a{
    color: inherit;
    text-decoration: none;
  }
`;
