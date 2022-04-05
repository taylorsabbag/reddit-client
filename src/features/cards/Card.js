import React, { useState } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from '@mui/material/Typography';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Button from '@mui/material/Button';

export const BasicCard = ({post, subreddit, setSubreddit}) => {
    const handleClick = () => {
        setSubreddit(post.subreddit)
    }

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
                    {post.subreddit !== subreddit &&
                        <Button sx={{ fontSize: 12, margin: 0, padding: 0.5 }}
                            variant="text"
                            color='secondary'
                            onClick={handleClick}
                        >
                            {post.subreddit_name_prefixed}
                        </Button>
                    }
                    {post.subreddit !== subreddit && ' • '}
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
                <Typography>
                    {post.selftext}
                </Typography>
                <Typography sx={{ fontSize: 12, mt: 3 }}>
                    <ModeCommentIcon fontSize='inherit' sx={{ pt: 0.3 }} />
                    {post.num_comments} Comments
                </Typography>
            </CardContent>
        </Card>
    )
}