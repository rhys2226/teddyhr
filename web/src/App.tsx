import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateContext } from './contexts';
import { State } from './libraries/State';
import { viewRoutes } from './routes';

function App() {
	return (
		<StateContext.Provider value={{ state: State.getInstance() }}>
			<Router>
				<Switch>
					{viewRoutes.map((route, index) => (
						<Route {...route} key={index} />
					))}
				</Switch>
			</Router>
		</StateContext.Provider>
	);
}

export default App;
