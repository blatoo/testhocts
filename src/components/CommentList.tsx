import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { connect, ConnectedProps } from 'react-redux'
import { RootReducerState } from '../reducers'

interface Props extends ConnectedProps<typeof connector> {}

const CommentList = (props: Props) => {
	const renderList = () => {
		return props.comments.map((comment) => <li key={uuidv4()}>{comment}</li>)
	}

	return (
		<div>
			<h4>Comment List</h4>
			<ul>{renderList()}</ul>
		</div>
	)
}

const mapStateToProps = (state: RootReducerState) => {
	return { comments: state.comments }
}

const connector = connect(mapStateToProps)

export default connector(CommentList)
