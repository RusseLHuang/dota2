import React, {PropTypes} from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from '../../routes.js';

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
