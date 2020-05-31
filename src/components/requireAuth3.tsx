import React from 'react'
import { useSelector } from 'react-redux'
import { RootReducerState } from '../reducers'
import { RouteComponentProps } from 'react-router-dom'

interface IProps extends RouteComponentProps {}

export const requireAuth = (ChildComponent: React.FC<IProps>) => {
	return (props: IProps) => {
		const auth = useSelector<RootReducerState>((state) => state.auth)

		if (!auth) {
			props.history.push('/')
		}

		return <ChildComponent {...props} />
	}
}
