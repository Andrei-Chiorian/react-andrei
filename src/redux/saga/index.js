import { takeEvery } from 'redux-saga/effects'
import { AUTH_ACTION_REQUEST_STARTED } from '../../constants/auth.actionTypes'
import { getAuth } from './auth.saga';
import { getRegister } from './register.saga';
import { REGISTER_ACTION_REQUEST_STARTED } from '../../constants/register.actionTypes';


function* rootSaga() {
  yield takeEvery(AUTH_ACTION_REQUEST_STARTED, getAuth);
  yield takeEvery(REGISTER_ACTION_REQUEST_STARTED, getRegister);
}


export default rootSaga;