'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    // 16px = defaultSize font of HTML
    font-size: 62.5%; // 1rem = 10px == (10/16px = 62.5% -> 1.4rem = 14px
    // OU 16px * 62.5% = 10px)
}

html, body, #__next {
    height: 100%;
}

body {
    font-family: -apple-system, BlickMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    // apple - -apple-system, BlickMacSystemFont
    // Segoe UI - windows
    //Roboto - Linux e Android
}
`

export default GlobalStyles
