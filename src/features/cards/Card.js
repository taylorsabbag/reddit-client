import React, { useState, useEffect } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from '@mui/material/Typography';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export const BasicCard = () => {
    const [ postTitle, setPostTitle ] = useState('Loading...')
    useEffect(() => {
        const getTitle = async () => {
            const response = await fetch('https://www.reddit.com/r/boardgames/comments/tpmc02/made_a_mosaic_for_my_game_room.json')
            const data = await response.json()
            setPostTitle(data[0]["data"]["children"][0]['data']["title"])
        }
        setPostTitle(getTitle)

        return () => {
      }
    }, [])
    
    
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
                <Typography sx={{ mb: 1.5 }}>
                    {`${postTitle}`}
                </Typography>
                <img 
                    alt="" 
                    src="https://i.imgur.com/x0aq9J4.jpeg" 
                    style={{ minWidth: '50%', maxWidth: "100%", aspectRatio: 'initial' }} 
                />
                <hr />
                <Typography sx={{ fontSize: 12, mt: 3 }}>
                    <ModeCommentIcon fontSize='inherit' sx={{ pt: 0.3 }} />
                    120 Comments
                </Typography>
            </CardContent>
        </Card>
    )
}