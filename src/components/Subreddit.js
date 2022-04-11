import React from 'react'

import Box from '@mui/material/Box';

import { PostCard } from '../features/cards/PostCard'

export const Subreddit = ({posts, subreddit}) => {
  return (
    <Box sx={{ mx: "auto", width: 675 }}>
        {
            (posts != null) ? posts.map((post, index) => 
                <PostCard key={index} post={post.data} subreddit={subreddit} />) : ''
        }
    </Box>
  )
}