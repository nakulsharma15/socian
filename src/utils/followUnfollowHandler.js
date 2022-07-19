import axios from "axios";
import {useEffect} from "react";
import {updateUser} from "../Redux/slices/authSlice";
import { updateUserList } from "../Redux/slices/userSlice";

export const handleFollowUnfollow = async (userMetaData, authToken, dispatch)=>{
    try{
        const {type, followUserId} = userMetaData;
        const res = await axios.post(`/api/users/${type}/${followUserId}`,{},{headers: {authorization: authToken}});
        const {user, followUser} = res.data;
        dispatch(updateUser(user));
        dispatch(updateUserList({user,followUser}));
    }catch(err){
        console.log("error aaya")
        console.log(err);
    }
}