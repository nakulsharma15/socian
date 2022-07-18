import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isEditProfileModalOpen: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openEditProfileModal: (state) => {
            state.isEditProfileModalOpen = true;
        },
        closeEditProfileModal: (state) => {
            state.isEditProfileModalOpen = false;
        },
    },
});

export const { openEditProfileModal, closeEditProfileModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;