import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { PagesRouter } from "./routes"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"


function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <PagesRouter/>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>

  )
}

export default App
