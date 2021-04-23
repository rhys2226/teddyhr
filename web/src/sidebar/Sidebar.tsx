import React from 'react'
import { navs } from './Navs'

export default function Sidebar() {




    return (
        <div>
            <aside className="sidebar-left border-right bg-white shadow" id="leftSidebar" data-simplebar>
                <a href="#" className="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3" data-toggle="toggle">
                    <i className="fe fe-x"><span className="sr-only"></span></i>
                </a>
                <nav className="vertnav navbar navbar-light">
                    <div className="w-100 mb-4 d-flex p-2">
                        <h4 className="text-white m-0 text-dark d-flex" style={{ alignItems: 'center' }}>
                            <img src="./assets/logos/logo.gif" height="40px" alt="..." />
                            <span style={{ fontWeight: 900, color: '#002598' }} className="h2 mt-2">HRMO</span>
                        </h4>
                    </div>
                    <ul className="navbar-nav flex-fill w-100 mb-2">

                        {
                            navs.map( ( nav: any, index: any ) => (
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
        </div>
    )
}
