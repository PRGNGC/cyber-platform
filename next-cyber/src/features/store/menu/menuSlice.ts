import { createSlice } from "@reduxjs/toolkit";

interface initialStateType{
    isOpen: boolean;
}

const initialState = {
    isOpen: false
}

export const menu = createSlice({
    name: "menu",
    initialState,
    reducers: {
        close: (state) => {
            state.isOpen = false;
        },
        open: (state) => {
            state.isOpen = true;
        },
        change: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
})

export const { open, close, change } = menu.actions

export default menu.reducer