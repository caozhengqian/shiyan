
// 合并所有reducer 并且返回
import { combineReducers } from 'redux'
import { counter } from './redux/gun'


export default combineReducers({counter})

