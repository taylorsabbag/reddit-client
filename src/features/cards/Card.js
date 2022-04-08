import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from '@mui/material/Typography';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Button from '@mui/material/Button';
import dayjs from 'dayjs'
import RelativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(RelativeTime)

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

function truncateText(text, limit) {
    const shortened = text.indexOf(' ', limit)
    if (shortened === -1) return text
    return text.substring(0, shortened)
}

export const BasicCard = ({post, subreddit, setSubreddit}) => {
    const handleClick = () => {
        setSubreddit(post.subreddit)
    }

    return (
        <Card sx={{ minWidth: 275, maxWidth: 675, borderRadius: '1%', display: "flex", mb: 2.5 }}>
            <CardContent sx={{ backgroundColor: 'divider', height: '100', float: 'left', minWidth: '60px', maxWidth: '60px', textAlign: 'center' }}>
                <ArrowCircleUpIcon />
                <Typography sx={{ fontSize: 12, mb: 1 }}>
                    <strong>{kFormatter(post.score)}</strong>
                </Typography>
                <ArrowCircleDownIcon />
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
                    Posted by u/{post.author} {dayjs.unix(post.created).fromNow()} 
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
                    {truncateText(post.selftext)}
                </Typography>
                <Typography sx={{ fontSize: 12, mt: 3 }}>
                    <ModeCommentIcon fontSize='inherit' sx={{ pt: 0.3 }} />
                    {post.num_comments} Comments
                </Typography>
            </CardContent>
        </Card>
    )
}