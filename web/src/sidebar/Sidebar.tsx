import React from 'react'
import {
    usersNav,
    recruitmentProcess,
    performanceManagement,
    HRDLearningAndDevelopment,
    awardsAndRecognition,
    managenentOfLeaveCard,
    Forms,
    employemtStatus

} from './Navs'

export default function Sidebar() {

    return (
        <aside className="sidebar-left border-right bg-white shadow" id="leftSidebar" data-simplebar>
            <a className="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3" data-toggle="toggle">
                <i className="fe fe-x"><span className="sr-only"></span></i>
            </a>
            <nav className="vertnav navbar navbar-light">

                <div className="w-100 mb-4 d-flex">
                    <a className="navbar-brand mx-auto mt-2 flex-fill text-center" >
                        <img src="./assets/logos/iscof.png" height="30px" alt="..." />
                    </a>
                </div>


                <ul className="navbar-nav flex-fill w-100 mb-2">
                    <li className="nav-item dropdown">
                        <a href="#dashboard" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
                            <i className="fe fe-home fe-16"></i>
                            <span className="ml-3 item-text">Dashboard</span><span className="sr-only">(current)</span>
                        </a>
                        <ul className="collapse list-unstyled pl-4 w-100" id="dashboard">
                            <li className="nav-item active">
                                <a className="nav-link pl-3" ><span className="ml-1 item-text">Default</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-3"><span className="ml-1 item-text">Analytics</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-3"><span className="ml-1 item-text">E-commerce</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-3"><span className="ml-1 item-text">Saas Dashboard</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-3" ><span className="ml-1 item-text">Systems</span></a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul style={{ marginTop: '-1rem' }} className="navbar-nav flex-fill w-100 mb-0">
                    <p className="text-muted   nav-heading mt-4 mb-1">
                        <span>Users</span>
                    </p>
                    {
                        usersNav.map( ( nav: any, index: any ) => (
                            <li className="nav-item w-100">
                                <a role="button" className="nav-link" >
                                    <i className={`fe ${ nav.icon }  fe-16`}></i>
                                    <span className="ml-3 item-text">{nav.title}</span>
                                    {/* <span className="badge badge-pill badge-primary">New</span> */}
                                </a>
                            </li>
                        ) )
                    }
                    <p className="text-muted nav-heading mt-4 mb-1">
                        <span>Recruitement</span>
                    </p>
                    {
                        recruitmentProcess.map( ( nav: any, index: any ) => (
                            <li className="nav-item w-100">
                                <a role="button" className="nav-link" >
                                    <i className={`fe ${ nav.icon }  fe-16`}></i>
                                    <span className="ml-3 item-text">{nav.title}</span>
                                    {/* <span className="badge badge-pill badge-primary">New</span> */}
                                </a>
                            </li>
                        ) )
                    }
                    <p className="text-muted nav-heading mt-4 mb-1">
                        <span>Perfromace</span>
                    </p>
                    {
                        performanceManagement.map( ( nav: any, index: any ) => (
                            <li className="nav-item w-100">
                                <a role="button" className="nav-link">
                                    <i className={`fe ${ nav.icon }  fe-16`}></i>
                                    <span className="ml-3 item-text">{nav.title}</span>
                                    {/* <span className="badge badge-pill badge-primary">New</span> */}
                                </a>
                            </li>
                        ) )
                    }
                    <p className="text-muted nav-heading mt-4 mb-1">
                        <span>HRD</span>
                    </p>
                    {
                        HRDLearningAndDevelopment.map( ( nav: any, index: any ) => (
                            <li className="nav-item w-100">
                                <a role="button" className="nav-link">
                                    <i className={`fe ${ nav.icon }  fe-16`}></i>
                                    <span className="ml-3 item-text">{nav.title}</span>
                                    {/* <span className="badge badge-pill badge-primary">New</span> */}
                                </a>
                            </li>
                        ) )
                    }
                    <p className="text-muted nav-heading mt-4 mb-1">
                        <span>Leave</span>
                    </p>
                    {
                        managenentOfLeaveCard.map( ( nav: any, index: any ) => (
                            <li className="nav-item w-100">
                                <a role="button" className="nav-link" >
                                    <i className={`fe ${ nav.icon }  fe-16`}></i>
                                    <span className="ml-3 item-text">{nav.title}</span>
                                    {/* <span className="badge badge-pill badge-primary">New</span> */}
                                </a>
                            </li>
                        ) )
                    }
                    <br />
                    <br />
                    {
                        awardsAndRecognition.map( ( nav: any, index: any ) => (
                            <li className="nav-item w-100">
                                <a className="nav-link">
                                    <i className={`fe ${ nav.icon }  fe-16`}></i>
                                    <span className="ml-3 item-text">{nav.title}</span>
                                    {/* <span className="badge badge-pill badge-primary">New</span> */}
                                </a>
                            </li>
                        ) )
                    }
                    <br />
                    <br />
                    {
                        employemtStatus.map( ( nav: any, index: any ) => (
                            <li className="nav-item w-100">
                                <a className="nav-link">
                                    <i className={`fe ${ nav.icon }  fe-16`}></i>
                                    <span className="ml-3 item-text">{nav.title}</span>
                                    {/* <span className="badge badge-pill badge-primary">New</span> */}
                                </a>
                            </li>
                        ) )
                    }

                    {
                        Forms.map( ( nav: any, index: any ) => (
                            <li className="nav-item w-100">
                                <a className="nav-link">
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
