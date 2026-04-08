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
        },
        deleteTeacher: (state,action)=>{
            let prev = state.teachers.filter((teach)=>teach.id !== action.payload);
            state.teachers = prev
        }
    }
})

export const  { getTeachersData ,deleteTeacher} = teacherSlice.actions;

export default teacherSlice.reducer;