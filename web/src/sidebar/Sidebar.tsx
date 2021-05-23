import React, { useState } from 'react'
import {
    usersNav,
    recruitmentProcess,
    performanceManagement,
    HRDLearningAndDevelopment,
    awardsAndRecognition,
    managenentOfLeaveCard,
    Forms,
    employemtStatus,
    supervisions,
    asignatories
} from './Navs'
import { useHistory } from "react-router-dom";
import * as base from './../constants/base'

export default function Sidebar() {


    const history = useHistory()

    return (
        <aside className="sidebar-left border-right bg-white shadow" id="leftSidebar" data-simplebar>
            <a className="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3" data-toggle="toggle">
                <i className="fe fe-x"><span className="sr-only"></span></i>
            </a>
            <nav className="vertnav navbar navbar-light">

                <div className="w-100 mb-4 d-flex">
                    <a className="navbar-brand mx-auto mt-2 flex-fill text-center" >
                        <img src=" http://localhost:3000/assets/logos/iscof.png" height="30px" alt="..." />
                    </a>
                </div>

                <ul className="navbar-nav flex-fill w-100 mb-2">
                    {
                        performanceManagement.map( ( nav: any, index: any ) => (
                            <li key={index} className={`nav-item w-100 ${ base.route + nav.route === window.location.href ? 'active' : '' }`}>
                                <a
                                    onClick={() => {
                                        history.push( nav.route )
                                    }}
                                    role="button" className="nav-link" >
                                    <i className={`fe ${ nav.icon }  fe-16`}></i>
                                    <span className="ml-3 item-text">{nav.title}</span>
                                </a>
                            </li>
                        ) )
                    }
                </ul>

                <ul style={{ marginTop: '-1rem' }} className="navbar-nav flex-fill w-100 mb-0">
                    <p className="text-muted   nav-heading mt-4 mb-1">
                        <span>Users</span>
                    </p>
                    {
                        usersNav.map( ( nav: any, index: any ) => (
                            <li key={index} className={`nav-item w-100 ${ base.route + nav.route === window.location.href ? 'active' : '' }`}>
                                <a onClick={() => history.push( nav.route )} role="button" className="nav-link" >
                                    <i className={`fe ${ nav.icon }  fe-16`}></i>
                                    <span className="ml-3 item-text">{nav.title}</span>
                                </a>
                            </li>
                        ) )
                    }
                    <p className="text-muted   nav-heading mt-4 mb-1">
                        <span>Supervisions</span>
                    </p>
                    {
                        supervisions.map( ( nav: any, index: any ) => (
                            <li key={index} className={`nav-item w-100 ${ base.route + nav.route === window.location.href ? 'active' : '' }`}>
                                <a onClick={() => history.push( nav.route )} role="button" className="nav-link" >
                                    <i className={`fe ${ nav.icon }  fe-16`}></i>
                                    <span className="ml-3 item-text">{nav.title}</span>
                                </a>
                            </li>
                        ) )
                    }

                    <p className="text-muted   nav-heading mt-4 mb-1">
                        <span>Assignatories</span>
                    </p>
                    {
                        asignatories.map( ( nav: any, index: any ) => (
                            <li key={index} className={`nav-item w-100 ${ base.route + nav.route === window.location.href ? 'active' : '' }`}>
                                <a onClick={() => history.push( nav.route )} role="button" className="nav-link" >
                                    <i className={`fe ${ nav.icon }  fe-16`}></i>
                                    <span className="ml-3 item-text">{nav.title}</span>
                                </a>
                            </li>
                        ) )
                    }


                    <p className="text-muted nav-heading mt-4 mb-1">
                        <span>Recruitement</span>
                    </p>
                    {
                        recruitmentProcess.map( ( nav: any, index: any ) => (
                            <li key={index} className={`nav-item w-100 ${ base.route + nav.route === window.location.href ? 'active' : '' }`}>
                                <a onClick={() => history.push( nav.route )} role="button" className="nav-link" >
                                    <i className={`fe ${ nav.icon }  fe-16`}></i>
                                    <span className="ml-3 item-text">{nav.title}</span>
                                </a>
                            </li>
                        ) )
                    }

                    <p className="text-muted nav-heading mt-4 mb-1">
                        <span>HRD</span>
                    </p>
                    {
                        HRDLearningAndDevelopment.map( ( nav: any, index: any ) => (
                            <li key={index} className={`nav-item w-100 ${ base.route + nav.route === window.location.href ? 'active' : '' }`}>
                                <a onClick={() => history.push( nav.route )} role="button" className="nav-link" >
                                    <i className={`fe ${ nav.icon }  fe-16`}></i>
                                    <span className="ml-3 item-text">{nav.title}</span>
                                </a>
                            </li>
                        ) )
                    }
                    <p className="text-muted nav-heading mt-4 mb-1">
                        <span>Leave</span>
                    </p>
                    {
                        managenentOfLeaveCard.map( ( nav: any, index: any ) => (
                            <li key={index} className={`nav-item w-100 ${ base.route + nav.route === window.location.href ? 'active' : '' }`}>
                                <a onClick={() => history.push( nav.route )} role="button" className="nav-link" >
                                    <i className={`fe ${ nav.icon }  fe-16`}></i>
                                    <span className="ml-3 item-text">{nav.title}</span>
                                </a>
                            </li>
                        ) )
                    }
                    <p className="text-muted nav-heading mt-4 mb-1">
                        <span>Awards & Recognition</span>
                    </p>
                    {
                        awardsAndRecognition.map( ( nav: any, index: any ) => (
                            <li key={index} className={`nav-item w-100 ${ base.route + nav.route === window.location.href ? 'active' : '' }`}>
                                <a onClick={() => history.push( nav.route )} role="button" className="nav-link" >
                                    <i className={`fe ${ nav.icon }  fe-16`}></i>
                                    <span className="ml-3 item-text">{nav.title}</span>
                                </a>
                            </li>
                        ) )
                    }
                    <br />
                    <br />
                    {
                        employemtStatus.map( ( nav: any, index: any ) => (
                            <li key={index} className="nav-item w-100">
                                <a onClick={() => history.push( nav.route )} role="button" className="nav-link" >
                                    <i className={`fe ${ nav.icon }  fe-16`}></i>
                                    <span className="ml-3 item-text">{nav.title}</span>
                                </a>
                            </li>
                        ) )
                    }
                </ul>
            </nav>
        </aside >
    )
}
