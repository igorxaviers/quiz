import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json'
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    background-color: #f1f1f1;
  }
`

const theme = db.theme

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
