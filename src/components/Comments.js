// import React from 'react'
// import { useParams, useNavigate } from 'react-router-dom'

// import Card from "@mui/material/Card"
// import CardContent from "@mui/material/CardContent"
// import Typography from '@mui/material/Typography';
// import ModeCommentIcon from '@mui/icons-material/ModeComment';
// import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
// import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
// import Button from '@mui/material/Button';

// import { kFormatter, timeFromNow, truncateText } from '../utilities/utilFunctions'

// export const Comments = () => {
//     const navigate = useNavigate()
//     const { subreddit, postId, postTitle } = useParams()

//     return (
//     <>
//         <Card sx={{ minWidth: 275, maxWidth: 675, borderRadius: '1%', display: "flex", mb: 2.5 }}>
//             {/* Score Column */}
//             <CardContent sx={{ backgroundColor: 'divider', height: '100', float: 'left', minWidth: '60px', maxWidth: '60px', textAlign: 'center' }}>
//                 <ArrowCircleUpIcon />
//                 <Typography sx={{ fontSize: 12, mb: 1 }}>
//                     <strong>{kFormatter(post.score)}</strong>
//                 </Typography>
//                 <ArrowCircleDownIcon />
//             </CardContent>

//             {/* Main Post Content and Metadata */}
//             <CardContent>
//                 <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
//                     {post.subreddit.toLowerCase() !== subreddit.toLowerCase() &&
//                         <Button sx={{ fontSize: 12, margin: 0, padding: 0.5 }}
//                             variant="text"
//                             color='secondary'
//                             onClick={navigate(-1)}
//                         >
//                             {post.subreddit_name_prefixed}
//                         </Button>
//                     }
//                     {post.subreddit.toLowerCase() !== subreddit.toLowerCase() && ' • '}
//                     Posted by u/{post.author} {timeFromNow(post.created)} 
//                 </Typography>
//                 <Typography sx={{ mb: 1.5 }}>
//                     {`${post.title}`}
//                 </Typography>
//                 {post.url_overridden_by_dest &&
//                     <img 
//                         alt="" 
//                         src={post.url_overridden_by_dest} 
//                         style={{ minWidth: '50%', maxWidth: "100%", aspectRatio: 'initial' }} 
//                     />
//                 }
//                 <Typography>
//                     {truncateText(post.selftext, 400)}
//                 </Typography>
//                 <Typography sx={{ fontSize: 12, mt: 3 }}>
//                     <ModeCommentIcon fontSize='inherit' sx={{ pt: 0.3 }} />
//                     {post.num_comments} Comments
//                 </Typography>
//             </CardContent>
//         </Card>

//         <Card>
//                 {/* TODO: Comments card */}
//         </Card>
//     </>
//   )
// }