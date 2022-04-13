import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import { Typography, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Paper from "@mui/material/Paper"
import WhatshotIcon from "@mui/icons-material/Whatshot"
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

import debounce from 'lodash.debounce'
import { setSubreddit, setSort, selectSort, selectSubreddit } from "../features/cards/subredditsSlice";

export const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const sort = useSelector(selectSort)
    const subreddit = useSelector(selectSubreddit)

  
    const debouncedHandleChange = useMemo(() => {
        const handleChange = ({target}) => {
            dispatch(setSubreddit(target.value))
            navigate(target.value)
        }

        return debounce(handleChange, 500);
      }, [dispatch, navigate]);

    const handleSort = ({target}) => {
        dispatch(setSort(target.value))
        // navigate(`/${subreddit}/${sort}`)
    }
    
    return (
        <Box sx={{ width: '100%', textAlign: 'center'}}>
           <Paper sx={{ mb: 3, padding: 2, display: "flex", justifyContent: 'center' }} component='header'>
                <Typography variant="h4" component='h1'>
                    Superliminal/
                    {/* TODO: Change value of input to subreddit */}
                    <input type='text' onChange={debouncedHandleChange} placeholder={subreddit} autoFocus />
                </Typography>

                <ToggleButtonGroup
                    value={sort}
                    exclusive
                    onChange={handleSort}
                    aria-label='subreddit sort'
                    color='secondary'
                >
                    <ToggleButton value='hot' aria-label='sort by hot'>
                        <WhatshotIcon sx={{ mr: 0.25 }} />
                        Hot
                    </ToggleButton>
                    <ToggleButton value='new' aria-label='sort by new'>
                        <NewReleasesIcon sx={{ mr: 0.3 }} />
                        New
                    </ToggleButton>
                    <ToggleButton value='top' aria-label='sort by top'>
                        <SignalCellularAltIcon  sx={{ mr: 0.3 }} />
                        Top
                    </ToggleButton>
                </ToggleButtonGroup>
            </Paper>
        </Box>
    )
}