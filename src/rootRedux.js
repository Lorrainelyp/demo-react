import { combineReducers } from 'redux';

//全局reducer
import isLogin from './indexRedux.js'
//子reducer

//合并reducer
var rootRedux = combineReducers({
  isLogin
})

export default rootRedux