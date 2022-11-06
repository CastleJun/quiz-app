import { fontWeight } from 'src/styles/typography';
import { css } from 'styled-components';

export const FONT_FAMILY_NAME = 'Spoqa Han Sans Neo';

export const getFontFamilyCSS = () => css`
  @font-face {
    font-family: '${FONT_FAMILY_NAME}';
    font-weight: ${fontWeight.bold};
    font-display: block;
    src: url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff2')
        format('woff2'),
      url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff')
        format('woff'),
      url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.ttf')
        format('truetype');
  }

  @font-face {
    font-family: '${FONT_FAMILY_NAME}';
    font-weight: ${fontWeight.medium};
    font-display: block;
    src: url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.woff2')
        format('woff2'),
      url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.woff')
        format('woff'),
      url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.ttf')
        format('truetype');
  }

  @font-face {
    font-family: '${FONT_FAMILY_NAME}';
    font-weight: ${fontWeight.regular};
    font-display: block;
    src: url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff2')
        format('woff2'),
      url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff')
        format('woff'),
      url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.ttf')
        format('truetype');
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
`;
