
import {takeLatest , takeEvery} from 'redux-saga/effects'
import {actionTypes as usersActions} from '../Features/Users';

import tryUsersList from './Users/userList'
import tryUserSearch from './Users/userSearch'

export default function* rootSaga() {
    yield takeLatest(usersActions.LIST_TRY, tryUsersList);

    yield takeLatest(usersActions.SEARCH_TRY, tryUserSearch);

}