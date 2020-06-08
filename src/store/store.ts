import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import { usersReducer } from './reducers/usersReducer'

const sagaMiddleWare = createSagaMiddleWare();

export const store = createStore(
    usersReducer,
    applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(rootSaga);