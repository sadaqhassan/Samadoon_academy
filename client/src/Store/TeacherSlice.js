import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    teachers: null
}

const teacherSlice = createSlice({
    name: "teachers",
    initialState,
    
    reducers:{
        getTeachersData : (state,action)=>{
            state.teachers = action.payload;
        }
    }
})

export const  { getTeachersData } = teacherSlice.actions;

export default teacherSlice.reducer;