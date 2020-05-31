import { commentsATypes, CommentActionTypes } from '../actions/types'

export default function (state: string[] = [], action: CommentActionTypes) {
	switch (action.type) {
		case commentsATypes.SAVE_COMMENT:
			console.log(action.payload)
			return [...state, action.payload]
		case commentsATypes.FETCH_COMMENTS:
			const comments = action.payload.data.map((comment) => comment.name)
			console.log(action.payload.data[0].name)
			return [...state, ...comments]
		default:
			return state
	}
}
