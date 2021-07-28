/** React */
import React from 'react';
import {Switch, Route, BrowserRouter as Router, HashRouter} from 'react-router-dom';

/** App */
import Homepage from './components/HomePage';
import ComingSoon from './components/ComingSoon';
import Whitepaper from './components/Whitepaper';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path='/resources'>
					<Whitepaper />
				</Route>
				<Route path='/testnest'>
					<ComingSoon />
				</Route>
				<Route path='/'>
					<Homepage />
				</Route>
				<HashRouter>
					<Route path='/' component={Homepage} />
				</HashRouter>
			</Switch>
		</Router>
	);
};

export default App;
