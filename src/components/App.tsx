import React from 'react'
import { Route, Link } from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux'
import CommentBox from './CommentBox'
import CommentList from './CommentList'
import { authChange } from '../actions'

type Props = ConnectedProps<typeof connector>

const App = (props: Props) => {
	const authChangeHandler = () => {
		props.authChange(props.auth)
	}
	const renderButton = () => {
		return (
			<button onClick={authChangeHandler}>
				{props.auth ? 'Logout' : 'Login'}
			</button>
		)
	}

	const renderHeader = () => {
		return (
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/post'>Post A Comment</Link>
				</li>
				<li>{renderButton()}</li>
			</ul>
		)
	}

	return (
		<div>
			{renderHeader()}
			<Route path='/post' component={CommentBox} />
			<Route path='/' component={CommentList} />
		</div>
	)
}

const mapStateToProps = (state: { auth: boolean }) => {
	return {
		auth: state.auth,
	}
}

const connector = connect(mapStateToProps, { authChange })
export default connector(App)
