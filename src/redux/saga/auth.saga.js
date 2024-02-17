import { call, put } from 'redux-saga/effects'
import * as Api from '../../services/requests' 
import { AUTH_ACTION_REQUEST_FAILED } from '../../constants/auth.actionTypes'
import { authActionRequestSuccess } from '../actions'



export function* getAuth(action) {
  try {
    const response = yield call(Api.getToken, action.payload)
    yield put(authActionRequestSuccess(response.data))
  } catch (e) {
    yield put({ type: AUTH_ACTION_REQUEST_FAILED, error: e })
  }
}

