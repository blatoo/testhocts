import {combineReducers} from 'redux'
import commentsReducer from './comment'
import authReducer from './auth'

export type RootReducerState = {
	comments: string[]
	auth: boolean
}

export default combineReducers<RootReducerState> ({
  comments: commentsReducer,
  auth: authReducer
})