import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";
import toastStyle from "./toastStyle";

const editUser = createAsyncThunk("user/editUser",
async (userData, {getState,rejectWithValue})=>{
    try{
        const {authToken} = getState().auth;
        const res = await axios.post('/api/users/edit',{userData},{headers: {authorization: authToken}});
        toast.success("Profile updated successfully!", { style: toastStyle });
        return res.data;
    }catch(err){
        console.log(err);
        rejectWithValue(err);
    }
});

const getAllUsers = createAsyncThunk("users/allUsers",
async ()=>{
    try{
        const res = await axios.get('api/users');
        return res.data;
    } catch(err){
        console.log(err);
    }
});

const getUser = async(userId) => {
    try {
        const res = await axios.get(`/api/users/${userId}`);
        return res.data
    } catch(err){
        console.log(err);
    }
}

export {
    editUser,
    getAllUsers,
    getUser,
}