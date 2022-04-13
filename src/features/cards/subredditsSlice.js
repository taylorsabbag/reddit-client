import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
    'subreddits/getPosts',
    async ({subreddit, sort}) => {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}/${sort}.json`)
        const data = await response.json()
        return data.data.children
    }
)

export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddit: 'all',
        sort: 'hot',
        posts: [],
        isLoading: false,
        hasError: false
    },
    reducers: {
        setSubreddit: (state, action) => { state.subreddit = action.payload },
        setSort: (state, action) => { state.sort = action.payload }
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
export const selectSort = state => state.subreddits.sort
export const { setSubreddit, setSort } = actions
export default reducer