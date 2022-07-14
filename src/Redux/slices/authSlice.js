import {createSlice} from "@reduxjs/toolkit";

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
})

export const {logout} = authSlice.actions;
export const authReducer = authSlice.reducer;