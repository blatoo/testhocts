import { authActionTypes, authATypes } from '../actions/types'

export default function (state: boolean = false, action: authActionTypes) {
	switch (action.type) {
		case authATypes.CHANGE_AUTH:
			return action.payload
		default:
			return state
	}
}
