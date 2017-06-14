import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Index from 'Component/Container/Index.jsx';
import Home from 'Component/Container/Home.jsx';
import Heroes from 'Component/Container/Heroes.jsx';
import HeroInfo from 'Component/Container/HeroInfo.jsx';

const route = (
	<Route path="/" component={Index}>
		<IndexRoute component={Home}/>
		<Route path="heroes" component={Heroes}/>
		<Route path="heroes/:heroId" component={HeroInfo}/>
	</Route>
)

export default route;
