import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from '@mui/material/Typography';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export const BasicCard = ({article}) => {
    
    
    return (
        <Card sx={{ minWidth: 275, maxWidth: 675, borderRadius: '1%', display: "flex" }}>
            <CardContent sx={{ backgroundColor: 'divider', height: '100', float: 'left', justifyItems: 'center' }}>
                <ArrowDropUpIcon />
                <Typography sx={{ fontSize: 12, mb: 1 }}>
                    <strong>{article.score}</strong>
                </Typography>
                <ArrowDropDownIcon />
            </CardContent>
            <CardContent>
                <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                    Posted by u/{article.author} 8 days ago
                </Typography>
                <Typography sx={{ mb: 1.5 }}>
                    <a href={article.permalink} target="_blank" rel="noopener noreferrer">
                        {`${article.title}`}
                    </a>
                </Typography>
                <img 
                    alt="" 
                    src={article.url_overridden_by_dest} 
                    style={{ minWidth: '50%', maxWidth: "100%", aspectRatio: 'initial' }} 
                />
                <Typography sx={{ fontSize: 12, mt: 3 }}>
                    <ModeCommentIcon fontSize='inherit' sx={{ pt: 0.3 }} />
                    {article.num_comments} Comments
                </Typography>
            </CardContent>
        </Card>
    )
}