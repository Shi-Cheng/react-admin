import * as types from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  detailVisibleStatus: false,
  userAddVisibleStatus: false,
  userInfo: {},
  // 定义查询参数
  query: {
    pageNumber: 1,
    pageSize: 10
  }
})

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case types.SYSTEM_DETAIL_STATUS:
      return state.set('detailVisibleStatus', actions.status)
    case types.SYSTEM_ADD_USER:
      return state.set('userAddVisibleStatus', actions.status)
    case types.HANDLE_DETAIL:
      return state.merge({
        detailVisibleStatus: actions.data.status,
        userInfo: actions.data.userInfo
      })
    case types.HANDLE_CHANGE_PAGINATION:
      return state.merge({
        query: {
          pageNumber: actions.data.pageNumber,
          pageSize: actions.data.pageSize
        }
      })
    default:
      return state
  }
}