import { all, takeEvery } from 'redux-saga/effects'
import { Types as AuthorizationTypes } from '../store/authorization/actions'

import {
    watchlogin,
    watchRegisterUser,
    watchForgotPassword,
} from './authorization'

export function* rootSaga() {
    yield all([
        takeEvery(AuthorizationTypes.LOGIN_REQUEST, watchlogin),
        takeEvery(AuthorizationTypes.REGISTER_USER_REQUEST, watchRegisterUser),
        takeEvery(AuthorizationTypes.FORGOT_PASSWORD_REQUEST, watchForgotPassword),
    ])
}