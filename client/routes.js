import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Index from 'Component/Container/Index.jsx';
import Home from 'Component/Container/Home.jsx';

const route = (
	<Route path="/" component={Index}>
		<IndexRoute component={Home}/>
	</Route>
)

export default route;
