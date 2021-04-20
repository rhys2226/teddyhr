import { RouteProps } from 'react-router';
import Login from './views/Login';

export const routes = {
	HOME: '/',
};

export const viewRoutes: RouteProps[] = [
	{
		path: routes.HOME,
		component: Login,
	},
];
