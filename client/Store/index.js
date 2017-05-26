import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import reducers from '../Reducer';

export default function configureStore() {
	const store = createStore(
		reducers,
		compose(
			applyMiddleware(thunkMiddleware,routerMiddleware(browserHistory))
			)
		)
	return store;
}