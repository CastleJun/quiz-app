import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { getFontFamilyCSS } from './font';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    outline: none;
    border: none;
  }

  body {
    background-color: #fafafa;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ${getFontFamilyCSS()}
`;
