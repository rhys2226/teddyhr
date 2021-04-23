import { RouteProps } from 'react-router';
import Landing from './views/Landing';
import Home from './views/Home';

export const viewRoutes: RouteProps[] = [
    {
        path: '/',
        component: Landing,
        exact: true
    },
    {
        path: '/home',
        component: Home,
    },

];
