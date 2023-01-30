import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const baseUri = "https://jsonplaceholder.typicode.com/posts";

export const readPosts = createAsyncThunk("post/readPosts", async () => {
    try {
        const response = await axios.get(`${baseUri}`);
        return response.data;
        // console.log(response)
    } catch (error) {
        console.log(error.response.data);
    }
});

const postSlice=createSlice({
    name:"posts",
    initialState:{
        posts:[],
        loading: null,
        success: null,
        message: null,

    },reducers: {},
    extraReducers: {
        [readPosts.pending]: (state) => {
            state.loading = true;
        },
        [readPosts.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.posts = payload;
            state.success = true;
        },
        [readPosts.rejected]: (state, { payload }) => {
            state.loading = false;
            state.message = payload;
        },
    }
})

export default postSlice.reducer;