import * as types from './actionType'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  panes: [],
  collapsed: false,
  activeMenu: '',  //网站活动的菜单
  theme: localStorage.getItem('theme') || 'dark',   //侧边栏主题
  displayColorPicker: false,
  color: '#13C2C2',
  passwordVisiable: false,
  infoVisiable: false
})

const routerSet = (state, action) => {
  return state.merge({
    panes: action.list
  })
}

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case types.LAYOUT_PANES:
      return routerSet(state, actions)
    case types.LAYOUT_COLLAPSED:
      return state.set('collapsed', actions.value)
    case types.LAYOUT_THEME:
      return state.set('theme', actions.value)
    case types.LAYOUT_ACTIVE_MENU:
      return state.set('activeMenu', actions.value)
    case types.LAYOUT_COLOR_PICKER:
      return state.set('color', actions.value)
    case types.LAYOUT_COLOR_PICKER_DISPLAY:
      return state.set('displayColorPicker', !actions.value)
    case types.LAYOUT_PASSWORD_VISIABLE:
      return state.set('passwordVisiable', actions.value)
    case types.LAYOUT_INFO_VISIABLE:
      return state.set('infoVisiable', actions.value)
    default:
      return state
  }
}