import {configureStore, combineReducers} from "@reduxjs/toolkit";
import ToolkitSlice from "./toolkitSlice";

const rootReducer=combineReducers({
    counter:ToolkitSlice.reducer
})

export const store=configureStore({
    reducer:rootReducer
})
export default store