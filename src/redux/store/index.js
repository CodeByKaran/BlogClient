import { configureStore } from '@reduxjs/toolkit'
import postSliceReducer from "../slice/PostSlice/PostSlice.js"
import loggedUserSlice from "../slice/LoggedSlice/LoggedUserSlice.js"

export const store = configureStore({
  reducer: {
     postslice: postSliceReducer,
     loggedUserSlice: loggedUserSlice
  },
})