import { configureStore } from "@reduxjs/toolkit";
import focusReducer from "./reducer/focusReducer";

const store = configureStore({
    reducer: {
        focus: focusReducer,
    }
});

export default store;