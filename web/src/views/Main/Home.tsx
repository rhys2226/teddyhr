import React from 'react';
import { Route } from 'react-router';
import { RouteProps } from 'react-router-dom';
import Content from '../../components/main/Content';
import Forms from '../../components/Modals/Forms';
import HomeNav from '../../headers/HomeNav';
import { useURL } from '../../hooks';
import Sidebar from '../../sidebar/Sidebar';
import Settings from '../Settings/Settings';
import Applicants from '../Users/Applicants/Applicants';

export default function Home() {
	const url = useURL();

	const HomeRoutes: RouteProps[] = [
		{
			path: url('/'),
			component: Applicants,
			exact: true,
		},
		{
			path: url('/recruitement'),
			component: Applicants,
		},
		{
			path: url('/performance'),
			component: Applicants,
		},
		{
			path: url('/seminars'),
			component: Applicants,
		},
		{
			path: url('/leave'),
			component: Applicants,
		},
		{
			path: url('/awards'),
			component: Applicants,
		},
		{
			path: url('/settings'),
			component: Settings,
		},
	];

	return (
		<>
			<HomeNav />
			<Sidebar />
			<Content>
				{HomeRoutes.map((route, index) => (
					<Route {...route} key={index} />
				))}
			</Content>
			<Forms />
		</>
	);
}
