import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
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

    #___gatsby {
      display: flex;
      height: 100%;
      width: 100%;
      flex-direction: column;
    }

    [role=group] {
      min-height: 100vh;
    }
`
