import Content from './Content'
import { Route, Switch } from "react-router";
import { RouteProps } from 'react-router';
import { useURL } from '../../hooks';
import Applicants from '../../views/Users/Applicants/Applicants';
import Settings from '../../views/Settings/Settings';

export default function Main() {

    const url = useURL()

    const HomeRoutes: RouteProps[] = [
        {
            path: url( '/' ),
            component: Applicants,
            exact: true
        },
        {
            path: url( '/recruitement' ),
            component: Applicants,
        },
        {
            path: url( '/performance' ),
            component: Applicants,
        },
        {
            path: url( '/seminars' ),
            component: Applicants,
        },
        {
            path: url( '/leave' ),
            component: Applicants,
        },
        {
            path: url( '/awards' ),
            component: Applicants,
        },
        {
            path: url( '/settings' ),
            component: Settings,
        },
    ]

    return (
        <Content>
            <Switch>
                {
                    HomeRoutes.map( ( route: any, index: any ) => (
                        <Route {...route} key={index} />
                    ) )
                }
            </Switch>
        </Content>
    )
}
