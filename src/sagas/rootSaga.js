import { all, fork } from "redux-saga/effects";
import PostSaga from "./PostSaga";

function* rootSaga() {
    yield all([fork(PostSaga)])
}


export default rootSaga;