
import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    setPosts: (state, action) => {
      return action.payload;
    },
  },
});

export const { addPost, setPosts } = postSlice.actions;
export default postSlice.reducer;