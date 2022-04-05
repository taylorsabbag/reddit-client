import React, { useMemo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box';
import './App.css';
import { BasicCard } from './features/cards/Card'
import { Header } from './components/Header'

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = useMemo(
    () => 
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light'
        },
      }),
    [prefersDarkMode],
  )

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
        <CssBaseline />
        <Header />
        <Box sx={{ mx: "auto", width: 675 }}>
          {<BasicCard />}
        </Box>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
