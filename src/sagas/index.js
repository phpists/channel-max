import { all, takeEvery } from 'redux-saga/effects'
import { Types as AuthorizationTypes } from '../store/authorization/actions'
import { Types as ProfileTypes } from '../store/profile/actions'
import LayoutSaga from './../store/layout/saga'

import {
    watchlogin,
    watchRegisterUser,
    watchForgotPassword,
} from './authorization'

import {
    watchGetUserProfile,
    watchChangeUserProfile,
} from './profile'

export function* rootSaga() {
    yield all([
        takeEvery(AuthorizationTypes.LOGIN_REQUEST, watchlogin),
        takeEvery(AuthorizationTypes.REGISTER_USER_REQUEST, watchRegisterUser),
        takeEvery(AuthorizationTypes.FORGOT_PASSWORD_REQUEST, watchForgotPassword),
        
        takeEvery(ProfileTypes.GET_USER_PROFILE_REQUEST, watchGetUserProfile),
        takeEvery(ProfileTypes.CHANGE_USER_PROFILE_REQUEST, watchChangeUserProfile),
        
        LayoutSaga(),
    ])
}