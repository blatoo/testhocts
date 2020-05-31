import axios from 'axios'
import {
	commentsATypes,
	SaveCommentAction,
	FetchCommentAction,
	IComment,
	authATypes,
	authChangeAction,
} from './types'
import { Dispatch } from 'redux'

export function saveComment(comment: string): SaveCommentAction {
	return {
		type: commentsATypes.SAVE_COMMENT,
		payload: comment,
	}
}

export const fetchComments = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get<IComment[]>(
			'https://jsonplaceholder.typicode.com/comments'
		)

		dispatch<FetchCommentAction>({
			type: commentsATypes.FETCH_COMMENTS,
			payload: response,
		})
	}
}

export function authChange(isLoggedIn: boolean): authChangeAction {
	return {
		type: authATypes.CHANGE_AUTH,
		payload: !isLoggedIn,
	}
}
