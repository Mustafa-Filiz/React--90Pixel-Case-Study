import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsersAsync = createAsyncThunk(
    'get/getUsersAsync',
    async () => {
        const res = await axios.get(process.env.REACT_APP_USERS_API_URL);
        return res.data;
    }
);

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        currentUser: {},
        isLoading: false,
        error: '',
    },
    reducers: {},
    extraReducers: {
        [fetchUsersAsync.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchUsersAsync.fulfilled]: (state, action) => {
            state.users = action.payload;
            state.isLoading = false;
        },
        [fetchUsersAsync.rejected]: (state, action) => {
            state.error = action.error.message;
            state.isLoading = false;
        },
    },
});

export default userSlice.reducer;
