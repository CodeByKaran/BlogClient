import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   blogstate : null,
}

export const postSlice = createSlice({
  name: 'postslice',
  initialState,
  reducers: {
    savePost:(state,action)=>{
       state.blogstate = action.payload;
    },
  },
})


export const { savePost } = postSlice.actions

export default postSlice.reducer