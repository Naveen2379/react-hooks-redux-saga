import { applyMiddleware, legacy_createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import usersSaga from '../sagas/usersSaga';


//create saga middleware
const sagaMiddleware = createSagaMiddleware();


//mount it on the store
const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware));


//then run saga
sagaMiddleware.run(usersSaga);

export default store;