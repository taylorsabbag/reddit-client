import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
    'subreddits/getPosts',
    async (subreddit) => {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`)
        const data = await response.json()
        return data.data.children
    }
)

export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddit: 'all',
        posts: [],
        isLoading: false,
        hasError: false
    },
    reducer: {
        setSubreddit: (state, action) => (state.subreddits.subreddit = action.payload)
    },
    extraReducers: {
        [getPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [getPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

const { actions, reducer } = subredditsSlice
export const selectPosts = state => state.subreddits.posts
export const selectSubreddit = state => state.subreddits.subreddit
export const { setSubreddit } = actions
export default reducer