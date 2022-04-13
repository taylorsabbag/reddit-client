import React, { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useNavigate } from 'react-router-dom'

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import './App.css';

import { Subreddit } from './components/Subreddit'
import { Comments } from './components/Comments'
import { Header } from './components/Header'
import { selectPosts, selectSubreddit, selectSort, getPosts } from './features/cards/subredditsSlice';

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const posts = useSelector(selectPosts)
  const subreddit = useSelector(selectSubreddit)
  const sort = useSelector(selectSort)
  // TODO: Add loading and error
  
  useEffect(() => {
    navigate(`all`)
  }, [])
  
  useEffect(() => {
    dispatch(getPosts({subreddit, sort}))
  }, [subreddit, sort])
  
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
        <Routes>
          <Route path='/:subreddit' element={<Subreddit posts={posts} />} />
          {/* <Route path='/:subreddit/comments/:postId/:postTitle' element={<Comments subreddit={subreddit} posts={posts} />} /> */}
        </Routes>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
