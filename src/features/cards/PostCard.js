import React from "react"
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from '@mui/material/Typography';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Button from '@mui/material/Button';
import { setSubreddit } from "./subredditsSlice";
import { kFormatter, timeFromNow, truncateText } from '../../utilities/utilFunctions'

export const PostCard = ({post, subreddit}) => {
    const dispatch = useDispatch()
    
    const handleClick = () => {
        dispatch(setSubreddit(post.subreddit))
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
                    Posted by u/{post.author} {timeFromNow(post.created)} 
                </Typography>
                <Typography sx={{ mb: 1.5 }}>
                    <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                        {`${post.title}`}
                    </a>
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
                    <ModeCommentIcon fontSize='inherit' sx={{ pt: 0.3 }} />
                    {post.num_comments} Comments
                </Typography>
            </CardContent>
            
        </Card>
    )
}