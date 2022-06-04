import { call, put, takeLatest } from 'redux-saga/effects';
import { getPostsFailure, getPostsSuccess } from '../actions';
import { getPosts } from '../helpers/backend-helper';

function* onGetPosts() {
    console.log(getPosts);
    const result = yield call(getPosts, arguments)
    if(result) {
        yield put(getPostsSuccess(result))
    }
    else {
        yield put(getPostsFailure())
    }

}



function* PostSaga() {
    yield takeLatest('GET_POSTS', onGetPosts)
}

export default PostSaga;