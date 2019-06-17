import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  .modest-no-decoration {
    text-decoration: none;
  }

  p,
  .modest-p {
    font-size: 1rem;
    margin-bottom: 1.3rem;
  }

  h1,
  .modest-h1,
  h2,
  .modest-h2,
  h3,
  .modest-h3,
  h4,
  .modest-h4 {
    margin: 1.414rem 0 .5rem;
    font-weight: inherit;
    line-height: 1.42;
  }

  h1,
  .modest-h1 {
    margin-top: 0;
    font-size: 3.998rem;
  }

  h2,
  .modest-h2 {
    font-size: 2.827rem;
  }

  h3,
  .modest-h3 {
    font-size: 1.999rem;
  }

  h4,
  .modest-h4 {
    font-size: 1.414rem;
  }

  h5,
  .modest-h5 {
    font-size: 1.121rem;
  }

  h6,
  .modest-h6 {
    font-size: .88rem;
  }

  small,
  .modest-small {
    font-size: .707em;
  }

  /* https://github.com/mrmrs/fluidity */

  img,
  canvas,
  iframe,
  video,
  svg,
  select,
  textarea {
    max-width: 100%;
  }


  h1,
  h2,
  h3 {
    border-bottom: 2px solid #fafafa;
    margin-bottom: 1.15rem;
    padding-bottom: .5rem;
    text-align: center;
  }

  blockquote {
    border-left: 8px solid #fafafa;
    padding: 1rem;
  }

  pre,
  code {
    background-color: #fafafa;
  }

  #___gatsby {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
  }

  [role=group] {
    min-height: 100vh;
  }

  html {
    height: 100%;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    display: flex;
    font-size: 16px;
    line-height: 1.5;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-smoothing: antialiased;
  }

  body {
    display: flex;
    flex: auto;
    max-width: 100%;
    max-height: 100%;
    align-self: stretch;
    -webkit-overflow-scrolling: touch;
  }
`
