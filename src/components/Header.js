import React from "react";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Card from "@mui/material/Card"

export const Header = () => {
    return (
        <Box sx={{ height: 100, width: '100%', textAlign: 'center', mb: 1.5}}>
           <Card>
                <Typography>
                    <h1>Superliminal</h1>
                </Typography> 
            </Card>
        </Box>
    )
}