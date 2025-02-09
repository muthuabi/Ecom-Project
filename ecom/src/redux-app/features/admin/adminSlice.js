import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
const initialState={
    users:[],
    status:'idle'
}
export const fetchUsers=createAsyncThunk('admin/fetchUsers',async()=>{
    try
    {
        const response=await axios.post('http://localhost:5000/users-list')
        return response.data;
    }
    catch(err)
    {
        throw new Error('Fail to Fetch');
    }
})
const adminSlice = createSlice({
    name:'admin',
    initialState:initialState,//initialState itself is enough
    reducers:{
        addUser:(state,action)=>{
            state.users.push(action.payload);
        },
        putUser:(state,action)=>{
            state.users=action.payload;
        },
        deleteUser:(state,action)=>{
            state.status=action.payload;
        }

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUsers.pending,(state,action)=>{
            state.status='loading';
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.status='success';
            state.users=action.payload;
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            state.status='failed';
            state.users=[]
        })
    }
})
export const {putUser,deleteUser} = adminSlice.actions;
export default adminSlice.reducer;
