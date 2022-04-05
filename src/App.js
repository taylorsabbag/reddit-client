import React, { useMemo, useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box';
import './App.css';
import { BasicCard } from './features/cards/Card'
import { Header } from './components/Header'

function App() {
  const [ posts, setPosts ] = useState([])
  const [ subreddit, setSubreddit ] = useState('')
  useEffect(() => {
      const getPosts = async () => {
          const response = await fetch('https://www.reddit.com/r/boardgames/comments/tpmc02/made_a_mosaic_for_my_game_room.json')
          const data = await response.json()
          setPosts(data.data.children)
      }
      getPosts()

      return () => {
    }
  }, [subreddit])
  
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
          {<BasicCard posts={posts}/>}
        </Box>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
