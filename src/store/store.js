import { applyMiddleware, legacy_createStore } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import rootReducer from '../reducers/rootReducer';
import rootSaga from './sagas';


//create saga middleware
const sagaMiddleware = createSagaMiddleware();

//mount it on the store
const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware));


//then run saga
sagaMiddleware.run(rootSaga);

export default store;