import {createSlice} from "@reduxjs/toolkit";
import { loginUser } from "../../utils/handleAuth";

const initialState = {
    authToken: "" || JSON.parse(localStorage.getItem("authToken")),
    authStatus: "idle",
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.authToken="";
            localStorage.removeItem("authToken");
            localStorage.removeItem("userToken");
        },   

    },
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.authStatus = 'loading'
        },
        [loginUser.fulfilled]: (state, action) => {
            state.authToken = action.payload.encodedToken;
            state.authStatus = 'success'
            localStorage.setItem("authToken", JSON.stringify(action.payload.encodedToken));
            localStorage.setItem("userData", JSON.stringify(action.payload.foundUser));
        },
        [loginUser.rejected]: (state) => {
            console.log("Error Occured")
            state.authStatus = 'failed'
        },
    }
})

export const {logout} = authSlice.actions;
export const authReducer = authSlice.reducer;