import React from "react";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper"

export const Header = ({subreddit, setSubreddit}) => {
    const handleChange = ({target}) => {
        setSubreddit(target.value)
    }
    
    return (
        <Box sx={{ width: '100%', textAlign: 'center'}}>
           <Paper sx={{ mb: 3, padding: 2 }}>
                <Typography variant="h4" component='h1'>
                    Superliminal/
                    <input type='text' value={subreddit} onChange={handleChange}></input>
                </Typography> 
            </Paper>
        </Box>
    )
}