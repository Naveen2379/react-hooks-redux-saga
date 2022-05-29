import { combineReducers } from "redux";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
    usersInfo: usersReducer
});

export default rootReducer;