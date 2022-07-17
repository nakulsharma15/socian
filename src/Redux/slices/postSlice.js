import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "../../utils/postHandler";

const initialState = {
    postList: [],
    singlePost: null,
    postStatus: "idle",
};

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.postList = action.payload;
        },
    },
    extraReducers: {
        [getAllPosts.pending]: (state) => {
            state.postStatus = "loading";
        },

        [getAllPosts.fulfilled]: (state, action) => {
            const { posts } = action.payload;
            state.postList = posts;
            state.postStatus = "success";
        },

        [getAllPosts.rejected]: (state) => {
            state.postStatus = "failed";
        }
    }
});

export const postReducer = postSlice.reducer;
