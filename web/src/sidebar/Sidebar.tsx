import React from 'react'
import {
    usersNav,
    recruitmentProcess,
    performanceManagement,
    HRDLearningAndDevelopment,
    awardsAndRecognition,
    managenentOfLeaveCard,

} from './Navs'

export default function Sidebar() {




    return (
        <aside className="sidebar-left border-right bg-white shadow" id="leftSidebar" data-simplebar>
            <a href="#" className="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3" data-toggle="toggle">
                <i className="fe fe-x"><span className="sr-only"></span></i>
            </a>
            <nav className="vertnav navbar navbar-light">
                <div className="w-100 mb-4 d-flex p-2">
                    <h4 className="text-white m-0 text-dark d-flex" style={{ alignItems: 'center' }}>
                        <img src="./assets/logos/iscof.png" height="40px" alt="..." />
                        <span style={{ fontWeight: 900, color: '#002598' }} className="h2 mt-3 ml-5">HRMO</span>
                    </h4>
                </div>
                <ul className="navbar-nav flex-fill w-100 mb-2">

                    <p className="text-muted nav-heading mt-4 mb-1">
                        <span>Users</span>
                    </p>
                    {
                        usersNav.map( ( nav: any, index: any ) => (
                            <li className="nav-item w-100">
                                <a className="nav-link" href="widgets.html">
                                    <i className={`fe ${ nav.icon }  fe-16`}></i>
                                    <span className="ml-3 item-text">{nav.title}</span>
                                    {/* <span className="badge badge-pill badge-primary">New</span> */}
                                </a>
                            </li>
                        ) )
                    }
                    <p className="text-muted nav-heading mt-4 mb-1">
                        <span>Recruitement Process</span>
                    </p>
                    {
                        recruitmentProcess.map( ( nav: any, index: any ) => (
                            <li className="nav-item w-100">
                                <a className="nav-link" href="widgets.html">
                                    <i className={`fe ${ nav.icon }  fe-16`}></i>
                                    <span className="ml-3 item-text">{nav.title}</span>
                                    {/* <span className="badge badge-pill badge-primary">New</span> */}
                                </a>
                            </li>
                        ) )
                    }
                    <p className="text-muted nav-heading mt-4 mb-1">
                        <span>Perfromace Management</span>
                    </p>
                    {
                        performanceManagement.map( ( nav: any, index: any ) => (
                            <li className="nav-item w-100">
                                <a className="nav-link" href="widgets.html">
                                    <i className={`fe ${ nav.icon }  fe-16`}></i>
                                    <span className="ml-3 item-text">{nav.title}</span>
                                    {/* <span className="badge badge-pill badge-primary">New</span> */}
                                </a>
                            </li>
                        ) )
                    }
                    <p className="text-muted nav-heading mt-4 mb-1">
                        <span>HRD Learning and Development</span>
                    </p>
                    {
                        HRDLearningAndDevelopment.map( ( nav: any, index: any ) => (
                            <li className="nav-item w-100">
                                <a className="nav-link" href="widgets.html">
                                    <i className={`fe ${ nav.icon }  fe-16`}></i>
                                    <span className="ml-3 item-text">{nav.title}</span>
                                    {/* <span className="badge badge-pill badge-primary">New</span> */}
                                </a>
                            </li>
                        ) )
                    }

                    {
                        awardsAndRecognition.map( ( nav: any, index: any ) => (
                            <li className="nav-item w-100">
                                <a className="nav-link" href="widgets.html">
                                    <i className={`fe ${ nav.icon }  fe-16`}></i>
                                    <span className="ml-3 item-text">{nav.title}</span>
                                    {/* <span className="badge badge-pill badge-primary">New</span> */}
                                </a>
                            </li>
                        ) )
                    }
                    <p className="text-muted nav-heading mt-4 mb-1">
                        <span>Leave Management</span>
                    </p>
                    {
                        managenentOfLeaveCard.map( ( nav: any, index: any ) => (
                            <li className="nav-item w-100">
                                <a className="nav-link" href="widgets.html">
                                    <i className={`fe ${ nav.icon }  fe-16`}></i>
                                    <span className="ml-3 item-text">{nav.title}</span>
                                    {/* <span className="badge badge-pill badge-primary">New</span> */}
                                </a>
                            </li>
                        ) )
                    }






                </ul>
            </nav>
        </aside>
    )
}
