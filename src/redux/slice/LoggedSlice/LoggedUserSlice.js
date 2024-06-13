import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   userState : null
}

export const LoggedUserSlice= createSlice({
   name:"loggedUserSlice",
   initialState,
   reducers:{
      setUser:(state,action)=>{
         state.userState = action.payload
      }
   }
})



export const {setUser} = LoggedUserSlice.actions

export default LoggedUserSlice.reducer