import React, { useMemo } from "react";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper"
import debounce from 'lodash.debounce'

export const Header = ({subreddit, setSubreddit}) => {
    const handleChange = ({target}) => {
        setSubreddit(target.value)
    }

    const debouncedHandleChange = useMemo(() => {
        return debounce(handleChange, 500);
      }, []);
    
    return (
        <Box sx={{ width: '100%', textAlign: 'center'}}>
           <Paper sx={{ mb: 3, padding: 2 }} component='header'>
                <Typography variant="h4" component='h1'>
                    Superliminal/
                    {/* TODO: Change value of input to subreddit */}
                    <input type='text' onChange={debouncedHandleChange} placeholder={subreddit} autoFocus/>
                </Typography> 
            </Paper>
        </Box>
    )
}