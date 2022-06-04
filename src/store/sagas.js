import { all, fork } from "redux-saga/effects";
import PostSaga from "../sagas/PostSaga";

export default function* rootSaga() {
    yield all([fork(PostSaga)])
}