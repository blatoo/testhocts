import React, { useState } from 'react'
import { connect } from 'react-redux'
import { saveComment, fetchComments } from '../actions'
// import { requireAuth } from './requireAuth'
import { requireAuth } from './requireAuth3'
// import requireAuth2 from './requireAuth2'

const CommentBox = (props: any) => {
	const [comment, setComment] = useState('')

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		props.saveComment(comment)
		setComment('')
	}

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setComment(event.target.value)
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h4>Add a Comment</h4>
				<textarea value={comment} onChange={handleChange} />
				<div>
					<button type='submit'>Submit Comment</button>
				</div>
			</form>
			<button className='fetch-comments' onClick={props.fetchComments}>
				Fetch Comments
			</button>
		</div>
	)
}

const connector = connect(null, { saveComment, fetchComments })

export default requireAuth(connector(CommentBox))
