import { useURL } from "../hooks"
import Settings from "../views/Settings/Settings"
import Applicants from "../views/Users/Applicants/Applicants"
import { RouteProps } from 'react-router';


const url = useURL()

export const HomeRoutes: RouteProps[]  = [
    {
        path: url( '/' ),
        component:Applicants,
    },
    {
        path: url( '/recruitement' ),
        component:Applicants,
    },
    {
        path: url( '/performance' ),
        component:Applicants,
    },
    {
        path: url( '/seminars' ),
        component:Applicants,
    },
    {
        path: url( '/leave' ),
        component:Applicants,
    },
    {
        path: url( '/awards' ),
        component:Applicants,
    },
     {
        path: url( '/settings' ),
        component:Settings,
    },
   
]