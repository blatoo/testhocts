import React, { useEffect } from 'react'
import { connect } from 'react-redux'

interface IProps {
	history: {
		push: Function
	}
	auth: boolean
}
export const requireAuth = (ChildComponent: React.FC<IProps>) => {
	const ComposedComponent = (props: IProps) => {
		useEffect(() => {
			if (!props.auth) {
				props.history.push('/')
			}
		}, [props.auth, props.history])

		return <ChildComponent {...props} />
	}

	function mapStateToProps(state: { auth: boolean }) {
		return { auth: state.auth }
	}

	const connector = connect(mapStateToProps)

	return connector(ComposedComponent)
}
