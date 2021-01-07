import * as types from './actionType'

export const setRouterItem = (list) => {
  return {
    type: types.LAYOUT_PANES,
    list
  }
}

export const setTheme = (value) => {
  return {
    type: types.LAYOUT_THEME,
    value
  }
}

export const setMenu = (value) => {
  return {
    type: types.LAYOUT_ACTIVE_MENU,
    value
  }
}

export const setCollapsed = (value) => {
  return {
    type: types.LAYOUT_COLLAPSED,
    value
  }
}


export const setChooseColor = (value) => {
  return {
    type: types.LAYOUT_COLOR_PICKER,
    value
  }
}

export const setChooseColorDisplay = (value) => {
  return {
    type: types.LAYOUT_COLOR_PICKER_DISPLAY,
    value
  }
}

export const setChangePasswordVisiable = (value) => {
  return {
    type: types.LAYOUT_PASSWORD_VISIABLE,
    value
  }
}
