import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './base/Header'
import { themeOptionsLight, themeOptionsDark } from './Theme'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import Content from './Content'

function App() {
  const [themeConf, setThemeConf] = useState(0);
  console.log(themeConf);

  const theme = createTheme(themeConf === 1 ? themeOptionsDark : themeOptionsLight);

  return (
    <>
    <ThemeProvider theme={theme}>
        <Header
        theme={themeConf}
        setThemeConf={setThemeConf}/>
        <Content/>
        </ThemeProvider>
    </>
  )
}

export default App
