import { call, put } from 'redux-saga/effects'
import * as Api from '../../services/requests'
import { authActionRequestSuccess, authActionRequestFailed } from '../actions'
import { API_REG_PATH } from '../../constants/apiPath'


export function* getRegister(action) {
  try {
    const response = yield call(Api.post, API_REG_PATH, action.payload)    
    yield put(authActionRequestSuccess(response.data))
  }catch (e) {
    yield put(authActionRequestFailed(e))
  }
}