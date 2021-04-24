import Content from './Content'
import { Route, Switch } from "react-router";
import { HomeRoutes } from '../../routes/home.routes';

export default function Main() {
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
