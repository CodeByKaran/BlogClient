import { configureStore } from '@reduxjs/toolkit'
import postSliceReducer from "../slice/PostSlice/PostSlice.js"

export const store = configureStore({
  reducer: {
     postSlice: postSliceReducer
  },
})