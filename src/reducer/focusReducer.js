import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    focus: false,
    error: undefined,
    isLoading: false
}
const focusreducer = createSlice({
    name: "focus",
    initialState,
    reducers: {
        setFocus: (state, action) =>{
            state.focus = action.payload
        }
    }
})

export const { setFocus } = focusreducer.actions;

export default focusreducer.reducer;