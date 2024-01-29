import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./moudules"
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk, logger))
)

export default store;