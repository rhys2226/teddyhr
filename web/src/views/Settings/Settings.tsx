import React from 'react'
import Overview from './Overview/Overview'
import Profile from './Profile/Profile'
import { RouteProps } from 'react-router-dom';
import { Route } from 'react-router';
import { useURL } from '../../hooks';
import { settingsNav } from './SettingsNav'
import { useHistory } from "react-router-dom";
import PDSSettings from './PDS/PDSSettings';
import ICPRSettings from './ICPR/ICPRSettings';
import ServiceRecordSettings from './Service-record/ServiceRecordSettings';
import LeaveCardSettings from './Leave-card/LeaveCardSettings';
import * as base from '../../constants/base'

export default function Settings() {
    const url = useURL();
    const history = useHistory()


    const SettingRoutes: RouteProps[] = [
        {
            path: url( '/:id' ),
            component: Overview,
            exact: true,
        },
        {
            path: url( 'settings/:id' ),
            component: Overview,
        },
        {
            path: url( '/profile' ),
            component: Profile,
        },
        {
            path: url( '/personal-data-sheet' ),
            component: PDSSettings,
        },
        {
            path: url( '/ipcr' ),
            component: ICPRSettings,
        },
        {
            path: url( '/service-record' ),
            component: ServiceRecordSettings,
        },
        {
            path: url( '/leave-card' ),
            component: LeaveCardSettings,
        },
    ]

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8 card p-5">
                <h2 className="h3 mb-4 page-title">Account</h2>
                <div className="my-4">
                    <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                        {
                            settingsNav.map( ( nav, index ) => (
                                <li className="nav-item">
                                    <a role="button"
                                        onClick={() => {
                                            history.push( nav.route )
                                        }}
                                        className={`nav-link ${ base.route + nav.route === window.location.href ? 'active' : '' }`}>{nav.title}
                                    </a>
                                </li>
                            ) )
                        }
                    </ul>
                    {SettingRoutes.map( ( route, index ) => (
                        <Route {...route} key={index} />
                    ) )}
                </div>
            </div>
        </div>
    )
}
