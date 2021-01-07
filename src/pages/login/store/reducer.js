import * as types from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  userInfo: {},
  clientHeight: document.documentElement.clientHeight || document.body.clientHeight,
})

const setUserInfo = (state, action) => {
  return state.merge({
    userInfo: action.data
  })
}

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case types.USER_USERINFO:
      return setUserInfo(state, actions)
    case types.CLIENT_HEIGHT:
      return state.set('clientHeight', actions.data)
    default:
      return state
  }
}