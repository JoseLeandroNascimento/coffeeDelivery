import { ThemeProvider } from "styled-components"
import { HomePage } from "./pages/home"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <HomePage />
      <GlobalStyle/>
    </ThemeProvider>

  )
}

export default App
