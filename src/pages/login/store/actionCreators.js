import * as types from './actionTypes'

export const setUserInfo = (data) => {
  return {
    type: types.USER_USERINFO,
    data
  }
}

export const setClientHeight = (data) => {
  return {
    type: types.CLIENT_HEIGHT,
    data
  }
}