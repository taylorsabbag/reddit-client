import React from "react";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper"

export const Header = () => {
    return (
        <Box sx={{ width: '100%', textAlign: 'center', mb: 1.5}}>
           <Paper sx={{ mb: 5, padding: 2 }}>
                <Typography variant="h4" component='h1'>
                    Superliminal/subredditname
                </Typography> 
            </Paper>
        </Box>
    )
}