import {} from 'redux-saga';


function* fetchUsers(action) {
    

}

function* usersSaga() {
    yield ("FETCH_USERS", fetchUsers);
}

export default usersSaga;