import React from 'react'
import Applicants from '../../views/Users/applicants/Applicants'
import Content from './Content'
import { Route, Switch } from "react-router";
import { HomeRoutes } from '../../routes/home.routes';

export default function Main() {



    return (
        <div>
            <Content>
                <Switch>
                    {
                        HomeRoutes.map( ( Route: any, index: any ) => (
                            <Route {...Route} key={index} />
                        ) )
                    }
                </Switch>
            </Content>
        </div>
    )
}
