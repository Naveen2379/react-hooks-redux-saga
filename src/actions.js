export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const RECEIVE_API_DATA = 'RECEIVE_API_DATA';

export const requestAPIData = () => { type: REQUEST_API_DATA }
export const receiveAPIData = (data) => {
    type: RECEIVE_API_DATA,
        data
}

export const getPosts = () => {
    return {
        type: 'GET_POSTS'
    }
}

export const getPostsSuccess = (posts) => {
    return {
        type: 'GET_POSTS_SUCCESS',
        payload: posts
    }
}

export const getPostsFailure = (err) => {
    return {
        type: 'GET_POSTS_FAILURE',
        payload: err
    }
}