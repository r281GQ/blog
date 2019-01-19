import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html {
      font-family: sans-serif;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
    }

    body,
    h1, h2, h3, h4, h5, h6,
    blockquote, p, pre,
    dl, dd, ol, ul,
    figure,
    hr,
    fieldset, legend {
      margin:  0;
      padding: 0;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    ul, ol {
      list-style: none;
    }

    img {
      display: inline-block;
      vertical-align: top;
    }
  `
