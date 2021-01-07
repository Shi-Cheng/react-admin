import { combineReducers } from 'redux-immutable'
import { reducer as layoutReducer } from '../components/layout/store'
import { reducer as loginReducer } from '../pages/login/store'
import { reducer as antdReducer } from '../pages/antd/store'
import { reducer as systemReducer } from '../pages/system/store'

const reducer = combineReducers({
  layout: layoutReducer,
  login: loginReducer,
  antd: antdReducer,
  system: systemReducer
})

export default reducer