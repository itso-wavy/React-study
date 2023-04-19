import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  /* font */
  @font-face {
    font-family: '87MMILSANG-Oblique';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201@1.0/87MMILSANG-Oblique.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Jeju Myeongjo';
    src: url(//fonts.gstatic.com/ea/jejumyeongjo/v3/JejuMyeongjo-Regular.woff2) format('woff2')
  }
  @font-face {
    font-family: '87MMILSANG-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201@1.0/87MMILSANG-Regular.woff2') format('woff2');
  }

  :root{
    /* color */
    --color-white: #FFFFFF;
    --color-black: #000000;
    --color-primary: #F81417;
    --color-secondary: #E3E3E3;
    --color-hightlight: #937ed0; /* 2e38a5 */

    /* font-family */
    --font-family-heading: '87MMILSANG-Oblique';
    --font-family-body: 'Jeju Myeongjo';
    --font-family-small: '87MMILSANG-Regular';


    /* font-size */
    --font-size-small: 0.75rem; // 12px
    --font-size-normal: 1.1875rem; // 19px
    --font-size-big: 2.5rem; // 40px

    body {
      font-family: var(--font-family-body);
      font-size: var(--font-size-normal);
      line-height: 1.9em;
      font-weight: lighter;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    .title {
      font-family: var(--font-family-heading);
      font-size: var(--font-size-big);
      font-weight: bold;
      line-height: 1.6em;
    }

    .small {
      font-family: var(--font-family-small);
      font-size: var(--font-size-small);
      line-height: 2em;
    }
  }
`;

export default GlobalStyle;
