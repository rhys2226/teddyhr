import { RouteProps } from 'react-router';
import Landing from '../views/Main/Landing';
import Home from '../views/Main/Home';

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
