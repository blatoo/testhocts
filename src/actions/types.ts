import { AxiosResponse } from 'axios'

export enum commentsATypes {
	SAVE_COMMENT = 'save_comment',
	FETCH_COMMENTS = 'fetch_comments',
}

export enum authATypes {
	CHANGE_AUTH = 'change_auth',
}

export interface IComment {
	id: string
	postId: string
	name: string
	email: string
	body: string
}

export interface SaveCommentAction {
	type: commentsATypes.SAVE_COMMENT
	payload: string
}

export interface FetchCommentAction {
	type: commentsATypes.FETCH_COMMENTS
	payload: AxiosResponse<IComment[]>
}

export type CommentActionTypes = SaveCommentAction | FetchCommentAction

export interface authChangeAction {
	type: authATypes.CHANGE_AUTH
	payload: boolean
}

export type authActionTypes = authChangeAction
