import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    height: auto;
    min-height: 100vh;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.typography.base.fontFamily};
    width: 100%;
    min-height: 100%;
    font-weight: 500;
    font-size: ${({ theme }) => theme.typography.sizes[400]};
    background: linear-gradient(
      ${({ theme }) =>
        `${theme.palette.primary.dark}, ${theme.palette.primary.darker}`}
    );
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100%;
  }

  h1, h2 {
    font-family: ${({ theme }) => theme.typography.title.fontFamily};
    font-weight: 700;
    color: ${({ theme }) => theme.palette.secondary.light};
  }
`;

export default GlobalStyles;
