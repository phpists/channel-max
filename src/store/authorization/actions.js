
export const Types = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  
  REGISTER_USER_REQUEST: 'REGISTER_USER_REQUEST',
  REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS',
  
  FORGOT_PASSWORD_REQUEST: 'FORGOT_PASSWORD_REQUEST',
  FORGOT_PASSWORD_SUCCESS: 'FORGOT_PASSWORD_SUCCESS',
}

const loginRequest = (payload) => ({
  type: Types.LOGIN_REQUEST,
  payload
})

const loginSucces = (payload) => ({
  type: Types.LOGIN_SUCCESS,
  payload
})

const registerUserRequest = (payload) => ({
  type: Types.REGISTER_USER_REQUEST,
  payload
})

const registerUserSucces = (payload) => ({
  type: Types.REGISTER_USER_SUCCESS,
  payload
})

const forgotPasswordRequest = (payload) => ({
  type: Types.FORGOT_PASSWORD_REQUEST,
  payload
})

const forgotPasswordSuccess = (payload) => ({
  type: Types.FORGOT_PASSWORD_SUCCESS,
  payload
})

export default {
  loginRequest,
  loginSucces,
  registerUserRequest,
  registerUserSucces,
  forgotPasswordRequest,
  forgotPasswordSuccess,
}