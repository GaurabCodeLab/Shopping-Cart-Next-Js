import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./productSlice";

const store = configureStore({
    reducer: rootReducer
});

export default store;