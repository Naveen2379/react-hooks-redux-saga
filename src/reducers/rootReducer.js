import { combineReducers } from "redux";
import { postsReducer } from "./postReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
    postsInfo: postsReducer,
    usersInfo: usersReducer
});

export default rootReducer;