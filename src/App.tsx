import { ThemeProvider } from "styled-components"
import { HomePage } from "./pages/home"
import { defaultTheme } from "./styles/themes/default"


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <HomePage />
    </ThemeProvider>

  )
}

export default App
