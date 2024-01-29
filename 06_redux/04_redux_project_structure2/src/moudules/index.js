import { useReducer } from "react";
import { combineReducers } from "redux";
import menuReducer from "./MenuModule";

const rootReducer = combineReducers(
    useReducer,
    menuReducer
)

export default rootReducer;