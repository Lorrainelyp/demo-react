import { combineReducers } from 'redux';

//全局reducer
import isLogin from './indexRedux.js'

//子reducer
import NewsRedux from './page/news/NewsRedux.js'
import HomeRedux from './page/home/HomeRedux.js'
import AboutRedux from './page/about/AboutRedux.js'
import MyRedux from './page/my/MyRedux.js'

//合并reducer
var rootRedux = combineReducers({
  isLogin,
  NewsRedux,
  HomeRedux,
  AboutRedux,
  MyRedux
})

export default rootRedux