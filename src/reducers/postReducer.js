const initialState = {
    posts: [],
    isLoading: false,
    error: {
        message: ''
    }
}


export const postsReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'GET_POSTS': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'GET_POSTS_SUCCESS': {
            return {
                ...state,
                isLoading: false,
                posts: action.payload
            }
        }

        case 'GET_POSTS_FAILURE': {
            return {
                ...state,
                isLoading: false,
                error: {
                    message: 'error'
                }
            }
        }
        default: {
            return {
                ...state,
                isLoading: true
            }
        }
    }
}