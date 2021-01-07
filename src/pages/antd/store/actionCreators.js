import * as types from './actionTypes'

export const setMarkdownValue = (value) => {
  return {
    type: types.ANTD_MARKDOWN_VALUE,
    value
  }
}
