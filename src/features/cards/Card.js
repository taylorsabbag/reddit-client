import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from '@mui/material/Typography';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export const BasicCard = ({post}) => {
    
    return (
        <Card sx={{ minWidth: 275, maxWidth: 675, borderRadius: '1%', display: "flex", mb: 2.5 }}>
            <CardContent sx={{ backgroundColor: 'divider', height: '100', float: 'left', justifyItems: 'center' }}>
                <ArrowDropUpIcon />
                <Typography sx={{ fontSize: 12, mb: 1 }}>
                    <strong>{post.score}</strong>
                </Typography>
                <ArrowDropDownIcon />
            </CardContent>
            <CardContent>
                <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                    Posted by u/{post.author} {post.created} 
                </Typography>
                <Typography sx={{ mb: 1.5 }}>
                    <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                        {`${post.title}`}
                    </a>
                </Typography>
                <img 
                    alt="" 
                    src={post.url_overridden_by_dest} 
                    style={{ minWidth: '50%', maxWidth: "100%", aspectRatio: 'initial' }} 
                />
                <Typography sx={{ fontSize: 12, mt: 3 }}>
                    <ModeCommentIcon fontSize='inherit' sx={{ pt: 0.3 }} />
                    {post.num_comments} Comments
                </Typography>
            </CardContent>
        </Card>
    )
}