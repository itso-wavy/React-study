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

    /* font-family */
    --font-family-heading: '87MMILSANG-Oblique';
    --font-family-body: '87MMILSANG-Regular';
    --font-family-text: 'Jeju Myeongjo';


    /* font-size */
    --font-size-small: 0.75rem; // 12px
    --font-size-normal: 1.1875rem; // 19px
    --font-size-big: 2.5rem; // 40px

    *, *::before, *::after {
      box-sizing: border-box;
    }

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

    main {
      width: 80%;
      max-width: 1600px;
      margin: 0 auto;
      padding: 2em 1.8em;
    }

    .title {
      font-family: var(--font-family-heading);
      font-size: var(--font-size-big);
      font-weight: bold;
      line-height: 1.6em;
    }

    .text-body {
      font-family: var(--font-family-text);
      line-height: inherit;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  }
`;

export default GlobalStyle;
