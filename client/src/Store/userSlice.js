import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser : null,
    loading : false,
    error: null
}

export const userSlice = createSlice({
    name :"user",
    initialState,

    reducers:{
        logingStart: (state)=>{
            state.loading = true
        },
        logingFailed : (state,action)=>{
            state.loading = false,
            state.error = action.payload
        },
        loginSuccess:(state,action)=>{
            state.loading = false,
            state.currentUser = action.payload
        }
    }
})

export const { logingStart,logingFailed,loginSuccess }  = userSlice.actions;

export default userSlice.reducer;