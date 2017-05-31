import React from 'react';
import { render } from 'react-dom';
import Root from './Component/Container/Root.jsx';
import configureStore from 'Store/index.js';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory,store);

render(
	<Root store={store} history={history} />,
	document.getElementById('root')
	)
