import React, { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box';
import './App.css';
import { PostCard } from './features/cards/PostCard'
import { Header } from './components/Header'
import { selectPosts, selectSubreddit, getPosts } from './features/cards/subredditsSlice';

function App() {
  const dispatch = useDispatch()
  const posts = useSelector(selectPosts)
  const subreddit = useSelector(selectSubreddit)
  // TODO: Add loading and error
  
  useEffect(() => {
    dispatch(getPosts(subreddit))

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
        <Header subreddit={subreddit} />
        <Box sx={{ mx: "auto", width: 675 }}>
          {
            (posts != null) ? posts.map((post, index) => 
              <PostCard key={index} post={post.data} subreddit={subreddit} />) : ''
          }
        </Box>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
