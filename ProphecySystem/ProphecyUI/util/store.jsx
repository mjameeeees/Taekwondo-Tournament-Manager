import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../util/postSlice';

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export default store;