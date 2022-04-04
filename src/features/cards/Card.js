import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const BasicCard = () => {
    
    
    return (
        <Card sx={{ minWidth: 275, maxWidth: 675 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Made a Mosaic for my game room
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
        </Card>
    )
}