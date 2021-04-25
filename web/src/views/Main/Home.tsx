import React from 'react';
import { Route } from 'react-router';
import { RouteProps } from 'react-router-dom';
import Content from '../../components/Main/Content';
import Forms from '../../components/Modals/Forms';
import HomeNav from '../../headers/HomeNav';
import { useURL } from '../../hooks';
import Sidebar from '../../sidebar/Sidebar';
import AwardsAndRecognition from '../Awards&Recognition/AwardsAndRecognition';
import UpcomingSeminars from '../HRD/Upcomming-seminars/UpcomingSeminars';
import PerformanceMgt from '../Performance/Performace-mgt/PerformanceMgt';
import AddVancancy from '../Recruitement/Add-vacancy/AddVancancy';
import Settings from '../Settings/Settings';
import AddEmployee from '../Users/Add-Employee/AddEmployee';
import Applicants from '../Users/Applicants/Applicants';
import Employees from '../Users/Employees/Employees';

export default function Home() {
    const url = useURL();

    const HomeRoutes: RouteProps[] = [
        {
            path: url( '/' ),
            component: PerformanceMgt,
            exact: true,
        },
        {
            path: url( '/home' ),
            component: PerformanceMgt,
            exact: true,
        },

        {
            path: url( '/applicants' ),
            component: Applicants,
            exact: true,
        },
        {
            path: url( '/employees' ),
            component: Employees,
            exact: true,
        },
        {
            path: url( '/employees-add' ),
            component: AddEmployee,
        },


        {
            path: url( '/vancancy-add' ),
            component: AddVancancy,
        }, {
            path: url( '/vacancies' ),
            component: Applicants,
        },

        {
            path: url( '/seminars' ),
            component: UpcomingSeminars,
        },


        {
            path: url( '/leave' ),
            component: Applicants,
        },
        {
            path: url( '/awards' ),
            component: AwardsAndRecognition,
        },
        {
            path: url( '/settings' ),
            component: Settings,
        },
    ];



    return (
        <>
            <HomeNav />
            <Sidebar />
            <Content>
                {HomeRoutes.map( ( route, index ) => (
                    <Route {...route} key={index} />
                ) )}
            </Content>
            <Forms />
        </>
    );
}
