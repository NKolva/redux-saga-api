import { call, put } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes';
import { getUsers } from '../../api/api';

export default function* rootSaga() {
    const users = yield call(getUsers);
    yield put({ type: actionTypes.FETCH_USERS_DATA, payload: users});
}