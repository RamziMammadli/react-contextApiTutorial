import React from 'react'
import Home from './pages/Home'
import { ThemeProvider } from './context/context'

const App = () => {
  return (
    <ThemeProvider>
      <Home/>
    </ThemeProvider>
  )
}

export default App