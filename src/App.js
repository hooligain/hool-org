import React from "react";
import Homepage from './components/HomePage';
import ComingSoon from "./components/comingSoon";
import {
	Switch,
	Route,
	BrowserRouter as Router,
	HashRouter
} from "react-router-dom";

const App = () => {
	return (
		<>
			<Router>
				< Switch >
					<Route path="/whitepaper">
						<ComingSoon />
					</Route>
					<Route path="/testnest">
						<ComingSoon />
					</Route>
					<Route path="/">
						<Homepage />
					</Route>
					<HashRouter> <Route path="/" component={Homepage} /></HashRouter>

				</Switch >
			</Router>
		</>
	)
}

export default App;
