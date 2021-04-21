import { RouteProps } from 'react-router';
import Login from './views/Login';
import Landing from './views/Landing';

export const routes = {
    Landing: '/',
};



export const viewRoutes: RouteProps[] = [
    {
        path: routes.Landing,
        component: Landing,
    },
];
