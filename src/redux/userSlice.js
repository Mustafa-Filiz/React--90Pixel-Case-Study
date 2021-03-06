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
    reducers: {
        userLogin: (state, action) => {
            state.currentUser = action.payload;
        },
        userLogout: (state) => {
            state.currentUser = {}
        }
    },
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

export const usersSelector = (state) => state.users.users;
export const currentUserSelector = (state) => state.users.currentUser;

export const { userLogin, userLogout } = userSlice.actions;

export default userSlice.reducer;
