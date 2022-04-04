import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from '@mui/material/Typography';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export const BasicCard = () => {
    return (
        <Card sx={{ minWidth: 275, maxWidth: 675, borderRadius: '1%', display: "flex" }}>
            <CardContent sx={{ backgroundColor: 'divider', height: '100', float: 'left', justifyItems: 'center' }}>
                <ArrowDropUpIcon />
                <Typography sx={{ fontSize: 12, mb: 1 }}>
                    <strong>3279</strong>
                </Typography>
                <ArrowDropDownIcon />
            </CardContent>
            <CardContent>
                <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                    Posted by u/benbernards 8 days ago
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.primary">
                    Made a mosaic for my game room
                </Typography>
                <img alt="" src="https://i.imgur.com/x0aq9J4.jpeg" style={{ minWidth: '50%', maxWidth: "100%" }} />
                <hr />
                <Typography sx={{ fontSize: 12, mt: 3 }}>
                    <ModeCommentIcon fontSize='inherit' sx={{ pt: 0.3 }} />
                    120 Comments
                </Typography>
            </CardContent>
        </Card>
    )
}