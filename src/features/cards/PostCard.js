import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from '@mui/material/Typography';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import PushPinIcon from '@mui/icons-material/PushPin';
import { CardActionArea, Link } from '@mui/material'

import { setSubreddit, selectSubreddit } from "./subredditsSlice";
import { kFormatter, timeFromNow, truncateText } from '../../utilities/utilFunctions'

// TODODODODODDO: make Link work inside of CardActionArea

export const PostCard = ({post}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const subreddit = useSelector(selectSubreddit)
    
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(setSubreddit(post.subreddit))
        navigate(`/${post.subreddit}`)
    }

    return (
        <Card sx={{ minWidth: 275, maxWidth: 675, borderRadius: '1%', display: "flex", mb: 2.5 }}>
            
            {/* Score Column */}
            <CardContent sx={{ backgroundColor: 'divider', height: '100', float: 'left', minWidth: '60px', maxWidth: '60px', textAlign: 'center' }}>
                <ArrowCircleUpIcon />
                <Typography sx={{ fontSize: 12, mb: 1 }}>
                    <strong>{kFormatter(post.score)}</strong>
                </Typography>
                <ArrowCircleDownIcon />
            </CardContent>

            {/* Main Post Content and Metadata */}
            <CardActionArea onClick={() => {navigate(`${post.permalink}`)}} target="_blank" rel="noopener noreferrer">
                <CardContent>
                    <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                        {post.stickied &&
                            <PushPinIcon sx={{ transform: 'rotate(-45deg)' }} fontSize='inherit' />
                        }
                        {post.subreddit.toLowerCase() !== subreddit.toLowerCase() &&
                            <Link href={subreddit}
                                onClick={handleClick}
                            >
                                {post.subreddit_name_prefixed}
                            </Link>
                        }
                        {post.subreddit.toLowerCase() !== subreddit.toLowerCase() && ' • '}
                        Posted by u/{post.author} {timeFromNow(post.created)} 
                    </Typography>
                    <Typography sx={{ mb: 1.5 }}>
                        {`${post.title}`}
                    </Typography>
                    {post.url_overridden_by_dest &&
                        <img 
                            alt="" 
                            src={post.url_overridden_by_dest} 
                            style={{ minWidth: '50%', maxWidth: "100%", aspectRatio: 'initial' }} 
                        />
                    }
                    <Typography>
                        {truncateText(post.selftext, 400)}
                    </Typography>
                    <Typography sx={{ fontSize: 12, mt: 3 }}>
                        <ModeCommentIcon fontSize='inherit' sx={{ pt: 0.2 }} />
                        {post.num_comments} Comments
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}