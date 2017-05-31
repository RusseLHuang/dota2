import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import injectTapEventPlugin from 'react-tap-event-plugin';
import PropTypes from 'prop-types';
import routes from 'routes.js';

injectTapEventPlugin();

export default function Root({store, history}) {
	return (
		<Provider store={store}>
			<div>
				<Router history={history} routes={routes}/>
			</div>
		</Provider>
		)
}

Root.propTypes = {
	store : PropTypes.object.isRequired,
	history : PropTypes.object.isRequired
}
