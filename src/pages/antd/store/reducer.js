import * as types from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  markdownValue: ''
})

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case types.ANTD_MARKDOWN_VALUE:
      return state.set('markdownValue', actions.value)
    default:
      return state
  }
}