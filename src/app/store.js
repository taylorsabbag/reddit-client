import { configureStore } from '@reduxjs/toolkit';
import subredditsReducer from '../features/cards/subredditsSlice'

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer
  },
});
