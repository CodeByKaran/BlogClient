import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user : null
}

export const postSlice = createSlice({
  name: 'postslice',
  initialState,
  reducers: {
    savePost:(state,action)=>{
       state.user = action.payload
    }
  },
})


export const { savePost } = postSlice.actions

export default postSlice.reducer