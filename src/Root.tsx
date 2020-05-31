import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const composeEnhancers =
	(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

interface IProps {
	initialState?: any
	children: JSX.Element
}

export default ({ children, initialState = {} }: IProps) => {
	const store = createStore(
		reducers,
		initialState,
		composeEnhancers(applyMiddleware(thunk))
	)

	return <Provider store={store}>{children}</Provider>
}
