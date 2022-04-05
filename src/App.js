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
  const [ subreddit, setSubreddit ] = useState('boardgames')
  useEffect(() => {
      const getPosts = async () => {
          const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`)
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
        <Header subreddit={subreddit} setSubreddit={setSubreddit} />
        <Box sx={{ mx: "auto", width: 675 }}>
          {
            (posts != null) ? posts.map((post, index) => 
              <BasicCard key={index} post={post.data} />) : ''
          }
        </Box>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
